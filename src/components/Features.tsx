"use client";

import { BentoGridDemo } from "@/components/ui/demo";

export default function Features() {
    return (
        <section id="features" className="relative py-24 lg:py-28 bg-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent)]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block text-xs font-semibold text-primary-300 tracking-widest uppercase mb-4">
                        Features
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                        PostFlux, Built for{" "}
                        <span className="gradient-text">Creator Consistency</span>
                    </h2>
                    <p className="mt-5 text-lg text-white/70 leading-relaxed">
                        A modern voice-to-content workflow: capture ideas, structure with AI,
                        match your style, and publish high-impact LinkedIn posts faster.
                    </p>
                </div>

                <BentoGridDemo />
            </div>
        </section>
    );
}
