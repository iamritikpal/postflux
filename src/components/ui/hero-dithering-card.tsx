"use client"

import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() =>
    import("@paper-design/shaders-react").then((mod) => ({
        default: mod.Dithering as React.ComponentType<any>,
    }))
)

export function CTASection() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="starting-hero-section py-16 w-full flex justify-center items-center px-4 md:px-6 bg-black">
            <div
                className="w-full max-w-7xl relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-neutral-950 shadow-xl min-h-[650px] flex flex-col items-center justify-center duration-500">

                    {/* Shader Background */}
                    <Suspense fallback={<div className="absolute inset-0 bg-black/30" />}>
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
                            <Dithering
                                colorBack="#00000000"
                                colorFront="#6366F1"
                                shape="warp"
                                type="4x4"
                                speed={isHovered ? 0.6 : 0.2}
                                className="size-full"
                                minPixelRatio={1}
                            />
                        </div>
                    </Suspense>

                    <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">

                        {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
                            </span>
                            AI-Powered LinkedIn Posts
                        </div>

                        {/* Headline */}
                        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05]">
                            Your Story, <br />
                            <span className="text-white/70">Delivered Perfectly.</span>
                        </h2>

                        {/* Description */}
                        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                            Join founders using PostFlux to craft powerful LinkedIn posts that
                            sound authentic, engaging, and uniquely theirs.
                        </p>

                        {/* Button */}
                        <button className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-indigo-500 px-12 text-base font-medium text-white transition-all duration-300 hover:bg-indigo-400 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-indigo-500/30">
                            <span className="relative z-10">Get Started</span>
                            <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}