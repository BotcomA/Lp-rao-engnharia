import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const slides = [
    {
        image: "/Imagem colada.png",
        title: "DO PLANEJAMENTO À REALIDADE OPERACIONAL",
        subtitle: "SOLUÇÕES ESTRUTURADAS QUE TRANSFORMAM PROJETOS EM INSTALAÇÕES EFICIENTES, ROBUSTAS E PREPARADAS PARA ALTA PERFORMANCE."
    },
    {
        image: "/imagem 2 hero.png",
        title: "A INDÚSTRIA DE INDÚSTRIAS",
        subtitle: "ENGENHARIA INDUSTRIAL COM RESPONSABILIDADE TÉCNICA, PRECISÃO E INTELIGÊNCIA OPERACIONAL."
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="home"
            className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-24"
        >
            {/* Background Carousel */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: "20%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-20%" }}
                        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0"
                    >
                        <img
                            src={slides[currentSlide].image}
                            alt="Industrial Engineering Background"
                            className="w-full h-full object-cover object-left"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        {/* Top Text */}
                        <span className="text-white text-xl lg:text-2xl font-semibold tracking-[0.35em] mb-8 uppercase">
                            RAO ENGENHARIA
                        </span>

                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white mb-6 uppercase leading-[1.05]">
                            {slides[currentSlide].title}
                        </h1>

                        {/* Subtext */}
                        <p className="text-white text-sm lg:text-lg font-semibold tracking-wide mb-12 max-w-4xl uppercase leading-relaxed opacity-90">
                            {slides[currentSlide].subtitle}
                        </p>

                        {/* Action Button */}
                        <motion.button
                            whileHover={{ scale: 0.98 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-14 py-6 bg-[#f27d26] text-white font-bold rounded-xl 
                shadow-[0_10px_30px_rgba(242,125,38,0.4)]
                hover:bg-white hover:text-black 
                hover:shadow-[0_10px_30px_rgba(255,255,255,0.6)]
                transition-all uppercase tracking-widest text-base lg:text-lg"
                        >
                            SOLICITAR ANÁLISE TÉCNICA
                        </motion.button>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
