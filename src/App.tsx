import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Products from './components/Products.tsx';
import Stats from './components/Stats.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';
import ChatWidget from './components/ChatWidget.tsx';

function App() {
    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
            <Navbar />
            <Hero />
            <Stats />
            <Products />
            <About />
            <Footer />
            <ChatWidget />
        </div>
    );
}

export default App;
