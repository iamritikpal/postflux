"use client";

import { motion } from "framer-motion";
import { Mic, Brain, FileText, TrendingUp } from "lucide-react";

const capabilities = [
    {
        icon: Mic,
        title: "Voice-First Content",
        description:
            "Record your thoughts naturally — PostFlux captures your raw ideas through voice so you never lose an insight.",
    },
    {
        icon: Brain,
        title: "AI Style Matching",
        description:
            "We analyze your LinkedIn profile to learn your unique writing voice, then generate posts that sound authentically you.",
    },
    {
        icon: FileText,
        title: "Polished LinkedIn Posts",
        description:
            "Get ready-to-publish drafts with hooks, CTAs, and multiple variations — refined for maximum engagement.",
    },
    {
        icon: TrendingUp,
        title: "Build Authority Fast",
        description:
            "Consistent, high-quality posting builds your professional brand. Go from silent observer to thought leader.",
    },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function WhatWeDo() {
    return (
        <section className="relative py-24 lg:py-32 bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(99,102,241,0.04),transparent)]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4">
                        What We Do
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                        Turn Your Voice Into{" "}
                        <span className="gradient-text">LinkedIn Authority</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                        PostFlux is a voice-to-content engine for LinkedIn creators. Speak your ideas,
                        and our AI transforms them into polished, high-impact posts that match your
                        personal writing style — so you can build thought leadership without the blank-page struggle.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {capabilities.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center mb-5 transition-colors duration-300">
                                    <Icon className="w-6 h-6 text-indigo-600" strokeWidth={1.8} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-14 text-center"
                >
                    <a
                        href="https://app.postflux.tech/signup"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                        Start creating for free
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
