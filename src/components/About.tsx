import { motion } from "motion/react";

export default function About() {
    return (
        <section id="sobre" className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* TEXTO */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-primary font-black uppercase tracking-wider text-sm mb-4 block">
                            SOBRE A RAO ENGENHARIA:
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-brand-accent leading-tight mb-8">
                            Engenharia que estrutura operações industriais.
                        </h2>

                        <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                            <p>
                                A RAO Engenharia desenvolve soluções técnicas inteligentes,
                                seguras e sob medida, com forte base em projeto, análise
                                estrutural e responsabilidade técnica. Atuamos em operações
                                industriais que exigem rigor, método e controle absoluto.
                            </p>

                            <p>
                                Cada projeto é conduzido com envolvimento direto do
                                engenheiro responsável, garantindo conformidade normativa,
                                viabilidade prática e segurança operacional.
                            </p>
                        </div>
                    </motion.div>


                    {/* IMAGEM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full"
                    >
                        <img
                            src="/operador.png"
                            alt="Equipe RAO Engenharia"
                            className="w-full h-[420px] lg:h-[480px] object-cover shadow-xl"
                        />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}