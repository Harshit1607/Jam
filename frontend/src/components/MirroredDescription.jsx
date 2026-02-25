import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const ContentText = () => (
    <div className="max-w-md w-full px-12 py-32">
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

export default function MirroredDescription({ container }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        container: container,
        offset: ["start end", "end start"]
    });

    // We want the total distance to be the same so the speed matches perfectly.
    // The container height is 150vh.

    // RIGHT SIDE (Real Text):
    // Starts from bottom (out of view) and slides up to its natural center.
    // Let's use 100% to represent a full screen height of travel.
    // It will go from 100% (initially hidden at bottom) to 0% (centered)
    const yRight = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

    // LEFT SIDE (Mirrored Text):
    // Starts from top (out of view) and slides down to its natural center.
    // It will go from -100% (initially hidden at top) to 0% (centered)
    const yLeft = useTransform(scrollYProgress, [0, 0.5], ["-100%", "0%"]);

    return (
        <section
            id="experience"
            ref={containerRef}
            className="relative w-full h-[100vh] bg-[#050505] overflow-hidden flex"
        >
            <div className="absolute inset-0 flex w-full h-full">

                {/* Left Side (Reflection - Starts top, slides down to center) */}
                <div className="w-1/2 h-full relative overflow-hidden bg-[#080808]">
                    <motion.div
                        style={{ y: yLeft }}
                        className="absolute inset-0 w-full h-full flex items-center justify-end"
                    >
                        {/* We use scaleY(-1) to flip it upside down like a darkroom mirror */}
                        <div className="transform scale-y-[-1] opacity-50 pointer-events-none blur-[2px]">
                            <ContentText />
                        </div>
                    </motion.div>
                </div>

                {/* Center Glowing Divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 z-10 glass-divider shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>

                {/* Right Side (Reality - Starts bottom, slides up to center) */}
                <div className="w-1/2 h-full relative overflow-hidden bg-[#0a0a0a]">
                    <motion.div
                        style={{ y: yRight }}
                        className="absolute inset-0 w-full h-full flex items-center justify-start"
                    >
                        <ContentText />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
