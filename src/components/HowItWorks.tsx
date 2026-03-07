"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Record Your Voice",
        description:
            "Simply speak your thoughts, experiences, or insights. Our AI captures every nuance of your message.",
        image: "/step1.png",
        color: "from-blue-500 to-indigo-600",
        bgColor: "bg-blue-50",
    },
    {
        number: "02",
        title: "AI Understands Your Tone",
        description:
            "PostFlux analyzes your speaking style, intent, and expertise to craft the perfect LinkedIn narrative.",
        image: "/step2.png",
        color: "from-violet-500 to-purple-600",
        bgColor: "bg-violet-50",
    },
    {
        number: "03",
        title: "Get LinkedIn-Ready Content",
        description:
            "Receive polished, engaging posts optimized for LinkedIn's algorithm. Review, tweak, and publish.",
        image: "/step3.png",
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
                                {/* Step image */}
                                <div className="relative inline-flex mb-8">
                                    <div
                                        className={`group w-35 h-35 rounded-2xl ${step.bgColor} flex items-center justify-center relative z-10 overflow-hidden border border-gray-100`}
                                    >
                                        <Image
                                            src={step.image}
                                            alt={`${step.title} illustration`}
                                            width={96}
                                            height={96}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br ${step.color} text-white text-xs font-bold flex items-center justify-center shadow-lg z-20`}>
                                        {step.number}
                                    </div>
                                </div>

                                {/* Mobile directional arrow */}
                                {i < 2 && (
                                    <div className="lg:hidden flex justify-center my-2">
                                        <motion.span
                                            initial={{ opacity: 0, y: -4 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-500"
                                        >
                                            <ArrowDown size={18} />
                                        </motion.span>
                                    </div>
                                )}

                                {/* Desktop directional arrows */}
                                {i < 2 && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -8 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                        className="hidden lg:inline-flex absolute top-10 -right-8 xl:-right-10 items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 shadow-sm"
                                    >
                                        <ArrowRight size={18} />
                                    </motion.span>
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
