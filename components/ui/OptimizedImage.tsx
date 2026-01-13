'use client'

import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
    /**
     * Show shimmer effect while loading
     */
    showShimmer?: boolean
    /**
     * Custom fallback component or image
     */
    fallbackSrc?: string
    /**
     * Additional wrapper className
     */
    wrapperClassName?: string
    /**
     * Image quality (1-100), higher = better quality but larger file
     */
    quality?: number
    /**
     * Responsive sizes hint for Next.js image optimization
     * Defaults to full viewport width for best quality
     */
    sizes?: string
}

/**
 * OptimizedImage - Enterprise-grade image component
 * 
 * Features:
 * - Automatic blur placeholder for remote images
 * - Shimmer loading animation
 * - Error fallback handling
 * - Lazy loading by default
 * - Smooth fade-in transition
 * - Responsive sizes for optimal quality
 */
export function OptimizedImage({
    src,
    alt,
    className = '',
    wrapperClassName = '',
    showShimmer = true,
    fallbackSrc = '/images/placeholder.svg',
    priority = false,
    fill,
    quality = 85,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    ...props
}: OptimizedImageProps & { fill?: boolean }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    const handleLoad = () => {
        setIsLoaded(true)
    }

    const handleError = () => {
        setHasError(true)
        setIsLoaded(true)
    }

    // Determine the actual source to use
    const imageSrc = hasError && fallbackSrc ? fallbackSrc : src

    // When using fill mode, the wrapper needs to fill its parent container
    const fillStyles = fill ? 'absolute inset-0 h-full w-full' : ''

    return (
        <div className={`relative overflow-hidden ${fillStyles} ${wrapperClassName}`}>
            {/* Shimmer Loading Effect */}
            {showShimmer && !isLoaded && (
                <div
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
                    aria-hidden="true"
                >
                    <div
                        className="absolute inset-0 animate-shimmer"
                        style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                            animation: 'shimmer 2s infinite',
                        }}
                    />
                </div>
            )}

            {/* Error State */}
            {hasError && !fallbackSrc && (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-gray-500 p-4">
                        <svg
                            className="w-10 h-10 mx-auto mb-2 opacity-40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="text-xs">Image unavailable</span>
                    </div>
                </div>
            )}

            {/* Optimized Image */}
            <Image
                src={imageSrc}
                alt={alt}
                fill={fill}
                quality={quality}
                sizes={sizes}
                className={`
          transition-opacity duration-500 ease-out
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${className}
        `}
                onLoad={handleLoad}
                onError={handleError}
                priority={priority}
                loading={priority ? 'eager' : 'lazy'}
                {...props}
            />
        </div>
    )
}

export default OptimizedImage
