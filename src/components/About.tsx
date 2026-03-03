import { motion } from "motion/react";

export default function About() {
    return (
        <section id="sobre" className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Content */}
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
                                A RAO Engenharia desenvolve soluções técnicas inteligentes, seguras e sob medida, com forte base em projeto, análise estrutural e responsabilidade técnica. Atuamos em operações industriais que exigem rigor, método e controle absoluto.
                            </p>
                            <p>
                                Cada projeto é conduzido com envolvimento direto do engenheiro responsável, garantindo conformidade normativa, viabilidade prática e segurança operacional.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Content - Overlapping Circles */}
                    <div className="relative h-[450px] lg:h-[600px] flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* Circle 1 (Top Left) - FOTO 2 - P1 */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="absolute top-0 left-0 w-[60%] aspect-square rounded-full border-4 border-brand-accent overflow-hidden shadow-2xl z-10"
                            >
                                <img
                                    src="https://picsum.photos/seed/rao-ind-1/600/600"
                                    alt="Operação Industrial 1"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </motion.div>

                            {/* Circle 2 (Top Right) - FOTO 3 - P1 */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute top-[10%] right-0 w-[55%] aspect-square rounded-full border-4 border-brand-accent overflow-hidden shadow-2xl z-0"
                            >
                                <img
                                    src="https://picsum.photos/seed/rao-ind-2/600/600"
                                    alt="Operação Industrial 2"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </motion.div>

                            {/* Circle 3 (Bottom Center) - FOTO 4 - P1 */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="absolute bottom-0 left-[15%] w-[65%] aspect-square rounded-full border-4 border-brand-accent overflow-hidden shadow-2xl z-20"
                            >
                                <img
                                    src="https://picsum.photos/seed/rao-ind-3/600/600"
                                    alt="Operação Industrial 3"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
