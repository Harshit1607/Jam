import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image / Texture - using placeholder gradient for now */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] z-0 px-2">
                {/* Subtle vignette or noise overlay could go here */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black z-10"></div>
            </div>

            {/* Top Navigation Bar positioned absolutely within the Hero Section */}
            <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-20 mix-blend-difference">
                <div className="text-white text-xl font-medium tracking-[0.2em] uppercase">The Mirror</div>
                <div className="hidden md:flex gap-8 text-gray-400 text-sm tracking-widest uppercase">
                    <a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a>
                    <a href="#reviews" className="hover:text-white transition-colors duration-300">Reviews</a>
                    <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative z-20 text-center flex flex-col items-center max-w-4xl px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-6 drop-shadow-2xl"
                >
                    Step Into the Frame.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-2xl leading-relaxed"
                >
                    A boutique hotel experience where every room is a private studio, and every mirror holds a story.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="skeuomorphic-button text-white px-10 py-4 uppercase tracking-[0.2em] text-sm hover:text-gray-200"
                >
                    Book Your Focus
                </motion.button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 text-gray-500"
            >
                <span className="text-xs uppercase tracking-[0.3em] mb-4">Scroll to Develop</span>
                <ArrowDown className="w-4 h-4" />
            </motion.div>
        </section>
    );
}
