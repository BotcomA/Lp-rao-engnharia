import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Sectors from "../components/Sectors";
import Resources from "../components/Resources";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col selection:bg-brand-accent selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Sectors />
                <Resources />
                {/* Contact section removed as requested */}
            </main>
            <Footer />
        </div>
    );
}
