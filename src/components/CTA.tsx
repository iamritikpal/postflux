"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
    return (
        <section id="cta" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-purple-600" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Glow orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold mb-6">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        Limited Time Offer
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight"
                >
                    Get Started with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                        PostFlux
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed"
                >
                    Try 4 free generations — no credit card required. Experience the power
                    of voice-to-LinkedIn content today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="#"
                        className="shine-effect inline-flex items-center justify-center gap-2 text-base font-semibold text-primary-600 bg-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Try 4 Free Generations
                        <svg
                            width="18"
                            height="18"
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
                    </Link>
                    <Link
                        href="#pricing"
                        className="inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        View Plans
                    </Link>
                </motion.div>

                {/* Trust */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-8 text-sm text-white/40 flex items-center justify-center gap-2"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    No credit card required • Cancel anytime
                </motion.p>
            </div>
        </section>
    );
}
