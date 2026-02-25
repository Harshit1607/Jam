import React from 'react';

export default function FooterDarkroom() {
    return (
        <footer id="contact" className="w-full bg-black border-t border-gray-900 pt-32 pb-16 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-6">Ready for your close-up?</h2>
                    <p className="text-gray-500 font-light max-w-lg mx-auto">
                        Drop us a message for reservations, press inquiries, or private event bookings.
                    </p>
                </div>

                <form className="max-w-2xl mx-auto space-y-6 mb-32" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 ml-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="skeuomorphic-input rounded px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-gray-600 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 ml-1">Email</label>
                            <input
                                type="email"
                                placeholder="Your Lens"
                                className="skeuomorphic-input rounded px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-gray-600 transition-colors"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 ml-1">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Tell us your vision..."
                            className="skeuomorphic-input rounded px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-gray-600 transition-colors resize-none"
                        ></textarea>
                    </div>
                    <div className="pt-4 flex justify-center">
                        <button type="submit" className="skeuomorphic-button text-white px-12 py-4 uppercase tracking-[0.2em] text-sm w-full md:w-auto">
                            Send Message
                        </button>
                    </div>
                </form>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 text-xs text-gray-600 tracking-widest gap-6">
                    <span>© 2026 The Mirror Hotel.</span>
                    <div className="flex gap-6 uppercase">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
