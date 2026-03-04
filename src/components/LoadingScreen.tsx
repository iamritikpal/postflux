"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UniqueLoading from "@/components/ui/morph-loading";

export default function LoadingScreen({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-neutral-950"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-center gap-8"
                        >
                            <UniqueLoading variant="morph" size="lg" />
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-sm font-semibold tracking-widest uppercase text-gray-400"
                            >
                                Post<span className="gradient-text">Flux</span>
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {children}
            </motion.div>
        </>
    );
}
