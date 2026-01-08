'use client'

/**
 * BatStrikeAnimation - Signature Dramatic Cricket Bat & Ball Animation
 * 
 * Design Philosophy (Inspired by Awwwards-level motion design):
 * - Creates a "wow moment" that users remember
 * - Physically-inspired motion with realistic ball trajectory
 * - Scroll-triggered to create interactive storytelling
 * - Motion blur and trail effects for speed visualization
 * 
 * Technical Implementation:
 * - GSAP Timeline with ScrollTrigger scrub
 * - Bezier curve path for realistic ball arc
 * - SVG motion blur filter for speed effect
 * - Viewport-aware triggering
 * 
 * @author AI Assistant
 * @version 1.0.0
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { CricketBallSVG, CricketBatSVG } from './SportsSVGIcons';

// Register plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface BatStrikeAnimationProps {
    /** CSS class for the container */
    className?: string;
    /** Enable/disable the animation */
    enabled?: boolean;
    /** Callback when animation completes */
    onComplete?: () => void;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const BatStrikeAnimation: React.FC<BatStrikeAnimationProps> = ({
    className = '',
    enabled = true,
    onComplete
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const batRef = useRef<HTMLDivElement>(null);
    const ballRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const impactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!enabled || typeof window === 'undefined') return;

        const container = containerRef.current;
        const bat = batRef.current;
        const ball = ballRef.current;
        const trail = trailRef.current;
        const impact = impactRef.current;

        if (!container || !bat || !ball || !trail || !impact) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Main timeline for the bat strike sequence
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: 1,
                    // markers: true, // Enable for debugging
                }
            });

            // PHASE 1: Bat winds up (0% - 30%)
            tl.fromTo(bat,
                {
                    x: -100,
                    y: 50,
                    rotation: -45,
                    opacity: 0,
                    scale: 0.8
                },
                {
                    x: 0,
                    y: 0,
                    rotation: -30,
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                }
            );

            // PHASE 2: Ball approaches from right (0% - 35%)
            tl.fromTo(ball,
                {
                    x: window.innerWidth + 100,
                    y: -20,
                    rotation: 0,
                    opacity: 0,
                    scale: 0.5
                },
                {
                    x: 150,
                    y: 0,
                    rotation: 360,
                    opacity: 1,
                    scale: 1,
                    duration: 0.35,
                    ease: 'power1.in'
                },
                0 // Start at same time as bat
            );

            // PHASE 3: Impact moment - bat swings (30% - 50%)
            tl.to(bat, {
                rotation: 45,
                x: 30,
                duration: 0.2,
                ease: 'power4.out'
            });

            // PHASE 4: Impact flash effect
            tl.to(impact, {
                scale: 2,
                opacity: 1,
                duration: 0.05,
                ease: 'power2.out'
            }, '<');

            tl.to(impact, {
                scale: 3,
                opacity: 0,
                duration: 0.15,
                ease: 'power2.out'
            });

            // PHASE 5: Ball launches with curve trajectory (50% - 100%)
            tl.to(ball, {
                motionPath: {
                    path: [
                        { x: 150, y: 0 },
                        { x: window.innerWidth * 0.4, y: -80 },
                        { x: window.innerWidth * 0.7, y: -40 },
                        { x: window.innerWidth + 150, y: 30 }
                    ],
                    curviness: 1.5
                },
                rotation: '+=1080', // 3 full rotations
                scale: 0.6,
                duration: 0.5,
                ease: 'power2.out'
            }, '-=0.05');

            // PHASE 6: Motion trail follows ball
            tl.fromTo(trail,
                {
                    width: 0,
                    opacity: 0,
                    x: 150
                },
                {
                    width: '80vw',
                    opacity: 0.8,
                    x: 150,
                    duration: 0.3,
                    ease: 'power2.out'
                },
                '-=0.4'
            );

            tl.to(trail, {
                opacity: 0,
                duration: 0.2,
                ease: 'power2.out'
            });

            // PHASE 7: Bat follow-through
            tl.to(bat, {
                rotation: 90,
                x: 60,
                opacity: 0.5,
                duration: 0.3,
                ease: 'power1.out',
                onComplete
            }, '-=0.4');

            // Final fade out
            tl.to(bat, {
                opacity: 0,
                duration: 0.2
            });

        }, container);

        return () => ctx.revert();
    }, [enabled, onComplete]);

    if (!enabled) return null;

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-32 md:h-48 overflow-hidden pointer-events-none ${className}`}
            aria-hidden="true"
        >
            {/* Background gradient for atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dfw-red/5 to-transparent" />

            {/* Motion trail effect */}
            <div
                ref={trailRef}
                className="absolute top-1/2 -translate-y-1/2 h-1 rounded-full opacity-0"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(214, 40, 40, 0.6), rgba(214, 40, 40, 0.3), transparent)',
                    filter: 'blur(2px)',
                    left: 0
                }}
            />

            {/* Impact flash effect */}
            <div
                ref={impactRef}
                className="absolute left-[150px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full opacity-0"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(214,40,40,0.6) 40%, transparent 70%)',
                    boxShadow: '0 0 40px rgba(214, 40, 40, 0.8)',
                }}
            />

            {/* Cricket bat */}
            <div
                ref={batRef}
                className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 opacity-0 will-change-transform"
                style={{
                    transformOrigin: 'bottom center',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                }}
            >
                <CricketBatSVG size={50} />
            </div>

            {/* Cricket ball */}
            <div
                ref={ballRef}
                className="absolute top-1/2 -translate-y-1/2 opacity-0 will-change-transform"
                style={{
                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))'
                }}
            >
                <CricketBallSVG size={36} />
            </div>

            {/* Decorative speed lines */}
            <svg
                className="absolute inset-0 w-full h-full opacity-30"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="speedLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="rgba(214, 40, 40, 0.3)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                <line
                    x1="0" y1="40%" x2="100%" y2="40%"
                    stroke="url(#speedLineGradient)"
                    strokeWidth="1"
                    strokeDasharray="20 30"
                />
                <line
                    x1="0" y1="60%" x2="100%" y2="60%"
                    stroke="url(#speedLineGradient)"
                    strokeWidth="1"
                    strokeDasharray="30 20"
                />
            </svg>
        </div>
    );
};

export default BatStrikeAnimation;
