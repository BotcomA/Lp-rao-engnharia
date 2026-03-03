import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutDetails from "../components/AboutDetails";
import CEOProfile from "../components/CEOProfile";
import MissionVisionValues from "../components/MissionVisionValues";
import AboutCTA from "../components/AboutCTA";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col selection:bg-brand-accent selection:text-white">
            <Navbar transparent />
            <main className="flex-grow">
                <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://picsum.photos/seed/rao-about-hero/1920/1080"
                            alt="A RAO Engenharia Background"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center"
                        >
                            {/* Main Title */}
                            <h1 className="text-4xl lg:text-8xl font-black tracking-tight text-white mb-6 uppercase leading-tight">
                                A ENGENHARIA POR TRÁS DA INDÚSTRIA.
                            </h1>

                            {/* Subtitle */}
                            <p className="text-white text-xl lg:text-4xl font-bold tracking-wider max-w-5xl uppercase leading-relaxed opacity-90">
                                30 ANOS ESTRUTURANDO OPERAÇÕES <br className="hidden lg:block" />
                                COM RESPONSABILIDADE TÉCNICA.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <AboutDetails />
                <CEOProfile />
                <MissionVisionValues />
                <AboutCTA />
            </main>
            <Footer />
        </div>
    );
}
