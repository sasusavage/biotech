import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const products = [
    {
        id: 1,
        title: 'Ultra-Soft Sanitary Pads',
        category: 'Hygiene',
        price: 'GHS 15.00',
        stock: 'In Stock',
        image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&q=80&w=600',
    },
    {
        id: 2,
        title: 'Antibacterial Soap (3-Pack)',
        category: 'Daily Care',
        price: 'GHS 22.50',
        stock: 'Low Stock',
        image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600',
    },
    {
        id: 3,
        title: 'Premium Face Tissues',
        category: 'Paper Goods',
        price: 'GHS 12.00',
        stock: 'In Stock',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    },
    {
        id: 4,
        title: 'Hand Sanitizer (500ml)',
        category: 'Protection',
        price: 'GHS 35.00',
        stock: 'In Stock',
        image: 'https://images.unsplash.com/photo-1584483766114-2cea6facb57c?auto=format&fit=crop&q=80&w=600',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Products() {
    return (
        <section id="products" className="py-24 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <div className="inline-block mb-2 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-xs font-bold tracking-wider uppercase">
                            Essential Goods
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            Daily Hygiene. Made Local.
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors">
                        View Catalog <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={item}
                            className="group relative flex flex-col rounded-2xl bg-white border border-slate-100 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
                        >
                            {/* Image Area */}
                            <div className="aspect-square relative overflow-hidden bg-slate-100">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Quick Add Overlay (Desktop) */}
                                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                                    <button className="w-full bg-white/90 backdrop-blur-sm shadow-md py-2.5 rounded-lg text-sm font-bold text-slate-900 hover:bg-teal-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                                        Quick Add
                                    </button>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-4 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{product.category}</span>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${product.stock === 'Low Stock' ? 'bg-orange-100 text-orange-700' : 'bg-emerald-50 text-emerald-700'}`}>
                                        {product.stock}
                                    </span>
                                </div>

                                <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 line-clamp-2 min-h-[2.5em] group-hover:text-teal-700 transition-colors">
                                    {product.title}
                                </h3>

                                <div className="mt-auto flex items-center justify-between pt-3">
                                    <span className="text-base font-bold text-slate-900">{product.price}</span>

                                    {/* Mobile Quick Add Button (Always Visible) */}
                                    <button
                                        className="md:hidden w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 active:bg-teal-600 active:text-white transition-colors"
                                        aria-label={`Add ${product.title} to cart`}
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-8 text-center md:hidden">
                    <button className="w-full bg-white border border-slate-200 py-3 rounded-lg font-bold text-slate-700 shadow-sm">
                        View Full Catalog
                    </button>
                </div>
            </div>
        </section>
    );
}
