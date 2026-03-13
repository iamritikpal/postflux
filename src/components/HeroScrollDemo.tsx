"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden hero-scroll-demo">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            From voice to viral — powered by <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none gradient-text">
                                PostFlux AI
                            </span>
                        </h1>
                    </>
                }
            >
                {/* Desktop / tablet image */}
                <img
                    src="/hero.png"
                    alt="PostFlux dashboard preview"
                    className="hidden md:block mx-auto rounded-2xl object-cover h-full w-full object-left-top"
                    draggable={false}
                />
                {/* Mobile image */}
                <img
                    src="/hero2.png"
                    alt="PostFlux dashboard preview mobile"
                    className="block md:hidden mx-auto rounded-2xl object-cover h-full w-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
