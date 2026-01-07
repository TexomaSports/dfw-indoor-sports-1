'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error: Error | null
    errorInfo: ErrorInfo | null
}

/**
 * ErrorBoundary component to catch and display errors gracefully
 * Wrap critical sections of your app with this component
 */
export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false, error: null, errorInfo: null }
    }

    static getDerivedStateFromError(error: Error): Partial<State> {
        // Update state so the next render will show the fallback UI
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log error to console in development
        console.error('ErrorBoundary caught an error:', error, errorInfo)
        this.setState({ errorInfo })

        // You could also log to an error reporting service here
        // e.g., Sentry, LogRocket, etc.
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null, errorInfo: null })
    }

    render() {
        if (this.state.hasError) {
            // Custom fallback if provided
            if (this.props.fallback) {
                return this.props.fallback
            }

            // Default error UI
            return (
                <div className="min-h-[400px] flex items-center justify-center p-8">
                    <div className="max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center">
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-8 h-8 text-red-400" />
                        </div>

                        <h2 className="text-2xl font-header font-bold text-white uppercase mb-3">
                            Something Went Wrong
                        </h2>

                        <p className="text-gray-400 mb-6 text-sm">
                            We encountered an unexpected error. Please try again or return to the homepage.
                        </p>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mb-6 text-left">
                                <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-300 transition-colors">
                                    Error Details
                                </summary>
                                <pre className="mt-2 p-3 bg-black/50 rounded text-xs text-red-300 overflow-auto max-h-32">
                                    {this.state.error.message}
                                </pre>
                            </details>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={this.handleReset}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dfw-red text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-red-600 transition-colors"
                            >
                                <RefreshCw size={14} />
                                Try Again
                            </button>

                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white/20 transition-colors"
                            >
                                <Home size={14} />
                                Go Home
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
