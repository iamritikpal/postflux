"use client";

import { Home, Sparkles, CreditCard, MessageSquare, Zap } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "Features", url: "#features", icon: Sparkles },
    { name: "How It Works", url: "#how-it-works", icon: Zap },
    { name: "Pricing", url: "#pricing", icon: CreditCard },
    { name: "Testimonials", url: "#testimonials", icon: MessageSquare },
];

export function PostFluxNavbar() {
    return <NavBar items={navItems} />;
}
