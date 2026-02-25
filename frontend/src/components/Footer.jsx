import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Phone, User, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { createInfo } from '../api';

const CameraToast = ({ name }) => (
  <motion.div
    initial={{ y: 50, opacity: 0, scale: 0.5 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    exit={{ y: 20, opacity: 0, scale: 0.8 }}
    className="bg-neutral-800 border-4 border-neutral-700 p-4 rounded-3xl shadow-2xl flex items-center gap-4 relative overflow-hidden"
    style={{ minWidth: '300px' }}
  >
    {/* Camera Lens Graphic */}
    <div className="w-12 h-12 bg-neutral-900 rounded-full border-4 border-neutral-600 flex items-center justify-center relative">
        <div className="w-4 h-4 bg-blue-500/20 rounded-full blur-[2px]"></div>
        <div className="absolute top-1 right-1 w-2 h-2 bg-white/10 rounded-full"></div>
    </div>
    <div className="flex-1">
      <p className="font-bold text-white text-sm">Flash!</p>
      <p className="text-neutral-300 text-xs text-balance">
        Hello <span className="text-cyan-400 font-bold">{name}</span>, We will reach out to you soon. Thanks!
      </p>
    </div>
    {/* Viewfinder detail */}
    <div className="absolute top-0 right-0 p-2 opacity-20">
        <Camera size={14} />
    </div>
  </motion.div>
);

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phoneNumber: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneNumber) return;
    
    setIsSubmitting(true);
    try {
      await createInfo(formData);
      setIsOpen(false);
      setFormData({ name: '', phoneNumber: '' });
      
      toast.custom((t) => (
        <CameraToast name={formData.name} />
      ), { duration: 4000 });
      
    } catch (error) {
      toast.error("Snap! Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full p-6 flex justify-center items-center z-50">
      <Toaster position="bottom-center" />
      
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform active:scale-95 flex items-center gap-2"
      >
        <Camera size={18} />
        Contact Us
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Polaroid Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5, y: 50 }}
              animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 5, y: 50 }}
              className="fixed inset-0 m-auto w-[320px] h-[420px] bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 rounded-sm"
              style={{ height: 'fit-content' }}
            >
              {/* Photo Area */}
              <div className="bg-neutral-100 aspect-square rounded-sm mb-4 relative overflow-hidden flex flex-col items-center justify-center p-6 border-b border-neutral-200">
                <div className="absolute top-2 right-2 cursor-pointer text-neutral-400 hover:text-black" onClick={() => setIsOpen(false)}>
                  <X size={20} />
                </div>
                
                <h2 className="text-xl font-bold text-neutral-800 mb-2">Say Cheese!</h2>
                <p className="text-xs text-neutral-500 text-center mb-6 px-4">Leave your details and we'll capture a moment with you soon.</p>
                
                <form id="contact-form" onSubmit={handleSubmit} className="w-full space-y-4">
                    <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <input 
                            required
                            type="text" 
                            placeholder="Your Name"
                            className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded text-neutral-800 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div className="relative">
                        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <input 
                            required
                            type="tel" 
                            placeholder="Phone Number"
                            className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded text-neutral-800 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                            value={formData.phoneNumber}
                            onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                        />
                    </div>
                </form>
              </div>

              {/* Bottom Margin (The Polaroid White Space) */}
              <div className="pt-2 pb-4 text-center">
                 <button 
                  form="contact-form"
                  disabled={isSubmitting}
                  className="w-full bg-neutral-900 text-white py-3 rounded-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50"
                 >
                    {isSubmitting ? 'Capturing...' : (
                        <>
                            Submit <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                 </button>
                 <p className="mt-4 font-handwriting text-neutral-400 text-lg opacity-60">Snapshot 2024</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
}
