import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ContentPanel = () => (
    <div className="w-full max-w-md flex flex-col gap-12 text-white">
        <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">The Dual Experience</h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg mb-6">
                Welcome to a sanctuary designed for the modern observer. Here, hospitality and fine-art photography converge. We have curated every angle, perfected every shadow, and tuned the lighting to ensure your stay is flawlessly captured.
            </p>
            <p className="text-gray-400 font-light leading-relaxed text-lg mb-8">
                Our signature design puts you in complete control. You are both the subject and the artist.
            </p>
            <button className="uppercase tracking-[0.2em] text-xs pb-1 border-b border-white/30 hover:border-white transition-colors duration-300">
                Discover the Suites
            </button>
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl">
            <img
                src="/mirrored_hotel_section.png"
                alt="Hotel Suite"
                className="w-full h-full object-cover"
            />
        </div>
    </div>
);

export default function MirroredDescription() {
    const containerRef = useRef(null);

    // We want the section to be tall enough to allow for ample scrolling
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Left Side scrolls up naturally
    const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    // Right Side (Mirrored) scrolls down
    const yRight = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

    return (
        <section
            id="experience"
            ref={containerRef}
            className="relative w-full h-[200vh] bg-[#050505] overflow-hidden"
        >
            {/* Split Screen Container fixed to viewport while strolling through section */}
            <div className="sticky top-0 h-screen w-full flex">

                {/* Left Side (Reality - Normal & Scrolling Up) */}
                <div className="hidden md:flex w-1/2 h-full relative overflow-hidden bg-[#050505] px-6 md:px-12 justify-end">
                    <motion.div
                        style={{ y: yLeft }}
                        className="absolute top-[30vh] pb-[50vh] flex justify-end w-full pr-8"
                    >
                        <ContentPanel />
                    </motion.div>
                </div>

                {/* Mobile Fallback Center Side */}
                <div className="md:hidden w-full h-full relative overflow-hidden bg-[#050505] px-6 py-24 object-contain overflow-y-auto">
                    <ContentPanel />
                </div>

                {/* Center Glowing Divider */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"></div>

                {/* Right Side (Reflection - Upside Down & Scrolling Down) */}
                <div className="hidden md:flex w-1/2 h-full relative overflow-hidden bg-[#080808] px-6 md:px-12 justify-start">
                    <motion.div
                        style={{ y: yRight }}
                        className="absolute top-[-25%] pb-[50vh] flex justify-start w-full pl-8"
                    >
                        {/* 
                          Rotate 180 flips it upside down and backwards. 
                          We add opacity or blur to make it feel like a reflection. 
                        */}
                        <div className="transform rotate-180 opacity-40 blur-[1px] pointer-events-none">
                            <ContentPanel />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
