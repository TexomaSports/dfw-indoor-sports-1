'use client'

/**
 * AnimatedSportsIcon - Individual Animated Sports Icons
 * 
 * Design Philosophy:
 * - Micro-interactions that add delight without distraction
 * - Physics-inspired motion (bounce, spin, flutter)
 * - Hover-responsive for interactive feel
 * - Performance-optimized with CSS transforms
 * 
 * @author AI Assistant  
 * @version 1.0.0
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CricketBallSVG, ShuttlecockSVG, SoccerBallSVG, DodgeballSVG } from './SportsSVGIcons';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type SportType = 'cricket' | 'shuttlecock' | 'soccer' | 'dodgeball';

type AnimationType = 'spin' | 'bounce' | 'flutter' | 'pulse' | 'none';

interface AnimatedSportsIconProps {
    sport: SportType;
    animation?: AnimationType;
    size?: number;
    className?: string;
    hoverable?: boolean;
    continuous?: boolean;
    duration?: number;
}

// ============================================================================
// ANIMATION CONFIGURATIONS
// ============================================================================

const animationConfigs: Record<AnimationType, (el: HTMLElement, duration: number) => gsap.core.Tween | gsap.core.Timeline | null> = {
    spin: (el, duration) => gsap.to(el, {
        rotation: 360,
        duration,
        ease: 'linear',
        repeat: -1
    }),

    bounce: (el, duration) => gsap.to(el, {
        y: -8,
        duration: duration / 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
    }),

    flutter: (el, duration) => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(el, { rotateX: 10, rotateY: 5, duration: duration / 4, ease: 'sine.inOut' })
            .to(el, { rotateX: -5, rotateY: -10, duration: duration / 4, ease: 'sine.inOut' })
            .to(el, { rotateX: 5, rotateY: 8, duration: duration / 4, ease: 'sine.inOut' })
            .to(el, { rotateX: 0, rotateY: 0, duration: duration / 4, ease: 'sine.inOut' });
        return tl;
    },

    pulse: (el, duration) => gsap.to(el, {
        scale: 1.1,
        duration: duration / 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
    }),

    none: () => null
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const AnimatedSportsIcon: React.FC<AnimatedSportsIconProps> = ({
    sport,
    animation = 'bounce',
    size = 32,
    className = '',
    hoverable = true,
    continuous = true,
    duration = 2
}) => {
    const iconRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

    // Set up continuous animation
    useEffect(() => {
        if (!continuous || animation === 'none') return;

        const el = iconRef.current;
        if (!el) return;

        // Check reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        animationRef.current = animationConfigs[animation](el, duration);

        return () => {
            animationRef.current?.kill();
        };
    }, [animation, continuous, duration]);

    // Hover effect
    const handleMouseEnter = () => {
        if (!hoverable || !iconRef.current) return;

        gsap.to(iconRef.current, {
            scale: 1.2,
            duration: 0.3,
            ease: 'back.out(1.7)'
        });
    };

    const handleMouseLeave = () => {
        if (!hoverable || !iconRef.current) return;

        gsap.to(iconRef.current, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    // Render appropriate icon
    const renderIcon = () => {
        const props = { size, className: 'drop-shadow-sm' };

        switch (sport) {
            case 'cricket': return <CricketBallSVG {...props} />;
            case 'shuttlecock': return <ShuttlecockSVG {...props} />;
            case 'soccer': return <SoccerBallSVG {...props} />;
            case 'dodgeball': return <DodgeballSVG {...props} />;
            default: return <CricketBallSVG {...props} />;
        }
    };

    return (
        <div
            ref={iconRef}
            className={`inline-flex will-change-transform ${hoverable ? 'cursor-pointer' : ''} ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '500px' }}
        >
            {renderIcon()}
        </div>
    );
};

export default AnimatedSportsIcon;
