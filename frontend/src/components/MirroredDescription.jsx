import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function MirroredDescription() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Right Side scrolls up naturally as you scroll down
    const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    // Left side (mirrored) scrolls down
    const yLeft = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

    const ContentText = () => (
        <div className="max-w-md w-full px-12 pb-32">
            <h2 className="text-sm tracking-[0.4em] uppercase text-gray-400 mb-8 border-b border-gray-800 pb-4 inline-block">
                The Dual Experience
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 mb-8 drop-shadow-md">
                Welcome to a sanctuary designed for the modern observer. Here, hospitality and fine-art photography converge.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-500 mb-8">
                We have curated every angle, perfected every shadow, and tuned the lighting in every suite to ensure your stay is flawlessly captured.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-500 drop-shadow-md">
                Our signature two-way vanity mirrors conceal professional-grade lenses, putting you in complete control of your own private photoshoot. You are both the subject and the artist.
            </p>
        </div>
    );

    return (
        <section
            id="experience"
            ref={containerRef}
            className="relative w-full h-[150vh] bg-[#050505] overflow-hidden flex"
        >
            {/* Split Screen Container */}
            <div className="absolute inset-0 flex w-full h-full">

                {/* Left Side (Reflection - Upside Down & Scrolling Down) */}
                <div className="w-1/2 h-full relative overflow-hidden bg-[#080808]">
                    {/* The content container that moves */}
                    <motion.div
                        style={{ y: yLeft }}
                        className="absolute inset-0 w-full h-[200%] flex items-center justify-end"
                    >
                        <div className="transform rotate-180 opacity-40 scale-x-[-1] pointer-events-none blur-[1px]">
                            <ContentText />
                        </div>
                    </motion.div>
                </div>

                {/* Center Glowing Divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 z-10 glass-divider shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>

                {/* Right Side (Reality - Normal & Scrolling Up) */}
                <div className="w-1/2 h-full relative overflow-hidden bg-[#0a0a0a]">
                    <motion.div
                        style={{ y: yRight }}
                        className="absolute inset-0 w-full h-[200%] flex items-center justify-start"
                    >
                        <ContentText />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
