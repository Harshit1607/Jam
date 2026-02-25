import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Elena R.",
        text: "An incredibly surreal getaway. The hidden cameras allowed us to take the most authentic portraits.",
        rating: 5,
        image: "/polaroid_bedroom.png"
    },
    {
        name: "Julian M.",
        text: "Every detail feels like stepping into a cinematic masterpiece. A must-visit for creatives.",
        rating: 5,
        image: "/polaroid_lounge.png"
    },
    {
        name: "Sarah T.",
        text: "I've never stayed anywhere that blended technology, art, and luxury so seamlessly.",
        rating: 5,
        image: "/polaroid_bathroom.png"
    },
    {
        name: "Marcus V.",
        text: "The perfect blend of moody ambiance and modern luxury. The private studio suite was unforgettable.",
        rating: 5,
        image: "/polaroid_bedroom.png"
    },
    {
        name: "Amelia K.",
        text: "It feels less like a hotel and more like an interactive exhibit. Every mirror tells a story.",
        rating: 5,
        image: "/polaroid_lounge.png"
    },
    {
        name: "David O.",
        text: "The lighting is impeccably tuned. I didn't want to leave the room; everything was perfect.",
        rating: 4,
        image: "/polaroid_bathroom.png"
    },
    {
        name: "Chloe W.",
        text: "A completely unique experience. It challenges your perspective of reflection and reality.",
        rating: 5,
        image: "/polaroid_bedroom.png"
    }
];

export default function TestimonialCarousel() {
    return (
        <section id="reviews" className="w-full bg-[#050505] py-32 overflow-hidden">
            <div className="flex flex-col justify-center">
                <div className="px-12 md:px-24 mb-16">
                    <h2 className="text-3xl font-light tracking-tighter text-white mb-4">Looking Back</h2>
                    <div className="w-12 h-[1px] bg-gray-700"></div>
                </div>

                {/* Native Horizontal Scroll Container */}
                <div
                    className="flex gap-24 px-12 md:px-24 pb-16 items-center overflow-x-auto snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="snap-center w-[210px] md:w-[240px] shrink-0 bg-[#e8e8e8] p-3 pb-8 relative shadow-2xl flex flex-col hover:scale-[1.05] transition-transform duration-500"
                            // Slight alternating rotation for organic polaroid stack feel
                            style={{ rotate: index % 2 === 0 ? '-2deg' : '3deg' }}
                        >
                            {/* Polaroid Image Area */}
                            <div className="w-full aspect-[1/1] bg-black mb-4 relative overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] pointer-events-none">
                                <img
                                    src={review.image}
                                    alt="Polaroid Memory"
                                    className="w-full h-full object-cover opacity-90 sepia-[0.3] contrast-125"
                                />
                            </div>

                            {/* Polaroid Text Area */}
                            <div className="flex flex-col flex-1 px-1 font-sans text-gray-800 pointer-events-none">
                                <p className="font-light leading-relaxed mb-4 italic text-xs text-gray-700">
                                    &quot;{review.text}&quot;
                                </p>

                                <div className="mt-auto pt-3 border-t border-gray-300">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-semibold tracking-widest uppercase text-black">{review.name}</span>
                                        <div className="flex gap-0.5">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-2.5 h-2.5 text-black fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
