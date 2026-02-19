import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32 border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:pr-4"
                    >
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-bold leading-7 text-teal-700 uppercase tracking-widest">
                                Operational Excellence
                            </h2>
                            <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                The Genesis Standard
                            </p>
                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Our Genesis facility in Accra represents the pinnacle of regional manufacturing.
                                By combining local sourcing strategies with world-class compliance, we deliver
                                essential hygiene products with unmatched reliability.
                            </p>

                            <dl className="mt-10 space-y-6 text-base leading-7 text-slate-600">
                                {[
                                    { label: 'Sourcing Strategy', value: '98% Local Sourcing' },
                                    { label: 'Availability', value: '24/7 Operational Support' },
                                    { label: 'Service Area', value: 'Regional Operations (Accra)' },
                                ].map((stat) => (
                                    <div key={stat.label} className="relative pl-9 flex items-center gap-2">
                                        <CheckCircle2 className="absolute left-0 top-1 h-5 w-5 text-teal-600" />
                                        <span className="font-bold text-slate-900">{stat.label}:</span>
                                        <span className="text-slate-600">{stat.value}</span>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </motion.div>

                    {/* Visual / Stats Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:col-start-2 lg:row-start-1"
                    >
                        <div className="relative rounded-2xl bg-white p-2 border border-slate-200 shadow-xl overflow-hidden aspect-[4/3]">
                            {/* Hero Image Placeholder */}
                            <div className="absolute inset-0 bg-slate-100">
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
                                    alt="Operational Excellence"
                                    className="w-full h-full object-cover opacity-90"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
                            </div>

                            {/* Floating Metric Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-slate-100 shadow-lg">
                                <div className="grid grid-cols-2 gap-8 divide-x divide-slate-100">
                                    <div>
                                        <div className="text-3xl font-bold text-slate-900">98%</div>
                                        <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">Efficiency</div>
                                    </div>
                                    <div className="pl-8">
                                        <div className="text-3xl font-bold text-teal-600">100%</div>
                                        <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">Traceability</div>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                                    <span className="text-sm font-medium text-slate-600">Variance Analysis</span>
                                    <span className="text-sm font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded">&lt; 0.1%</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
