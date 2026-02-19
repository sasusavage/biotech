import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { useState } from 'react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end sm:bottom-8 sm:right-8">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ type: "tween", duration: 0.2 }}
                        className="mb-4 w-[calc(100vw-3rem)] sm:w-80 rounded-lg bg-white border border-slate-200 shadow-xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                                        SJ
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-teal-400 border-2 border-white rounded-full" />
                                </div>
                                <div>
                                    <div className="text-slate-900 font-bold text-sm">Sasu Jnr</div>
                                    <div className="text-teal-700 text-xs font-semibold uppercase tracking-wide">
                                        Active
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="p-4 h-64 overflow-y-auto bg-white space-y-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                            <div className="flex items-start gap-2">
                                <div className="w-6 h-6 rounded-full bg-teal-600 flex-shrink-0 mt-1 shadow-sm" />
                                <div className="bg-slate-50 p-3 rounded-lg rounded-tl-none text-sm text-slate-700 border border-slate-100">
                                    <p className="font-medium">Welcome to Mayfair Biotech.</p>
                                    <p className="mt-1 text-slate-500">I'm Sasu Jnr. How can I assist with your production inquiries?</p>
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
                            <input
                                type="text"
                                placeholder="Type your inquiry..."
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 placeholder-slate-400 transition-all"
                            />
                            <button className="p-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-sm transform active:scale-95">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-3 bg-teal-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 border border-teal-500"
            >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span className="hidden sm:inline font-semibold whitespace-nowrap tracking-wide text-sm">Chat Support</span>
            </motion.button>
        </div>
    );
}
