import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import studioView from '../assets/studio-view.png';

const StudioContent = () => (
    <div className="max-w-md w-full">
        <div className="mb-16 overflow-hidden rounded-sm shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] border border-white/5 bg-neutral-900 aspect-[4/5]">
            <img 
                src={studioView} 
                alt="Studio Reality" 
                className="w-full h-full object-cover grayscale-[0.3]" 
            />
        </div>
        
        <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-[#f3f4f6]">
               The Art of <br />
               <span className="italic">Perspective.</span>
            </h2>
            <p className="text-gray-500 font-light text-base leading-relaxed max-w-sm">
                Behind every lens lies an inverted world. Our suites are designed to capture the truth exactly as light intends it.
            </p>
        </div>
    </div>
);

export default function StudioReflection({ container }) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        container: container,
        offset: ["start end", "end start"]
    });

    // We want the total distance to be the same so the speed matches perfectly.
    // RIGHT SIDE (Real Text):
    // Starts from bottom (out of view) and slides up to its natural center.
    const yReality = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

    // LEFT SIDE (Mirrored Text):
    // Starts from top (out of view) and slides down to its natural center.
    const yReflection = useTransform(scrollYProgress, [0, 0.5], ["-100%", "0%"]);

    return (
        <section 
            ref={sectionRef} 
            className="relative w-full h-[100vh] bg-[#050505] overflow-hidden flex flex-col md:flex-row"
        >
            <div className="absolute inset-0 flex w-full h-full flex-col md:flex-row">
                
                {/* Left Side: Real Content */}
                <div className="w-full md:w-1/2 h-full relative z-20 overflow-hidden">
                    <motion.div 
                        style={{ y: yReality }} 
                        className="absolute inset-0 w-full h-full flex items-center justify-center p-8 md:px-24"
                    >
                        <StudioContent />
                    </motion.div>
                </div>

                {/* The Razor-thin Mirror Surface Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 z-30 hidden md:block">
                    <div className="w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                </div>

                {/* Right Side: Inverted Reflection */}
                <div className="hidden md:block w-1/2 h-full relative z-10 overflow-hidden bg-[#030303]">
                    <motion.div 
                        style={{ y: yReflection }}
                        className="absolute inset-0 w-full h-full flex items-center justify-center p-8 md:px-24"
                    >
                        <div className="w-full flex justify-center items-center transform scale-y-[-1] opacity-50 blur-[2px] pointer-events-none select-none">
                            <StudioContent />
                        </div>
                    </motion.div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                </div>
            </div>
            
            <div className="md:hidden absolute inset-0 bg-gradient-to-b from-transparent to-black/90 pointer-events-none z-10" />
        </section>
    );
}
