import { motion } from "motion/react";

export default function Hero() {
    return (
        <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://picsum.photos/seed/industrial-engineering/1920/1080"
                    alt="Industrial Engineering Background"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    {/* Top Text */}
                    <span className="text-white text-2xl lg:text-4xl font-bold tracking-[0.1em] mb-4 uppercase">
                        RAO ENGENHARIA
                    </span>

                    {/* Main Title */}
                    <h1 className="text-5xl lg:text-8xl font-black tracking-tight text-white mb-8 uppercase leading-tight">
                        A INDUSTRIA DE INDUSTRIAS
                    </h1>

                    {/* Subtext */}
                    <p className="text-white text-sm lg:text-xl font-bold tracking-wider mb-12 max-w-4xl uppercase leading-relaxed opacity-90">
                        ENGENHARIA INDUSTRIAL COM RESPONSABILIDADE TÉCNICA, <br className="hidden lg:block" />
                        PRECISÃO E INTELIGÊNCIA OPERACIONAL.
                    </p>

                    {/* Action Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-[#f27d26] text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(242,125,38,0.4)] hover:bg-[#e06d1f] transition-all uppercase tracking-widest text-sm lg:text-base"
                    >
                        SOLICITAR ANÁLISE TÉCNICA
                    </motion.button>
                </motion.div>
            </div>

            {/* Bottom Gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-50 to-transparent z-10"></div>
        </section>
    );
}
