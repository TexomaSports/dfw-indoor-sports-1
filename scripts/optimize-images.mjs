#!/usr/bin/env node
/**
 * Image Optimization Script
 * Compresses all WebP images in public/images to optimal size while maintaining quality
 * 
 * Usage: npm run optimize-images
 * Requires: npm install sharp --save-dev
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const IMAGES_DIR = path.join(ROOT_DIR, 'public', 'images');

// Configuration
const CONFIG = {
    maxWidth: 1920,           // Max width for hero/large images
    maxWidthSmall: 1200,      // Max width for card/thumbnail images (increased)
    quality: 92,              // WebP quality (90-95 for high quality)
    targetMaxBytes: 300 * 1024, // Target max file size: 300KB
    skipIfBelow: 30 * 1024,   // Skip if already under 30KB
};

// Track statistics
const stats = {
    processed: 0,
    skipped: 0,
    totalSavedBytes: 0,
    errors: [],
};

/**
 * Get all WebP files recursively
 */
function getWebpFiles(dir, files = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            getWebpFiles(fullPath, files);
        } else if (entry.name.endsWith('.webp')) {
            files.push(fullPath);
        }
    }

    return files;
}

/**
 * Optimize a single image
 */
async function optimizeImage(filePath) {
    const relativePath = path.relative(IMAGES_DIR, filePath);
    const originalStats = fs.statSync(filePath);
    const originalSize = originalStats.size;

    // Skip small files
    if (originalSize < CONFIG.skipIfBelow) {
        console.log(`⏭️  Skipping (already small): ${relativePath} (${formatBytes(originalSize)})`);
        stats.skipped++;
        return;
    }

    try {
        // Determine max width based on path (hero images get full size)
        const isHeroOrLarge = relativePath.includes('hero') ||
            relativePath.includes('parallax') ||
            relativePath.includes('banner');
        const maxWidth = isHeroOrLarge ? CONFIG.maxWidth : CONFIG.maxWidthSmall;

        // Read and get metadata
        const image = sharp(filePath);
        const metadata = await image.metadata();

        // Calculate new dimensions
        let width = metadata.width;
        let height = metadata.height;

        if (width > maxWidth) {
            const ratio = maxWidth / width;
            width = maxWidth;
            height = Math.round(height * ratio);
        }

        // Optimize
        const optimizedBuffer = await sharp(filePath)
            .resize(width, height, {
                fit: 'inside',
                withoutEnlargement: true,
            })
            .webp({
                quality: CONFIG.quality,
                effort: 6, // Higher effort = better compression
                smartSubsample: true,
            })
            .toBuffer();

        const newSize = optimizedBuffer.length;

        // Only save if we actually reduced size
        if (newSize < originalSize) {
            fs.writeFileSync(filePath, optimizedBuffer);
            const savedBytes = originalSize - newSize;
            stats.totalSavedBytes += savedBytes;
            stats.processed++;

            console.log(
                `✅ Optimized: ${relativePath}\n` +
                `   ${formatBytes(originalSize)} → ${formatBytes(newSize)} ` +
                `(saved ${formatBytes(savedBytes)}, ${Math.round((savedBytes / originalSize) * 100)}%)`
            );
        } else {
            console.log(`⏭️  Skipping (already optimal): ${relativePath}`);
            stats.skipped++;
        }
    } catch (error) {
        console.error(`❌ Error processing ${relativePath}:`, error.message);
        stats.errors.push({ file: relativePath, error: error.message });
    }
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

/**
 * Main function
 */
async function main() {
    console.log('🖼️  Image Optimization Script');
    console.log('━'.repeat(50));
    console.log(`📁 Scanning: ${IMAGES_DIR}\n`);

    const files = getWebpFiles(IMAGES_DIR);
    console.log(`📊 Found ${files.length} WebP images\n`);

    // Sort by size (largest first)
    files.sort((a, b) => {
        return fs.statSync(b).size - fs.statSync(a).size;
    });

    for (const file of files) {
        await optimizeImage(file);
    }

    // Print summary
    console.log('\n' + '━'.repeat(50));
    console.log('📈 OPTIMIZATION SUMMARY');
    console.log('━'.repeat(50));
    console.log(`✅ Processed: ${stats.processed} images`);
    console.log(`⏭️  Skipped: ${stats.skipped} images`);
    console.log(`💾 Total saved: ${formatBytes(stats.totalSavedBytes)}`);

    if (stats.errors.length > 0) {
        console.log(`❌ Errors: ${stats.errors.length}`);
        stats.errors.forEach(e => console.log(`   - ${e.file}: ${e.error}`));
    }
}

main().catch(console.error);
