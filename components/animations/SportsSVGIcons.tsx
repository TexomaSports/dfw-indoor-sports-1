'use client'

/**
 * SportsSVGIcons - Premium Micro-Detailed SVG Sports Icons
 * 
 * Inspired by: Peter Tarka's 3D typographic art, Gleb Kuznetsov's emotional interfaces
 * Design Philosophy: Each icon features realistic gradients, shadows, and micro-details
 * that bring life to static elements. These are not flat icons - they have depth,
 * realistic lighting, and subtle texture hints.
 * 
 * @author AI Assistant
 * @version 1.0.0
 */

import React from 'react';

interface IconProps {
    className?: string;
    size?: number;
    style?: React.CSSProperties;
}

/**
 * CricketBall SVG - Features realistic leather texture seam pattern
 * with gradient shading to simulate 3D spherical form
 */
export const CricketBallSVG: React.FC<IconProps> = ({ className = '', size = 48, style }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
        aria-label="Cricket ball"
    >
        <defs>
            {/* Realistic 3D sphere gradient */}
            <radialGradient id="cricketBallGradient" cx="35%" cy="30%" r="60%" fx="30%" fy="25%">
                <stop offset="0%" stopColor="#E53E3E" />
                <stop offset="40%" stopColor="#C53030" />
                <stop offset="80%" stopColor="#9B2C2C" />
                <stop offset="100%" stopColor="#742A2A" />
            </radialGradient>

            {/* Inner shadow for depth */}
            <radialGradient id="cricketInnerShadow" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="transparent" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
            </radialGradient>

            {/* Highlight reflection */}
            <radialGradient id="cricketHighlight" cx="30%" cy="25%" r="30%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            {/* Leather texture filter */}
            <filter id="leatherTexture" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
                <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="1" result="light">
                    <feDistantLight azimuth="45" elevation="60" />
                </feDiffuseLighting>
                <feBlend in="SourceGraphic" in2="light" mode="multiply" />
            </filter>
        </defs>

        {/* Main ball body */}
        <circle cx="32" cy="32" r="28" fill="url(#cricketBallGradient)" />

        {/* Inner shadow overlay */}
        <circle cx="32" cy="32" r="28" fill="url(#cricketInnerShadow)" />

        {/* Seam - The signature cricket ball stitching */}
        <g stroke="#F5F5DC" strokeWidth="1.5" fill="none" strokeLinecap="round">
            {/* Primary seam arc */}
            <path d="M 15 32 Q 20 15, 32 12 Q 44 15, 49 32 Q 44 49, 32 52 Q 20 49, 15 32" />

            {/* Cross stitches on the seam - micro detail */}
            <g strokeWidth="0.8" stroke="#F5DEB3">
                <line x1="18" y1="22" x2="20" y2="26" />
                <line x1="24" y1="15" x2="26" y2="19" />
                <line x1="32" y1="12" x2="32" y2="16" />
                <line x1="40" y1="15" x2="38" y2="19" />
                <line x1="46" y1="22" x2="44" y2="26" />

                <line x1="46" y1="42" x2="44" y2="38" />
                <line x1="40" y1="49" x2="38" y2="45" />
                <line x1="32" y1="52" x2="32" y2="48" />
                <line x1="24" y1="49" x2="26" y2="45" />
                <line x1="18" y1="42" x2="20" y2="38" />
            </g>
        </g>

        {/* Highlight reflection for 3D effect */}
        <ellipse cx="24" cy="22" rx="8" ry="6" fill="url(#cricketHighlight)" />

        {/* Subtle rim light */}
        <circle cx="32" cy="32" r="27" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" fill="none" />
    </svg>
);

/**
 * Shuttlecock SVG - Features feather details with realistic cork base
 * Includes gradient feathers and dynamic spread pattern
 */
