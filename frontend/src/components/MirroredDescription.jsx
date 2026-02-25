import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MirroredDescription() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Subtle opposite translations
    const yReal = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    const yReflection = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <section
            ref={containerRef}
            className="w-full bg-[#050505] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative">
                {/* Center subtle mirror line (only visible on md+) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 z-10"></div>

                {/* Left Side: Real Content + Image */}
                <motion.div
                    style={{ y: yReal }}
                    className="w-full md:w-1/2 md:pr-16 flex flex-col z-20"
                >
                    <div className="mb-12">
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

                    <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden">
                        <img
                            src="/mirrored_hotel_section.png"
                            alt="Hotel Suite"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right Side: Mirrored Reflection (Hidden on mobile) */}
                <div className="hidden md:flex w-full md:w-1/2 md:pl-16 flex-col justify-end relative z-0">
                    <motion.div
                        style={{ y: yReflection }}
                        className="relative aspect-[3/4] w-full max-w-md overflow-hidden transform scale-y-[-1] opacity-30 blur-[2px]"
                    >
                        {/* Gradient Mask to fade it downwards (which visually is "upwards" because it's flipped) */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-10"></div>
                        <img
                            src="/mirrored_hotel_section.png"
                            alt="Hotel Suite Reflection"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
