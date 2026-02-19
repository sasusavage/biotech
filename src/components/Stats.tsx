import { useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
    { id: 1, name: 'Batches Produced', value: 1200, suffix: '+' },
    { id: 2, name: 'Lab Tests Completed', value: 500, suffix: 'k+' },
    { id: 3, name: 'Countries Served', value: 32, suffix: '' },
];

function Counter({ from, to }: { from: number; to: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !inView) return;

        const controls = animate(from, to, {
            duration: 2,
            ease: 'easeOut',
            onUpdate(value: number) {
                node.textContent = value.toFixed(0);
            },
        });

        return () => controls.stop();
    }, [from, to, inView]);

    return <span ref={nodeRef} />;
}

export default function Stats() {
    return (
        <div className="bg-white py-16 border-b border-slate-100 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <dl className="grid grid-cols-1 gap-12 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    {stats.map((stat) => (
                        <div key={stat.id} className="pt-8 md:pt-0 px-4">
                            <dd className="order-first text-5xl font-bold tracking-tight text-slate-900 flex items-center justify-center">
                                <Counter from={0} to={stat.value} />
                                <span className="text-teal-600 ml-1">{stat.suffix}</span>
                            </dd>
                            <dt className="text-sm font-semibold leading-7 text-slate-500 uppercase tracking-widest mt-2">
                                {stat.name}
                            </dt>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
