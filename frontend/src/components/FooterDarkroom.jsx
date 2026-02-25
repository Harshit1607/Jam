import { useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { Camera, Send, User, Phone } from 'lucide-react';
import toast from 'react-hot-toast';
import { createInfo } from '../api';

/**
 * Utility function to merge tailwind classes
 */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const CameraToast = ({ name }) => (
  <motion.div
    initial={{ y: 50, opacity: 0, scale: 0.5 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    exit={{ y: 20, opacity: 0, scale: 0.8 }}
    className="bg-neutral-800 border-4 border-neutral-700 p-4 rounded-3xl shadow-2xl flex items-center gap-4 relative overflow-hidden"
    style={{ minWidth: '300px' }}
  >
    <div className="w-12 h-12 bg-neutral-900 rounded-full border-4 border-neutral-600 flex items-center justify-center relative">
        <div className="w-4 h-4 bg-cyan-500/20 rounded-full blur-[2px]"></div>
        <div className="absolute top-1 right-1 w-2 h-2 bg-white/10 rounded-full"></div>
    </div>
    <div className="flex-1">
      <p className="font-bold text-white text-sm">Flash!</p>
      <p className="text-neutral-300 text-xs text-balance">
        Hello <span className="text-cyan-400 font-bold">{name}</span>, We will reach out to you soon. Thanks!
      </p>
    </div>
    <div className="absolute top-0 right-0 p-2 opacity-20">
        <Camera size={14} className="text-white" />
    </div>
  </motion.div>
);

export default function FooterDarkroom() {
    const [formData, setFormData] = useState({ name: '', phoneNumber: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phoneNumber) return;

        setIsSubmitting(true);
        try {
            await createInfo(formData);
            
            toast.custom(() => (
                <CameraToast name={formData.name} />
            ), { duration: 4000 });
            
            setFormData({ name: '', phoneNumber: '' });
        } catch {
            toast.error("Snap! Something went wrong.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer id="contact" className="w-full bg-[#050505] border-t border-gray-900 pt-32 pb-16 px-6 relative z-10 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-32">
                    {/* Left Side: Header Content */}
                    <div className="text-left">
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-8"
                        >
                            Ready for your <br />
                            <span className="italic">close-up?</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-500 font-light max-w-md text-lg leading-relaxed"
                        >
                            Drop us a message for reservations, press inquiries, or private event bookings. We capture the moments that matter most.
                        </motion.p>
                        
                        <div className="mt-12 flex items-center gap-4 text-gray-700">
                             <div className="w-12 h-[1px] bg-gray-900"></div>
                             <span className="text-[10px] uppercase tracking-[0.4em]">The Mirror Studio</span>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="w-full">
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div className="flex flex-col">
                                    <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2 ml-1">Name</label>
                                    <div className="relative">
                                        <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={e => setFormData({...formData, name: e.target.value})}
                                            className={cn(
                                                "skeuomorphic-input w-full rounded-lg px-12 py-5 text-white placeholder-gray-800",
                                                "focus:outline-none focus:ring-1 focus:ring-white/10 transition-all text-sm"
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2 ml-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+1 234 567"
                                            value={formData.phoneNumber}
                                            onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                                            className={cn(
                                                "skeuomorphic-input w-full rounded-lg px-12 py-5 text-white placeholder-gray-800",
                                                "focus:outline-none focus:ring-1 focus:ring-white/10 transition-all text-sm"
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={cn(
                                        "skeuomorphic-button text-white px-12 py-5 uppercase tracking-[0.2em] text-xs w-full lg:w-auto rounded-full font-medium flex items-center justify-center gap-3",
                                        "hover:scale-[1.02] active:scale-98 transition-all disabled:opacity-50"
                                    )}
                                >
                                    {isSubmitting ? 'Capturing...' : (
                                        <>
                                            Send Message <Send size={14} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 text-[10px] text-gray-600 tracking-[0.2em] gap-6">
                    <span className="uppercase italic opacity-50">© 2026 The Mirror Hotel.</span>
                    <div className="flex gap-8 uppercase">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">X</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
