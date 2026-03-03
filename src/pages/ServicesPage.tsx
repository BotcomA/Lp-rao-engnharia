import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesCarousel from "../components/ServicesCarousel";

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col selection:bg-brand-accent selection:text-white">
            <Navbar transparent />
            <main className="flex-grow">
                <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://picsum.photos/seed/rao-services-hero/1920/1080"
                            alt="Serviços RAO Engenharia Background"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center"
                        >
                            {/* Main Title */}
                            <h1 className="text-4xl lg:text-7xl font-black tracking-tight text-white mb-8 uppercase leading-tight max-w-5xl">
                                SOLUÇÕES TÉCNICAS APLICADAS À EXECUÇÃO INDUSTRIAL.
                            </h1>

                            {/* Subtitle */}
                            <p className="text-white text-xl lg:text-3xl font-bold tracking-wider max-w-4xl uppercase leading-relaxed opacity-90">
                                PROJETOS CONDUZIDOS COM MÉTODO, <br className="hidden lg:block" />
                                RESPONSABILIDADE TÉCNICA E CONTROLE ESTRUTURAL.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <ServicesCarousel />
            </main>
            <Footer />
        </div>
    );
}
