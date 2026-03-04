import { motion } from "motion/react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-24"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Imagem colada.png"
                    alt="Industrial Engineering Background"
                    className="w-full h-full object-cover object-left"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    {/* Top Text */}
                    <span className="text-white text-xl lg:text-2xl font-semibold tracking-[0.35em] mb-8 uppercase">
                        RAO ENGENHARIA
                    </span>

                    {/* Main Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 uppercase leading-[1.05]">
                        A INDUSTRIA DE INDUSTRIAS
                    </h1>

                    {/* Subtext */}
                    <p className="text-white text-sm lg:text-lg font-semibold tracking-wide mb-12 max-w-3xl uppercase leading-relaxed opacity-90">
                        ENGENHARIA INDUSTRIAL COM RESPONSABILIDADE TÉCNICA
                        <br className="hidden lg:block" />
                        PRECISÃO E INTELIGÊNCIA OPERACIONAL.
                    </p>

                    {/* Action Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-14 py-6 bg-[#f27d26] text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(242,125,38,0.4)] hover:bg-[#e06d1f] transition-all uppercase tracking-widest text-base lg:text-lg"
                    >
                        SOLICITAR ANÁLISE TÉCNICA
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}