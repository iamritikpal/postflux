"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Record Your Voice",
        description:
            "Simply speak your thoughts, experiences, or insights. Our AI captures every nuance of your message.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
        ),
        color: "from-blue-500 to-indigo-600",
        bgColor: "bg-blue-50",
    },
    {
        number: "02",
        title: "AI Understands Your Tone",
        description:
            "PostFlux analyzes your speaking style, intent, and expertise to craft the perfect LinkedIn narrative.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        ),
        color: "from-violet-500 to-purple-600",
        bgColor: "bg-violet-50",
    },
    {
        number: "03",
        title: "Get LinkedIn-Ready Content",
        description:
            "Receive polished, engaging posts optimized for LinkedIn's algorithm. Review, tweak, and publish.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        ),
        color: "from-emerald-500 to-teal-600",
        bgColor: "bg-emerald-50",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <span className="inline-block text-xs font-semibold text-primary-600 tracking-widest uppercase mb-4">
                        How It Works
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Three Steps to{" "}
                        <span className="gradient-text">LinkedIn Authority</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                        From raw voice to polished post in minutes, not hours.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connector line — desktop */}
                    <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-blue-300 via-violet-300 to-emerald-300 origin-left rounded-full"
                        />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="relative text-center"
                            >
                                {/* Step icon */}
                                <div className="relative inline-flex mb-8">
                                    <div className={`w-20 h-20 rounded-2xl ${step.bgColor} flex items-center justify-center relative z-10`}>
                                        <div className={`bg-gradient-to-br ${step.color}`} style={{ WebkitBackgroundClip: "text" }}>
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br ${step.color} text-white text-xs font-bold flex items-center justify-center shadow-lg z-20`}>
                                        {step.number}
                                    </div>
                                </div>

                                {/* Mobile connector */}
                                {i < 2 && (
                                    <div className="lg:hidden flex justify-center my-2">
                                        <motion.div
                                            initial={{ scaleY: 0 }}
                                            whileInView={{ scaleY: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="w-0.5 h-8 bg-gradient-to-b from-gray-200 to-gray-300 origin-top"
                                        />
                                    </div>
                                )}

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
