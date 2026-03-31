import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResourcesList from "../components/ResourcesList";

export default function ResourcesPage() {
    return (
        <div className="min-h-screen flex flex-col selection:bg-brand-accent selection:text-white">
            <Navbar transparent />
            <main className="flex-grow">
                <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="compaso.png"
                            alt="Recursos RAO Engenharia Background"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center"
                        >
                            {/* Main Title */}
                            <h1 className="text-4xl lg:text-7xl font-black tracking-tight text-white mb-8 uppercase leading-tight max-w-6xl">
                                ENGENHARIA QUE COMPARTILHA CONHECIMENTO TÉCNICO.
                            </h1>

                            {/* Subtitle */}
                            <p className="text-white text-xl lg:text-2xl font-bold tracking-wider max-w-4xl uppercase leading-relaxed opacity-90 mb-12">
                                Materiais, tabelas e ferramentas para apoio à execução industrial segura e fundamentada.
                            </p>

                            {/* CTA Button */}
                            <button className="px-10 py-4 border-2 border-orange-600 text-white text-sm font-black rounded-full hover:bg-brand-accent hover:border-brand-accent transition-all uppercase tracking-widest flex items-center gap-3 group">
                                <span className="text-white-accent group-hover:text-white transition-colors">BAIXAR MATERIAIS TÉCNICOS</span>
                            </button>
                        </motion.div>
                    </div>
                </section>

                <ResourcesList />
            </main>
            <Footer />
        </div>
    );
}
