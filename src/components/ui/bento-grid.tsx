"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <article
                    key={index}
                    className={cn(
                        "group relative p-5 rounded-2xl overflow-hidden transition-all duration-300",
                        "border border-white/[0.08] bg-[#07090f] text-white",
                        "hover:border-white/[0.14] hover:shadow-[0_6px_24px_rgba(0,0,0,0.45)]",
                        "hover:-translate-y-0.5 will-change-transform",
                        item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
                        {
                            "border-white/[0.14] shadow-[0_6px_24px_rgba(0,0,0,0.45)] -translate-y-0.5":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={cn(
                            "absolute inset-0 transition-opacity duration-300",
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        )}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.06] group-hover:bg-white/[0.1] transition-all duration-300">
                                {item.icon}
                            </div>
                            <span className="text-xs font-medium px-2 py-1 rounded-lg bg-white/[0.08] text-gray-300 transition-colors duration-300 group-hover:bg-white/[0.14]">
                                {item.status || "Active"}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-gray-100 tracking-tight text-[22px] leading-tight md:text-2xl">
                                {item.title}
                                {item.meta ? (
                                    <span className="ml-2 text-xs text-gray-500 font-normal align-middle">
                                        {item.meta}
                                    </span>
                                ) : null}
                            </h3>
                            <p className="text-base text-gray-200/95 leading-snug font-normal md:text-lg">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-2 gap-2">
                            <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-md bg-white/[0.06] transition-all duration-200 hover:bg-white/[0.12]"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {item.cta || "Explore ->"}
                            </span>
                        </div>
                    </div>

                    <div
                        className={cn(
                            "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-white/20 to-transparent transition-opacity duration-300",
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        )}
                    />
                </article>
            ))}
        </div>
    );
}

export { BentoGrid };
