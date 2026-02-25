
import { motion } from 'framer-motion';
import { Menu, ChevronDown, ArrowRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden text-white flex flex-col justify-between pt-8 pb-16 px-12">
            {/* Background Image Loading - We'll use a placeholder until the generated image is ready */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/mirrorless_hotel_hero.png"
                    alt="Hotel Interior"
                    className="w-full h-full object-cover brightness-50"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Top Navigation */}
            <nav className="relative z-10 w-full flex justify-end items-center text-[10px] md:text-xs tracking-[0.3em] uppercase border-b border-white/20 pb-6 font-sans">
                <div className="flex items-center gap-8 md:gap-24 pr-4 md:pr-12">
                    <button
                        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                        className="cursor-pointer hover:text-white text-gray-400 transition-colors"
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                        className="cursor-pointer hover:text-white text-gray-400 transition-colors"
                    >
                        Looking Back
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="cursor-pointer hover:text-white text-gray-400 transition-colors"
                    >
                        Contact Us
                    </button>
                </div>
            </nav>

            {/* Huge Centered Typography Effect: MIRROR | SSEL */}
            <div className="relative z-10 flex-1 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 drop-shadow-2xl"
                >
                    {/* The Real Side */}
                    <h1 className="text-4xl md:text-[6rem] lg:text-[7.5rem] font-light tracking-tight text-white mb-0">
                        MIRROR
                    </h1>

                    {/* The Glass/Mirror Line */}
                    <div className="w-[80vw] h-[1px] md:w-[1px] md:h-[5rem] lg:h-[6rem] bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/80 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>

                    {/* The Reflection Side */}
                    <h1 className="text-4xl md:text-[6rem] lg:text-[7.5rem] font-light tracking-tight text-gray-300 transform scale-x-[-1] opacity-70 mb-0 blur-[0.5px]">
                        LESS
                    </h1>
                </motion.div>
            </div>

            {/* Bottom Booking Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-between text-sm uppercase tracking-widest font-sans border-b border-white/30 pb-4 px-4"
            >
                <div className="flex items-center gap-16 flex-1">
                    <div className="flex items-center gap-2 cursor-pointer group flex-1 justify-between">
                        <span className="text-gray-200 group-hover:text-white transition-colors">Dates</span>
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer group flex-1 justify-between">
                        <span className="text-gray-200 group-hover:text-white transition-colors">Rooms</span>
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer group flex-1 justify-between">
                        <span className="text-gray-200 group-hover:text-white transition-colors">Adults / Children</span>
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                </div>

                <div className="ml-16">
                    <button className="flex items-center gap-4 px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition-all duration-500">
                        <span>Let&apos;s Go</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
