"use client";

import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import {
    CheckCircle,
    Mic,
    Sparkles,
    TrendingUp,
} from "lucide-react";

const itemsSample: BentoItem[] = [
    {
        title: "Voice Capture",
        meta: "Step 1",
        description:
            "Speak naturally and record your raw thoughts. PostFlux captures your ideas with clarity.",
        icon: <Mic className="w-4 h-4 text-sky-400" />,
        status: "Live",
        tags: ["Voice", "Input", "Fast"],
        cta: "Start ->",
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Tone Matching",
        meta: "Step 2",
        description:
            "AI understands your style and writes in a voice that feels authentic to your brand.",
        icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
        status: "Updated",
        tags: ["Style", "Brand"],
        cta: "Tune ->",
    },
    {
        title: "Post Drafting",
        meta: "Step 3",
        description:
            "Generate polished LinkedIn-ready drafts with clear hooks, structure, and CTA suggestions.",
        icon: <Sparkles className="w-4 h-4 text-violet-400" />,
        status: "Active",
        tags: ["Drafts", "Hooks", "CTA"],
        cta: "Generate ->",
        colSpan: 2,
    },
    {
        title: "Authority Growth",
        meta: "Step 4",
        description:
            "Stay consistent, publish faster, and build thought leadership with less effort.",
        icon: <TrendingUp className="w-4 h-4 text-blue-400" />,
        status: "Scaling",
        tags: ["Growth", "LinkedIn"],
        cta: "Scale ->",
    },
];

function BentoGridDemo() {
    return <BentoGrid items={itemsSample} />;
}

export { BentoGridDemo };
