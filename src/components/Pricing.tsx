"use client";

import { motion } from "framer-motion";

const plans = [
    {
        name: "Starter",
        price: "₹499",
        period: "/mo",
        credits: "100 Credits",
        description: "Perfect for getting started with AI content creation.",
        features: [
            "100 AI generations",
            "Voice recording up to 5 min",
            "Basic tone matching",
            "Email support",
        ],
        popular: false,
        gradient: "from-gray-600 to-gray-800",
    },
    {
        name: "Pro",
        price: "₹999",
        period: "/mo",
        credits: "300 Credits",
        description: "For professionals serious about LinkedIn growth.",
        features: [
            "300 AI generations",
            "Voice recording up to 15 min",
            "Advanced tone & style matching",
            "Priority support",
            "Post analytics",
            "Content calendar",
        ],
        popular: true,
        gradient: "from-primary-500 to-purple-600",
    },
    {
        name: "Ultra",
        price: "₹1999",
        period: "/mo",
        credits: "1000 Credits",
        description: "For teams and power users who create at scale.",
        features: [
            "1000 AI generations",
            "Unlimited recording length",
            "Custom brand voice profiles",
            "Dedicated support",
            "Advanced analytics",
            "Team collaboration",
            "API access",
        ],
        popular: false,
        gradient: "from-emerald-500 to-teal-600",
    },
];

const topups = [
    { credits: "50 Credits", price: "₹199", desc: "Quick boost" },
    { credits: "150 Credits", price: "₹499", desc: "Best value top-up" },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-24 lg:py-32 bg-gray-50/50">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(99,102,241,0.06),transparent)]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="inline-block text-xs font-semibold text-primary-600 tracking-widest uppercase mb-4">
                        Pricing
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Simple, <span className="gradient-text">Transparent</span> Pricing
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                        Start free with 4 generations. Upgrade when you&apos;re ready to grow.
                    </p>
                </motion.div>

                {/* Pricing cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
                >
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            variants={cardUp}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            className={`relative rounded-2xl p-8 transition-all duration-300 ${plan.popular
                                ? "bg-gradient-to-br from-primary-600 via-primary-500 to-purple-600 text-white shadow-2xl shadow-primary-500/25 scale-[1.02] lg:scale-105 z-10"
                                : "bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary-600 text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3
                                    className={`text-lg font-bold ${plan.popular ? "text-white" : "text-gray-900"
                                        }`}
                                >
                                    {plan.name}
                                </h3>
                                <p
                                    className={`text-sm mt-1 ${plan.popular ? "text-white/70" : "text-gray-500"
                                        }`}
                                >
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <span
                                    className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"
                                        }`}
                                >
                                    {plan.price}
                                </span>
                                <span
                                    className={`text-sm ${plan.popular ? "text-white/70" : "text-gray-500"
                                        }`}
                                >
                                    {plan.period}
                                </span>
                                <p
                                    className={`text-sm font-semibold mt-1 ${plan.popular ? "text-white/90" : "text-primary-600"
                                        }`}
                                >
                                    {plan.credits}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke={plan.popular ? "white" : "#6366f1"}
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <span className={plan.popular ? "text-white/90" : "text-gray-600"}>
                                            {feat}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${plan.popular
                                    ? "bg-white text-primary-600 hover:shadow-lg hover:-translate-y-0.5"
                                    : "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5"
                                    }`}
                            >
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Credit top-ups */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 max-w-2xl mx-auto"
                >
                    <h3 className="text-center text-lg font-bold text-gray-900 mb-6">
                        Need more credits?{" "}
                        <span className="gradient-text">Top up anytime</span>
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {topups.map((topup, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                                className="flex items-center justify-between bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300"
                            >
                                <div>
                                    <p className="font-bold text-gray-900">{topup.credits}</p>
                                    <p className="text-xs text-gray-400">{topup.desc}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xl font-extrabold text-gray-900">
                                        {topup.price}
                                    </span>
                                    <button className="text-xs font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-full transition-colors cursor-pointer">
                                        Buy
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
