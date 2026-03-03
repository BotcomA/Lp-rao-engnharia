import { motion } from "motion/react";

export default function ContactCTA() {
    return (
        <section className="py-20 bg-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-4xl lg:text-6xl font-black text-brand-accent mb-6 tracking-tight uppercase">
                        FALE COM A RAO ENGENHARIA
                    </h2>

                    <p className="text-lg lg:text-xl text-brand-primary font-bold max-w-4xl mb-10 leading-relaxed">
                        Entre em contato com nossa equipe e descubra como podemos apoiar seu projeto industrial com soluções técnicas sob medida.
                    </p>

                    <button className="px-10 py-3 border-2 border-brand-accent text-brand-primary text-sm font-black rounded-xl hover:bg-brand-accent hover:text-white transition-all uppercase tracking-widest">
                        SOLICITAR ANÁLISE TÉCNICA
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
