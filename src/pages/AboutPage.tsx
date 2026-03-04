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

                    <div className="absolute inset-0 z-0">
                        <img
                            src="operadores.png"
                            alt="A RAO Engenharia Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                    </div>

                    <div className="w-full px-4 relative z-10 text-center">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center"
                        >

                            {/* TITLE */}
                            <h1 className="text-[40px] md:text-[64px] lg:text-[72px] font-black tracking-tight text-white mb-6 uppercase leading-[1.1] whitespace-nowrap">
                                A ENGENHARIA POR TRÁS DA INDÚSTRIA.
                            </h1>

                            {/* SUBTITLE */}
                            <p className="text-white text-lg md:text-2xl lg:text-3xl font-bold tracking-wider max-w-4xl uppercase leading-relaxed opacity-90">
                                30 ANOS ESTRUTURANDO OPERAÇÕES COM RESPONSABILIDADE TÉCNICA.
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