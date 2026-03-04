import { motion } from "motion/react";

export default function Resources() {
  return (
    <section id="recursos" className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="armazen.png" 
          alt="Setores Atendidos Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Main Title */}
          <div className="mb-8">
            <h2 className="text-4xl lg:text-7xl font-black tracking-tight text-white uppercase inline-block relative">
              SETORES ATENDIDOS
              <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-brand-accent"></div>
            </h2>
          </div>

          {/* Subtitle */}
          <h3 className="text-white text-xl lg:text-2xl font-bold tracking-[0.2em] mb-8 uppercase">
            ATUAÇÃO MULTISSETORIAL
          </h3>

          {/* Description */}
          <p className="text-white text-base lg:text-2xl font-medium max-w-5xl leading-relaxed opacity-90">
            Atendemos indústrias, construtoras, empresas de engenharia e operações industriais de todos os segmentos que exigem rigor técnico, segurança estrutural e responsabilidade normativa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