export const ShuttlecockSVG: React.FC<IconProps> = ({ className = '', size = 48, style }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
        aria-label="Shuttlecock"
    >
        <defs>
            {/* Cork base gradient */}
            <linearGradient id="corkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFC999" />
                <stop offset="50%" stopColor="#E8A065" />
                <stop offset="100%" stopColor="#C4803C" />
            </linearGradient>

            {/* Feather gradient - white to light gray */}
            <linearGradient id="featherGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#E8E8E8" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F5F5F5" />
            </linearGradient>

            {/* Feather shadow */}
            <linearGradient id="featherShadow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
                <stop offset="50%" stopColor="transparent" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
            </linearGradient>
        </defs>

        {/* Feathers - 8 individual feathers with realistic spread */}
        <g>
            {/* Center back feather */}
            <path d="M 32 0 L 36 30 Q 32 35, 28 30 Z" fill="url(#featherGradient)" stroke="#DDD" strokeWidth="0.5" />

            {/* Left feathers */}
            <path d="M 32 0 L 22 28 Q 24 34, 28 30 Z" fill="url(#featherGradient)" stroke="#DDD" strokeWidth="0.5" opacity="0.95" />
            <path d="M 32 0 L 14 24 Q 18 32, 24 30 Z" fill="url(#featherGradient)" stroke="#DDD" strokeWidth="0.5" opacity="0.9" />
            <path d="M 32 0 L 8 18 Q 14 28, 20 28 Z" fill="url(#featherGradient)" stroke="#DDD" strokeWidth="0.5" opacity="0.85" />

            {/* Right feathers */}
            <path d="M 32 0 L 42 28 Q 40 34, 36 30 Z" fill="url(#featherGradient)" stroke="#DDD" strokeWidth="0.5" opacity="0.95" />
            <path d="M 32 0 L 50 24 Q 46 32, 40 30 Z" fill="url(#featherGradient)" stroke="#DDD" strokeWidth="0.5" opacity="0.9" />
            <path d="M 32 0 L 56 18 Q 50 28, 44 28 Z" fill="url(#featherGradient)" stroke="#DDD" strokeWidth="0.5" opacity="0.85" />

            {/* Feather quill lines - micro detail */}
            <g stroke="#CCC" strokeWidth="0.3" opacity="0.7">
                <line x1="32" y1="2" x2="32" y2="28" />
                <line x1="32" y1="2" x2="24" y2="26" />
                <line x1="32" y1="2" x2="16" y2="22" />
                <line x1="32" y1="2" x2="40" y2="26" />
                <line x1="32" y1="2" x2="48" y2="22" />
            </g>
        </g>

        {/* Feather band / skirt base */}
        <ellipse cx="32" cy="32" rx="16" ry="6" fill="#E0E0E0" stroke="#CCC" strokeWidth="0.5" />

        {/* Cork hemisphere base */}
        <ellipse cx="32" cy="36" rx="10" ry="4" fill="#E8A065" />
        <path
            d="M 22 36 Q 22 52, 32 55 Q 42 52, 42 36"
            fill="url(#corkGradient)"
            stroke="#B8763A"
            strokeWidth="0.5"
        />

        {/* Cork highlight */}
        <ellipse cx="28" cy="42" rx="3" ry="4" fill="rgba(255,255,255,0.2)" />

        {/* Cork texture dots - micro detail */}
        <g fill="#B8763A" opacity="0.4">
            <circle cx="30" cy="44" r="0.8" />
            <circle cx="34" cy="46" r="0.6" />
            <circle cx="28" cy="48" r="0.5" />
            <circle cx="36" cy="43" r="0.7" />
            <circle cx="32" cy="50" r="0.5" />
        </g>
    </svg>
);

/**
 * SoccerBall SVG - Classic pentagon/hexagon pattern with 3D shading
 * Features realistic panel shadows and highlight reflections
 */
