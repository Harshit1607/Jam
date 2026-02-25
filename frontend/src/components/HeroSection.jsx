
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
            <nav className="relative z-10 w-full flex justify-between items-center text-xs tracking-[0.2em] uppercase border-b border-white/20 pb-6 uppercase font-sans">
                <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300 transition-colors">
                    <Menu className="w-5 h-5 stroke-[1.5]" />
                    <span>Menu</span>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 tracking-[0.3em] font-medium">
                    Mirrorless
                </div>

                <div className="flex items-center gap-12">
                    <a href="#locations" className="cursor-pointer hover:text-gray-300 transition-colors">Our Locations</a>
                    <a href="#book" className="cursor-pointer hover:text-gray-300 transition-colors">Book Now</a>
                </div>
            </nav>

            {/* Huge Centered Title */}
            <div className="relative z-10 flex-1 flex items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-7xl md:text-[9rem] font-light tracking-tight text-white drop-shadow-2xl"
                >
                    MIRRORLESS
                </motion.h1>
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
