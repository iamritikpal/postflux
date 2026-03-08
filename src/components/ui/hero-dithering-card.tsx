"use client"

import Image from "next/image"
import { ArrowRight, Star, Users } from "lucide-react"
import { motion } from "framer-motion"
import s from "./hero-dithering-card.module.css"

export function CTASection() {
    return (
        <section className={s.section}>

            {/* Background glows */}
            <div className={s.glowWrap}>
                <div className={s.glowTop} />
                <div className={s.glowBottom} />
            </div>

            {/* Dot grid */}
            <div className={s.dotGrid} />

            <div className={s.container}>
                <div className={s.grid}>

                    {/* ── LEFT COLUMN ── */}
                    <div className={s.leftCol}>

                        {/* Social proof */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={s.socialProofRow}
                        >
                            <div className={s.socialProofPill}>
                                <div className={s.avatarStack}>
                                    {["#818cf8", "#a78bfa", "#38bdf8"].map((color, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                width: 20,
                                                height: 20,
                                                borderRadius: "50%",
                                                background: color,
                                                border: "2px solid #000",
                                                marginLeft: i === 0 ? 0 : -6,
                                            }}
                                        />
                                    ))}
                                </div>
                                <Users size={14} style={{ color: "rgba(255,255,255,0.5)", marginLeft: 4 }} />
                                <span className={s.socialProofText}>1,000+ creators</span>
                            </div>
                            <div className={s.ratingPill}>
                                <Star size={14} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
                                <span className={s.ratingText}>4.9</span>
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={s.headline}
                        >
                            Post<span className={s.headlineAccent}>Flux</span>
                            <span className={s.headlinePlus}>+</span>
                        </motion.h1>

                        {/* Divider */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className={s.divider}
                        />

                        {/* Sub-headline */}
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={s.subHeadline}
                        >
                            Turn Your Voice Into LinkedIn Authority <br />Up To 10× Faster.
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.28 }}
                            className={s.description}
                        >
                            Speak your ideas. PostFlux&apos;s AI writes polished LinkedIn posts that match
                            your unique voice and style — so you can grow your brand without the
                            blank-page struggle.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.34 }}
                            className={s.ctaRow}
                        >
                            <a href="https://app.postflux.tech/signup" className={s.ctaPrimary}>
                                Get Started — It&apos;s Free
                                <ArrowRight size={16} />
                            </a>
                            <a href="#pricing" className={s.ctaSecondary}>
                                See Pricing
                                <ArrowRight size={14} />
                            </a>
                        </motion.div>

                        {/* Trust strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.44 }}
                            className={s.trustStrip}
                        >
                            <span>
                                <span className={s.trustDot} />
                                No credit card required
                            </span>
                            <span className={s.trustDivider} />
                            <span>4 free generations on signup</span>
                            <span className={s.trustDivider} />
                            <span>Cancel anytime</span>
                        </motion.div>
                    </div>

                    {/* ── RIGHT COLUMN ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className={s.rightCol}
                    >
                        <div className={s.bannerGlow} />

                        {/* Floating stat — top */}
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.55 }}
                            className={`${s.statCard} ${s.statCardTop}`}
                        >
                            <p className={s.statLabel}>Posts generated</p>
                            <p className={s.statValue}>10K+</p>
                            <p className={s.statSubUp}>↑ this month</p>
                        </motion.div>

                        {/* Floating stat — bottom */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.65 }}
                            className={`${s.statCard} ${s.statCardBottom}`}
                        >
                            <p className={s.statLabel}>Avg. time saved</p>
                            <p className={s.statValue}>2 hrs</p>
                            <p className={s.statSubDown}>per post</p>
                        </motion.div>

                        {/* Banner */}
                        <div className={s.bannerWrap}>
                            <Image
                                src="/banner.svg"
                                alt="PostFlux – voice to LinkedIn content illustration"
                                width={960}
                                height={960}
                                className={s.bannerImg}
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
