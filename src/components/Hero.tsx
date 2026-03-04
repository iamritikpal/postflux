"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
    }),
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background elements */}
            <div className="hero-glow top-[-200px] right-[-100px]" />
            <div className="hero-glow bottom-[-200px] left-[-200px] opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.08),transparent)]" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Copy */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold mb-6"
                        >
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
                            AI-Powered LinkedIn Content
                        </motion.div>

                        <motion.h1
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08]"
                        >
                            Turn Your{" "}
                            <span className="gradient-text">Voice</span> Into{" "}
                            <br className="hidden sm:block" />
                            LinkedIn{" "}
                            <span className="gradient-text">Authority</span>
                        </motion.h1>

                        <motion.p
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="mt-6 text-lg sm:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Record your thoughts, and PostFlux&apos;s AI engine transforms
                            them into high-impact LinkedIn posts that build your professional
                            brand.
                        </motion.p>

                        <motion.div
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                href="#cta"
                                className="shine-effect inline-flex items-center justify-center gap-2 text-base font-semibold text-white gradient-bg px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Try Free Credits
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
                                className="inline-flex items-center justify-center gap-2 text-base font-semibold text-gray-700 bg-white border border-gray-200 px-8 py-4 rounded-full hover:border-primary-300 hover:text-primary-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                            >
                                See Pricing
                            </Link>
                        </motion.div>

                        <motion.div
                            custom={4}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="mt-10 flex items-center gap-3 justify-center lg:justify-start text-sm text-gray-400"
                        >
                            <div className="flex -space-x-2">
                                {[
                                    "bg-gradient-to-br from-blue-400 to-indigo-600",
                                    "bg-gradient-to-br from-emerald-400 to-teal-600",
                                    "bg-gradient-to-br from-orange-400 to-rose-600",
                                    "bg-gradient-to-br from-violet-400 to-purple-600",
                                ].map((bg, i) => (
                                    <div
                                        key={i}
                                        className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-[10px] text-white font-bold`}
                                    >
                                        {["R", "S", "A", "M"][i]}
                                    </div>
                                ))}
                            </div>
                            <span>
                                Trusted by <strong className="text-gray-600">2,000+</strong>{" "}
                                professionals
                            </span>
                        </motion.div>
                    </div>

                    {/* Right — Visual mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative mx-auto max-w-lg">
                            {/* Floating glow ring */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-teal-500/20 rounded-3xl blur-2xl" />

                            {/* Main card */}
                            <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
                                {/* Top bar */}
                                <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50/50">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium ml-2">
                                        PostFlux Studio
                                    </span>
                                </div>

                                <div className="p-6 space-y-5">
                                    {/* Voice waveform */}
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-primary-500/30"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                                <line x1="12" y1="19" x2="12" y2="23" />
                                                <line x1="8" y1="23" x2="16" y2="23" />
                                            </svg>
                                        </motion.div>
                                        <div className="flex-1">
                                            <div className="flex items-end gap-0.5 h-8">
                                                {Array.from({ length: 32 }).map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="flex-1 bg-gradient-to-t from-primary-500 to-purple-400 rounded-full"
                                                        animate={{
                                                            height: [
                                                                `${20 + Math.random() * 60}%`,
                                                                `${20 + Math.random() * 60}%`,
                                                                `${20 + Math.random() * 60}%`,
                                                            ],
                                                        }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                            delay: i * 0.05,
                                                            ease: "easeInOut",
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1">
                                                Recording — 0:42
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrow connector */}
                                    <div className="flex justify-center">
                                        <motion.div
                                            animate={{ y: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center"
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#6366f1"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <polyline points="19 12 12 19 5 12" />
                                            </svg>
                                        </motion.div>
                                    </div>

                                    {/* LinkedIn post preview */}
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                                                <img src="https://media.licdn.com/dms/image/v2/D5603AQEUD-66Lm4Xyg/profile-displayphoto-shrink_400_400/B56ZUxyWkGGUAk-/0/1740297039660?e=1773878400&v=beta&t=pZ2t8VgN7VraxX18_HJcGCuZPD1_c8UX5rz0XSyVkoY" alt="image" className="w-full h-full rounded-full" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-800">
                                                    Ritik Pal
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    Founder & CEO • 1h
                                                </p>
                                            </div>
                                            <div className="ml-auto">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="#0077B5"
                                                >
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2.5 bg-gray-200 rounded-full w-full" />
                                            <div className="h-2.5 bg-gray-200 rounded-full w-5/6" />
                                            <div className="h-2.5 bg-gray-200 rounded-full w-4/6" />
                                        </div>
                                        <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-200">
                                            <span className="text-xs text-gray-400 flex items-center gap-1">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" /><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                                                Like
                                            </span>
                                            <span className="text-xs text-gray-400 flex items-center gap-1">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                                Comment
                                            </span>
                                            <span className="text-xs text-gray-400 flex items-center gap-1">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
                                                Share
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 px-4 py-2.5 flex items-center gap-2"
                            >
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span className="text-xs font-semibold text-gray-700">Post Generated!</span>
                            </motion.div>

                            {/* Floating badge 2 */}
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-3 -left-4 bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 px-4 py-2.5 flex items-center gap-2"
                            >
                                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                </div>
                                <span className="text-xs font-semibold text-gray-700">AI Processing</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
