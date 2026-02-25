import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Elena R.",
        text: "An incredibly surreal getaway. The hidden camera mechanics behind the mirror allowed us to take the most authentic, beautiful portraits we've ever had, all in complete privacy.",
        rating: 5
    },
    {
        name: "Julian M.",
        text: "The aesthetic is unmatched. From the lobby to the suite, every detail feels like stepping into a cinematic masterpiece. A must-visit for creatives.",
        rating: 5
    },
    {
        name: "Sarah T.",
        text: "I've never stayed anywhere that blended technology, art, and luxury so seamlessly. The 'polaroid' checkout souvenir was the perfect touch.",
        rating: 5
    }
];

export default function TestimonialCarousel({ container }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        container: container,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

    return (
        <section ref={targetRef} id="reviews" className="relative h-[200vh] bg-[#050505]">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="px-12 md:px-24 mb-16">
                    <h2 className="text-3xl font-light tracking-tighter text-white mb-4">Looking Back</h2>
                    <div className="w-12 h-[1px] bg-gray-700"></div>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[450px] shrink-0 skeuomorphic-panel p-10 rounded-xl relative"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-gray-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-300 font-light leading-relaxed mb-8 italic text-lg">
                                &quot;{review.text}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-inner"></div>
                                <span className="text-sm font-medium tracking-widest uppercase text-gray-500">{review.name}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
