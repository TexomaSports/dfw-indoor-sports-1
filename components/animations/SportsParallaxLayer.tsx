'use client'

/**
 * SportsParallaxLayer - GSAP-Powered Premium Floating Sports Elements
 * 
 * Design Philosophy (Inspired by Peter Tarka, Gleb Kuznetsov, Fantasy Interactive):
 * - Emotional interfaces that feel alive and responsive
 * - Physics-based natural motion with organic easing
 * - Scroll-linked parallax creating depth and dimension
 * - Performance-optimized with GPU-accelerated transforms
 * 
 * Technical Implementation:
 * - GSAP ScrollTrigger for scroll-linked animations
 * - Randomized positioning for organic feel
 * - Responsive element count (fewer on mobile)
 * - will-change: transform for 60fps performance
 * 
 * @author AI Assistant
 * @version 1.0.0
 */

import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CricketBallSVG, ShuttlecockSVG, SoccerBallSVG, DodgeballSVG } from './SportsSVGIcons';

// Register GSAP plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface FloatingElement {
    id: string;
    type: 'cricket' | 'shuttlecock' | 'soccer' | 'dodgeball';
    initialX: number; // percentage
    initialY: number; // percentage
    size: number;
    parallaxSpeed: number; // multiplier for scroll effect
    rotationSpeed: number;
    floatAmplitude: number;
    floatDuration: number;
    opacity: number;
    delay: number;
}

interface SportsParallaxLayerProps {
    /** Number of floating elements (auto-reduced on mobile) */
    elementCount?: number;
    /** Container section identifier for ScrollTrigger */
    triggerId?: string;
    /** Additional CSS classes */
    className?: string;
    /** Z-index for layering control */
    zIndex?: number;
    /** Which sports to include */
    sports?: Array<'cricket' | 'shuttlecock' | 'soccer' | 'dodgeball'>;
    /** Enable/disable on mobile for performance */
    disableOnMobile?: boolean;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Generate random number within range with optional decimal precision
 */
const randomRange = (min: number, max: number, decimals: number = 2): number => {
    const value = Math.random() * (max - min) + min;
    return Number(value.toFixed(decimals));
};

/**
 * Generate pseudo-random but deterministic positions based on index
 * This ensures SSR consistency between server and client
 */
const generateElements = (
    count: number,
    sports: FloatingElement['type'][]
): FloatingElement[] => {
    // Use seeded positions for SSR consistency
    const positions = [
        { x: 5, y: 15 }, { x: 85, y: 10 }, { x: 15, y: 75 },
        { x: 90, y: 65 }, { x: 45, y: 5 }, { x: 70, y: 80 },
        { x: 25, y: 45 }, { x: 80, y: 35 }, { x: 10, y: 55 },
        { x: 60, y: 20 }, { x: 35, y: 90 }, { x: 95, y: 50 }
    ];

    return Array.from({ length: count }, (_, i) => {
        const pos = positions[i % positions.length];
        return {
            id: `floating-${i}`,
            type: sports[i % sports.length],
            initialX: pos.x + (i * 3) % 10,
            initialY: pos.y + (i * 7) % 15,
            size: 24 + (i % 4) * 12, // 24-60px
            parallaxSpeed: 0.3 + (i % 5) * 0.15, // 0.3-0.9
            rotationSpeed: 10 + (i % 3) * 15, // degrees
            floatAmplitude: 8 + (i % 4) * 4, // pixels
            floatDuration: 4 + (i % 3) * 2, // seconds
            opacity: 0.15 + (i % 4) * 0.1, // 0.15-0.45
            delay: (i % 5) * 0.5 // stagger delay
        };
    });
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const SportsParallaxLayer: React.FC<SportsParallaxLayerProps> = ({
    elementCount = 8,
    triggerId = 'parallax-trigger',
    className = '',
    zIndex = 1,
    sports = ['cricket', 'shuttlecock', 'soccer', 'dodgeball'],
    disableOnMobile = true
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

    // Generate elements with memoization
    const elements = useMemo(
        () => generateElements(elementCount, sports),
        [elementCount, sports]
    );

    // ============================================================================
    // GSAP SCROLL ANIMATIONS
    // ============================================================================

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const container = containerRef.current;
        if (!container) return;

        // Check for reduced motion preference (accessibility)
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        // Check mobile viewport
        const isMobile = window.innerWidth < 768;
        if (disableOnMobile && isMobile) return;

        const ctx = gsap.context(() => {
            elementsRef.current.forEach((el, index) => {
                if (!el) return;

                const element = elements[index];
                if (!element) return;

                // 1. FLOATING ANIMATION (continuous, organic motion)
                gsap.to(el, {
                    y: `+=${element.floatAmplitude}`,
                    duration: element.floatDuration,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    delay: element.delay
                });

                // 2. SUBTLE ROTATION (adds life to static elements)
                gsap.to(el, {
                    rotation: `+=${element.rotationSpeed}`,
                    duration: element.floatDuration * 2,
                    ease: 'none',
                    repeat: -1,
                    delay: element.delay
                });

                // 3. SCROLL-LINKED PARALLAX (the magic sauce)
                gsap.to(el, {
                    y: `-=${200 * element.parallaxSpeed}`,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5, // smooth 1.5s catch-up
                    }
                });

                // 4. FADE IN ON SCROLL (entrance animation)
                gsap.fromTo(el,
                    {
                        opacity: 0,
                        scale: 0.5
                    },
                    {
                        opacity: element.opacity,
                        scale: 1,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: container,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
        }, container);

        // Cleanup
        return () => ctx.revert();
    }, [elements, disableOnMobile]);

    // ============================================================================
    // RENDER ICON BY TYPE
    // ============================================================================

    const renderIcon = (type: FloatingElement['type'], size: number) => {
        const iconProps = { size, className: 'drop-shadow-lg' };

        switch (type) {
            case 'cricket':
                return <CricketBallSVG {...iconProps} />;
            case 'shuttlecock':
                return <ShuttlecockSVG {...iconProps} />;
            case 'soccer':
                return <SoccerBallSVG {...iconProps} />;
            case 'dodgeball':
                return <DodgeballSVG {...iconProps} />;
            default:
                return <CricketBallSVG {...iconProps} />;
        }
    };

    // ============================================================================
    // RENDER
    // ============================================================================

    return (
        <div
            ref={containerRef}
            id={triggerId}
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            style={{ zIndex }}
            aria-hidden="true" // Decorative layer, hidden from screen readers
        >
            {elements.map((el, index) => (
                <div
                    key={el.id}
                    ref={(node) => { elementsRef.current[index] = node; }}
                    className="absolute will-change-transform"
                    style={{
                        left: `${el.initialX}%`,
                        top: `${el.initialY}%`,
                        opacity: 0, // Start hidden, GSAP animates in
                        transform: 'translateZ(0)', // Force GPU layer
                    }}
                >
                    {renderIcon(el.type, el.size)}
                </div>
            ))}
        </div>
    );
};

export default SportsParallaxLayer;
