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
        <section id="pricing" className="relative py-24 lg:py-32" style={{ backgroundColor: "#f5f5f7" }}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(18,20,24,0.08),transparent)]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#121418" }}>
                        Pricing
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                        Simple, <span style={{ color: "#004182" }}>Transparent</span> Pricing
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
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
                                ? "text-white shadow-2xl scale-[1.02] lg:scale-105 z-10"
                                : "bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300"
                                }`}
                            style={plan.popular ? { background: "linear-gradient(to bottom right, #121418, #1a1f26, #252b35)" } : undefined}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-xs font-bold px-4 py-1 rounded-full shadow-lg" style={{ color: "#121418" }}>
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
                                    className={`text-sm mt-1 ${plan.popular ? "text-white/80" : "text-gray-500"
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
                                    className={`text-sm ${plan.popular ? "text-white/80" : "text-gray-500"
                                        }`}
                                >
                                    {plan.period}
                                </span>
                                <p
                                    className={`text-sm font-semibold mt-1 ${plan.popular ? "text-white/90" : ""}`}
                                    style={!plan.popular ? { color: "#121418" } : undefined}
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
                                            stroke={plan.popular ? "white" : "#121418"}
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

                            <a
                                href="https://app.postflux.tech/signup"
                                className={`w-full py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer text-center block ${plan.popular
                                    ? "bg-white hover:shadow-lg hover:-translate-y-0.5"
                                    : "text-white hover:shadow-lg hover:-translate-y-0.5"
                                    }`}
                                style={plan.popular ? { color: "#121418" } : { backgroundColor: "#121418" }}
                            >
                                Get Started
                            </a>
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
                        <span style={{ color: "#121418" }}>Top up anytime</span>
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {topups.map((topup, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                                className="flex items-center justify-between bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                            >
                                <div>
                                    <p className="font-bold text-gray-900">{topup.credits}</p>
                                    <p className="text-xs text-gray-500">{topup.desc}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xl font-extrabold text-gray-900">
                                        {topup.price}
                                    </span>
                                    <a
                                        href="https://app.postflux.tech/signup"
                                        className="text-xs font-semibold text-white px-4 py-2 rounded-full transition-colors cursor-pointer hover:opacity-90"
                                        style={{ backgroundColor: "#121418" }}
                                    >
                                        Buy
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
