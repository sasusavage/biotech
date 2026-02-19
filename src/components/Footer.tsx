export default function Footer() {
    return (
        <footer className="bg-[#0F172A] border-t border-slate-800">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-slate-500">
                        &copy; 2024 Mayfair Biotech Ltd. Accra, Ghana. All rights reserved.
                    </p>
                    <div className="flex justify-center mt-4 space-x-6 text-slate-400 text-xs text-center font-medium">
                        <a href="#" className="hover:text-[#FACC15] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#FACC15] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#FACC15] transition-colors">FDA Compliance</a>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-end space-y-2 mt-8 md:mt-0 md:order-2">
                    <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse shadow-[0_0_5px_#FACC15]"></span>
                        HQ: Accra
                    </div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                        Kumasi • Lagos • London
                    </div>
                </div>
            </div>
        </footer>
    );
}
