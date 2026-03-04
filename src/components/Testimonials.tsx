"use client";

import { TestimonialsSection } from "@/components/ui/testimonial-v2";

const testimonials = [
    {
        text: "PostFlux completely changed my LinkedIn game. I speak for 2 minutes, and it produces posts that actually sound like me — but way more polished.",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Priya Deshmukh",
        role: "Startup Founder & CEO",
    },
    {
        text: "As an engineer, writing never came naturally. PostFlux lets me share my expertise through voice and turns it into thought leadership content.",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Arjun Mehta",
        role: "VP of Engineering @ TechScale",
    },
    {
        text: "I've tried every AI writing tool. PostFlux is the only one that preserves my authentic voice. The tone matching is eerily good.",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Sara Kapoor",
        role: "Executive Coach & Author",
    },
    {
        text: "The credit-based system is genius. I started with a free plan, now I'm creating 50+ LinkedIn posts a month effortlessly.",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Rahul Verma",
        role: "Marketing Director",
    },
    {
        text: "My engagement went up 400% in the first month. PostFlux understands LinkedIn's algorithm better than any tool I've used.",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Zainab Hussain",
        role: "Personal Brand Strategist",
    },
    {
        text: "Recording voice notes on my commute and having polished posts ready by the time I reach office — PostFlux is pure magic.",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Aliza Khan",
        role: "Product Manager @ Fintech",
    },
    {
        text: "Our entire leadership team uses PostFlux now. It's become our content engine for LinkedIn thought leadership.",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Farhan Siddiqui",
        role: "COO @ GrowthLabs",
    },
    {
        text: "The AI doesn't just transcribe — it restructures, adds hooks, and formats for maximum LinkedIn engagement. Brilliant.",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Sana Sheikh",
        role: "Content Creator",
    },
    {
        text: "PostFlux helped me go from posting once a month to twice a day. My network growth has been exponential since.",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Hassan Ali",
        role: "Sales Director",
    },
];

export default function Testimonials() {
    return (
        <div id="testimonials">
            <TestimonialsSection
                testimonials={testimonials}
                title="Loved by Professionals"
                subtitle="See how PostFlux is helping professionals build authority on LinkedIn."
                badge="Testimonials"
            />
        </div>
    );
}
