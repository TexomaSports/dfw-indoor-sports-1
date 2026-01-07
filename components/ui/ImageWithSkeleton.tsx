'use client'

import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface ImageWithSkeletonProps extends Omit<ImageProps, 'onLoad'> {
    skeletonClassName?: string
}

/**
 * Image component with loading skeleton
 * Shows a pulsing placeholder while the image loads
 */
export function ImageWithSkeleton({
    src,
    alt,
    className = '',
    skeletonClassName = '',
    ...props
}: ImageWithSkeletonProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    return (
        <div className="relative overflow-hidden">
            {/* Skeleton loader */}
            {!isLoaded && !hasError && (
                <div
                    className={`absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse ${skeletonClassName}`}
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                </div>
            )}

            {/* Error state */}
            {hasError && (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                        <svg
                            className="w-8 h-8 mx-auto mb-2 opacity-50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="text-xs">Failed to load</span>
                    </div>
                </div>
            )}

            {/* Actual image */}
            <Image
                src={src}
                alt={alt}
                className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                {...props}
            />
        </div>
    )
}

export default ImageWithSkeleton