export const SoccerBallSVG: React.FC<IconProps> = ({ className = '', size = 48, style }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
        aria-label="Soccer ball"
    >
        <defs>
            {/* Ball base gradient */}
            <radialGradient id="soccerBallGradient" cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#F5F5F5" />
                <stop offset="100%" stopColor="#E0E0E0" />
            </radialGradient>

            {/* Black panel gradient for depth */}
            <radialGradient id="blackPanelGradient" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#2D2D2D" />
                <stop offset="100%" stopColor="#1a1a1a" />
            </radialGradient>

            {/* Highlight */}
            <radialGradient id="soccerHighlight" cx="25%" cy="20%" r="25%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="transparent" />
            </radialGradient>
        </defs>

        {/* Ball base */}
        <circle cx="32" cy="32" r="28" fill="url(#soccerBallGradient)" />

        {/* Pentagon panels - black */}
        {/* Center pentagon */}
        <polygon
            points="32,18 40,24 38,34 26,34 24,24"
            fill="url(#blackPanelGradient)"
            stroke="#1a1a1a"
            strokeWidth="0.5"
        />

        {/* Top pentagon */}
        <polygon
            points="32,6 38,10 36,18 28,18 26,10"
            fill="url(#blackPanelGradient)"
            stroke="#1a1a1a"
            strokeWidth="0.5"
        />

        {/* Bottom pentagon */}
        <polygon
            points="32,58 26,54 28,46 36,46 38,54"
            fill="url(#blackPanelGradient)"
            stroke="#1a1a1a"
            strokeWidth="0.5"
        />

        {/* Left pentagon */}
        <polygon
            points="8,32 12,26 20,28 20,36 12,38"
            fill="url(#blackPanelGradient)"
            stroke="#1a1a1a"
            strokeWidth="0.5"
        />

        {/* Right pentagon */}
        <polygon
            points="56,32 52,38 44,36 44,28 52,26"
            fill="url(#blackPanelGradient)"
            stroke="#1a1a1a"
            strokeWidth="0.5"
        />

        {/* Panel seam lines - hexagon pattern */}
        <g stroke="#CCC" strokeWidth="0.8" fill="none">
            {/* Connecting lines between panels */}
            <line x1="32" y1="6" x2="32" y2="18" />
            <line x1="40" y1="24" x2="52" y2="26" />
            <line x1="38" y1="34" x2="44" y2="36" />
            <line x1="26" y1="34" x2="20" y2="36" />
            <line x1="24" y1="24" x2="12" y2="26" />
            <line x1="32" y1="46" x2="32" y2="58" />
            <line x1="36" y1="46" x2="44" y2="36" />
            <line x1="28" y1="46" x2="20" y2="36" />
        </g>

        {/* Highlight reflection */}
        <ellipse cx="22" cy="18" rx="8" ry="5" fill="url(#soccerHighlight)" />

        {/* Subtle edge shadow */}
        <circle cx="32" cy="32" r="27.5" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
    </svg>
);

/**
 * CricketBat SVG - Detailed willow bat with handle grip
 * Features wood grain texture hints and realistic shape
 */
