"use client";

import { Home, Sparkles, CreditCard, MessageSquare, Zap } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "Working", url: "#how-it-works", icon: Zap },
    { name: "Features", url: "#features", icon: Sparkles },
    { name: "Pricing", url: "#pricing", icon: CreditCard },
    { name: "Testimonials", url: "#testimonials", icon: MessageSquare },
];

export function PostFluxNavbar() {
    return <NavBar items={navItems} />;
}
