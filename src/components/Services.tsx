import { motion } from "motion/react";

export default function Services() {
    return (
        <section id="servicos" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* Block 1: Movimentação de Cargas */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-10">
                            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-brand-primary uppercase inline-block relative">
                                MOVIMENTAÇÃO DE CARGAS COM ENGENHARIA APLICADA
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-accent"></div>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-stone-600 text-lg font-medium">
                                Desenvolvemos projetos de rigging com planejamento técnico completo, análise estrutural e gestão de riscos.
                            </p>

                            <ul className="space-y-2">
                                {[
                                    "ESTUDO DE VIABILIDADE TÉCNICA",
                                    "PLANO DE IÇAMENTO",
                                    "DIMENSIONAMENTO ESTRUTURAL",
                                    "ANÁLISE DE RISCOS",
                                    "EMISSÃO DE ART"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-accent font-black text-xs tracking-widest">
                                        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-stone-500 text-sm font-bold italic">
                                Segurança, previsibilidade e precisão em cada operação.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[16/10] bg-stone-200 rounded-[100px] rounded-tr-none rounded-bl-none overflow-hidden shadow-2xl">
                            <img
                                src="https://picsum.photos/seed/rigging-rao/800/500"
                                alt="Movimentação de Cargas"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Block 2: Responsabilidade Técnica */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="aspect-[16/10] bg-stone-200 rounded-[100px] rounded-tl-none rounded-br-none overflow-hidden shadow-2xl">
                            <img
                                src="https://picsum.photos/seed/tech-resp-rao/800/500"
                                alt="Responsabilidade Técnica"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="mb-10">
                            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-brand-primary uppercase inline-block relative">
                                RESPONSABILIDADE TÉCNICA INTEGRAL
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-accent"></div>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-stone-600 text-lg font-medium">
                                Engenharia com controle total do processo. Atuação técnica conduzida do início ao fim do projeto, assegurando:
                            </p>

                            <ul className="space-y-2">
                                {[
                                    "CONFORMIDADE COM NORMAS TÉCNICAS",
                                    "PRECISÃO NOS CÁLCULOS",
                                    "REDUÇÃO DE RISCOS OPERACIONAIS",
                                    "SEGURANÇA ESTRUTURAL",
                                    "CONTROLE TÉCNICO DOCUMENTADO"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-accent font-black text-xs tracking-widest">
                                        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-stone-500 text-sm font-bold italic">
                                A engenharia não é suporte. É fundamento.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
