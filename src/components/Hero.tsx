import { motion } from 'framer-motion';
import { ArrowRight, Microscope } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-50 text-slate-900 border-b border-slate-200">
            {/* Calm Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mx-auto lg:mx-0 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-teal-600" />
                            <span className="text-xs text-slate-600 font-semibold tracking-wide uppercase">Premier Bio-Manufacturing Hub</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                            African Innovation. <br />
                            <span className="text-teal-700">Global Standards.</span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                            Mayfair Biotech leverages strategic West African infrastructure to deliver <span className="text-slate-900 font-medium">world-class therapeutics</span>. Precision engineering meets scalable production.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                            <button className="group relative px-8 py-3.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform active:scale-[0.98]">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Explore Products
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>

                            <button className="px-8 py-3.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 transition-all flex items-center justify-center gap-2 shadow-sm">
                                <Microscope className="w-4 h-4 text-teal-600" />
                                Lab Standards
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl shadow-slate-200 border border-slate-100 aspect-[4/3]">
                            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-12">
                                <div className="grid grid-cols-2 gap-4 w-full h-full opacity-80">
                                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between">
                                        <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                                            <Microscope className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-slate-900">99.9%</div>
                                            <div className="text-xs text-slate-500 uppercase font-semibold">Purity</div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-900 rounded-xl shadow-sm p-6 flex flex-col justify-between text-white">
                                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white">
                                            <ArrowRight className="w-6 h-6 rotate-45" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold">24/7</div>
                                            <div className="text-xs text-white/70 uppercase font-semibold">Monitoring</div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm">GH</div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">Origin Certified</div>
                                            <div className="text-xs text-slate-500">Accra, Ghana Facility</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
