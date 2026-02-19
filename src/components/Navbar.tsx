import { Menu, X, ArrowRight, Beaker } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <nav
            className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100" : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3 relative z-50">
                        <div className={`p-2 rounded-lg shadow-sm transition-colors ${isOpen ? 'bg-white' : 'bg-teal-600'}`}>
                            <Beaker className={`h-5 w-5 ${isOpen ? 'text-teal-600' : 'text-white'}`} />
                        </div>
                        <span className={`font-bold text-lg tracking-tight flex flex-col leading-none font-sans ${isOpen ? 'text-slate-900' : 'text-slate-900'}`}>
                            MAYFAIR <span className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold">Ghana</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {['Products', 'Research', 'Quality', 'Company'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium tracking-wide uppercase"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="group relative bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-sm overflow-hidden transform active:scale-[0.98]">
                            <span className="relative z-10 flex items-center gap-2">
                                Partner With Us
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button - Z-index ensured above overlay */}
                    <div className="md:hidden relative z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md hover:bg-slate-100 transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Full Screen Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "tween", duration: 0.2 }}
                        className="fixed inset-0 bg-white z-40 md:hidden pt-24 px-6 flex flex-col overflow-y-auto"
                    >
                        <div className="flex flex-col space-y-2">
                            {['Products', 'Research', 'Quality', 'Company'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-2xl font-bold text-slate-900 py-4 border-b border-slate-100 active:text-teal-600 transition-colors flex items-center justify-between group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                    <span className="opacity-0 group-active:opacity-100 text-teal-600 transition-opacity">
                                        &rarr;
                                    </span>
                                </a>
                            ))}

                            <div className="pt-8 mt-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-full bg-slate-900 text-white py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition-colors shadow-sm active:scale-[0.98]"
                                >
                                    Partner With Us
                                </button>

                                <p className="mt-8 text-center text-sm text-slate-400">
                                    &copy; 2024 Mayfair Biotech Ltd.<br />Accra, Ghana
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
