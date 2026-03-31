import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnalysisForm from "../components/AnalysisForm";

export default function AnalysisPage() {
    return (
        <div className="min-h-screen flex flex-col selection:bg-brand-accent selection:text-white">
            <Navbar transparent />
            <main className="flex-grow">
                <section className="relative h-[70vh] min-h-[420px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="pessoa.png"
                            alt="Analise Tecnica RAO Engenharia Background"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center"
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-9xl font-black tracking-tight text-white mb-6 md:mb-8 uppercase leading-tight">
                                QUESTIONARIO
                            </h1>

                            <p className="text-white text-base sm:text-lg lg:text-3xl font-bold tracking-[0.12em] sm:tracking-wider max-w-4xl uppercase leading-relaxed opacity-90 px-2 sm:px-0">
                                Questionario para analise tecnica
                            </p>
                        </motion.div>
                    </div>
                </section>

                <AnalysisForm />
            </main>
            <Footer />
        </div>
    );
}
