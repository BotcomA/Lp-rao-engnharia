import { motion } from "motion/react";

export default function AboutCTA() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border-2 border-brand-primary rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-10 lg:p-20 text-center flex flex-col items-center"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-brand-primary mb-8 md:mb-10 tracking-tight uppercase">
                        30 ANOS ESTRUTURANDO DECISÕES INDUSTRIAIS
                    </h2>

                    <p className="text-base sm:text-lg lg:text-2xl text-brand-primary font-medium max-w-5xl leading-relaxed mb-8 md:mb-10 uppercase">
                        A RAO ENGENHARIA É BASE TÉCNICA PARA OPERAÇÕES INDUSTRIAIS QUE EXIGEM PRECISÃO, CONFORMIDADE E SEGURANÇA ESTRUTURAL. CADA PROJETO É CONDUZIDO COM MÉTODO E RESPONSABILIDADE FORMAL.
                    </p>

                    <p className="text-2xl sm:text-3xl lg:text-5xl font-black text-brand-primary mb-10 md:mb-12 tracking-tight uppercase">
                        A INDÚSTRIA DE INDÚSTRIAS.
                    </p>

                    <button className="w-full sm:w-auto px-6 sm:px-10 py-4 border-2 border-brand-accent text-brand-primary text-sm sm:text-lg font-black rounded-xl hover:bg-brand-accent hover:text-white transition-all uppercase tracking-[0.2em] sm:tracking-widest">
                        SOLICITAR ANÁLISE TÉCNICA
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
