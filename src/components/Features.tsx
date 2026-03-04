"use client";

import { Mic, Sparkles, UserCheck, CreditCard, Wand2 } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const featuresData = [
    {
        id: 1,
        title: "Voice Capture",
        date: "Step 1",
        content:
            "Speak naturally and record your raw thoughts, ideas, and expertise. No typing needed — just talk like you would to a colleague.",
        category: "Input",
        icon: Mic,
        relatedIds: [2],
        status: "completed" as const,
        energy: 100,
    },
    {
        id: 2,
        title: "AI Structuring",
        date: "Step 2",
        content:
            "PostFlux's AI engine analyzes your speech patterns, extracts key insights, and structures them into authoritative LinkedIn content.",
        category: "Processing",
        icon: Wand2,
        relatedIds: [1, 3],
        status: "completed" as const,
        energy: 90,
    },
    {
        id: 3,
        title: "Tone Matching",
        date: "Step 3",
        content:
            "Your unique voice and writing style are preserved. Every post sounds authentically you — never robotic or generic AI output.",
        category: "Personalization",
        icon: UserCheck,
        relatedIds: [2, 4],
        status: "in-progress" as const,
        energy: 75,
    },
    {
        id: 4,
        title: "Smart Polish",
        date: "Step 4",
        content:
            "AI-powered formatting, hashtag suggestions, and engagement optimization make every post ready to go viral on LinkedIn.",
        category: "Enhancement",
        icon: Sparkles,
        relatedIds: [3, 5],
        status: "in-progress" as const,
        energy: 60,
    },
    {
        id: 5,
        title: "Flexible Credits",
        date: "Step 5",
        content:
            "Pay as you grow with our credit-based system. Start with free credits and scale your content production when you're ready.",
        category: "Billing",
        icon: CreditCard,
        relatedIds: [4],
        status: "pending" as const,
        energy: 40,
    },
];

export default function Features() {
    return (
        <section id="features" className="relative">
            {/* Section header overlaid on the dark background */}
            <div className="absolute top-0 left-0 right-0 z-10 pt-16 pb-8 text-center pointer-events-none">
                <span className="inline-block text-xs font-semibold text-primary-300 tracking-widest uppercase mb-4">
                    Features
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                    The Power of{" "}
                    <span className="gradient-text">Speaking Your Story</span>
                </h2>
                <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto px-4">
                    Click any node to explore how PostFlux transforms your voice into
                    LinkedIn authority — one step at a time.
                </p>
            </div>
            <RadialOrbitalTimeline timelineData={featuresData} />
        </section>
    );
}