export const CricketBatSVG: React.FC<IconProps> = ({ className = '', size = 80, style }) => (
    <svg
        width={size}
        height={size * 2}
        viewBox="0 0 40 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
        aria-label="Cricket bat"
    >
        <defs>
            {/* Willow wood gradient */}
            <linearGradient id="willowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5DEB3" />
                <stop offset="30%" stopColor="#FAEBD7" />
                <stop offset="70%" stopColor="#F5DEB3" />
                <stop offset="100%" stopColor="#DEB887" />
            </linearGradient>

            {/* Handle rubber grip gradient */}
            <linearGradient id="gripGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2D2D2D" />
                <stop offset="50%" stopColor="#4A4A4A" />
                <stop offset="100%" stopColor="#2D2D2D" />
            </linearGradient>

            {/* Handle wrap gradient */}
            <linearGradient id="handleWrapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B4513" />
                <stop offset="50%" stopColor="#A0522D" />
                <stop offset="100%" stopColor="#8B4513" />
            </linearGradient>
        </defs>

        {/* Bat blade */}
        <path
            d="M 12 25 L 8 35 L 8 85 Q 8 95, 20 95 Q 32 95, 32 85 L 32 35 L 28 25"
            fill="url(#willowGradient)"
            stroke="#C4A35A"
            strokeWidth="0.5"
        />

        {/* Wood grain lines - micro detail */}
        <g stroke="#D4B896" strokeWidth="0.3" opacity="0.5">
            <line x1="14" y1="35" x2="14" y2="90" />
            <line x1="18" y1="30" x2="18" y2="93" />
            <line x1="22" y1="30" x2="22" y2="93" />
            <line x1="26" y1="35" x2="26" y2="90" />
        </g>

        {/* Bat edge shadow */}
        <path
            d="M 8 35 L 8 85 Q 8 90, 12 92"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="2"
            fill="none"
        />

        {/* Handle splice (where blade meets handle) */}
        <rect x="14" y="22" width="12" height="6" rx="1" fill="#C4A35A" />

        {/* Handle */}
        <rect x="16" y="5" width="8" height="20" rx="2" fill="url(#handleWrapGradient)" />

        {/* Rubber grip at top */}
        <rect x="16" y="2" width="8" height="6" rx="2" fill="url(#gripGradient)" />

        {/* Grip texture lines */}
        <g stroke="#5A5A5A" strokeWidth="0.3" opacity="0.5">
            <line x1="17" y1="4" x2="23" y2="4" />
            <line x1="17" y1="5.5" x2="23" y2="5.5" />
            <line x1="17" y1="7" x2="23" y2="7" />
        </g>

        {/* Handle wrap spiral lines - micro detail */}
        <g stroke="#6B3A0A" strokeWidth="0.4" opacity="0.6">
            <line x1="16" y1="10" x2="24" y2="11" />
            <line x1="16" y1="14" x2="24" y2="15" />
            <line x1="16" y1="18" x2="24" y2="19" />
        </g>

        {/* Highlight on blade face */}
        <ellipse cx="20" cy="60" rx="6" ry="20" fill="rgba(255,255,255,0.15)" />
    </svg>
);

/**
 * DodgeballSVG - Rubber dodgeball with dimpled texture
 * Features the classic red rubber ball appearance
 */
export const DodgeballSVG: React.FC<IconProps> = ({ className = '', size = 48, style }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
        aria-label="Dodgeball"
    >
        <defs>
            <radialGradient id="dodgeballGradient" cx="35%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#E53E3E" />
                <stop offset="100%" stopColor="#C53030" />
            </radialGradient>

            <radialGradient id="dodgeballHighlight" cx="30%" cy="25%" r="30%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="transparent" />
            </radialGradient>
        </defs>

        <circle cx="32" cy="32" r="28" fill="url(#dodgeballGradient)" />

        {/* Rubber dimple pattern - characteristic texture */}
        <g fill="rgba(0,0,0,0.08)">
            <circle cx="20" cy="20" r="3" />
            <circle cx="32" cy="16" r="3" />
            <circle cx="44" cy="20" r="3" />
            <circle cx="16" cy="32" r="3" />
            <circle cx="32" cy="32" r="3" />
            <circle cx="48" cy="32" r="3" />
            <circle cx="20" cy="44" r="3" />
            <circle cx="32" cy="48" r="3" />
            <circle cx="44" cy="44" r="3" />
        </g>

        {/* Panel seam lines */}
        <g stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" fill="none">
            <ellipse cx="32" cy="32" rx="28" ry="10" />
            <ellipse cx="32" cy="32" rx="10" ry="28" />
        </g>

        <ellipse cx="24" cy="22" rx="8" ry="6" fill="url(#dodgeballHighlight)" />
    </svg>
);

export default {
    CricketBallSVG,
    ShuttlecockSVG,
    SoccerBallSVG,
    CricketBatSVG,
    DodgeballSVG,
};
