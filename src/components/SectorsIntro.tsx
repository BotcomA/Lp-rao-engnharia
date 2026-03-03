import { motion } from "motion/react";

export default function SectorsIntro() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-black text-brand-accent tracking-tight uppercase">
                            30 ANOS DE ATUAÇÃO
                        </h2>
                        <p className="text-xl lg:text-2xl text-stone-700 leading-relaxed font-medium">
                            Atuação técnica em planejamento de obras industriais, movimentação de cargas complexas, montagem industrial, manutenção pesada e desenvolvimento de produtos, com foco em precisão, segurança e responsabilidade técnica em todas as etapas do processo.
                        </p>
                    </div>

                    <p className="text-xl lg:text-2xl text-stone-700 leading-relaxed font-medium">
                        A RAO Engenharia atua em cenários que exigem fundamentação técnica consistente, controle de riscos operacionais e legais, conformidade normativa e soluções desenvolvidas sob medida para cada realidade industrial.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
