import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import MirroredDescription from './MirroredDescription';
import TestimonialCarousel from './TestimonialCarousel';
import FooterDarkroom from './FooterDarkroom';

export default function MainUI({ isVisible }) {
    return (
        <motion.div
            initial={{ y: '-100%', x: '0%' }}
            animate={{ y: isVisible ? '0%' : '-100%', x: '0%' }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            className="fixed top-0 left-0 w-full h-screen bg-black z-50 pointer-events-auto flex flex-col"
        >
            <div className="w-full h-full bg-[var(--background)] overflow-y-auto relative scroll-smooth">
                <HeroSection />
                <MirroredDescription />
                <TestimonialCarousel />
                <FooterDarkroom />
            </div>
        </motion.div>
    );
}
