import { motion } from "motion/react";

export default function Services() {
    return (
        <section id="servicos" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* TÍTULO 1 */}
                <div className="mb-6">
                    <div className="relative inline-block">
                        <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-brand-primary uppercase">
                            MOVIMENTAÇÃO DE CARGAS COM ENGENHARIA APLICADA
                        </h2>
                        <div className="w-full h-[3px] bg-brand-accent mt-2"></div>
                    </div>
                </div>

                {/* Block 1 */}
                <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">

                    {/* TEXTO */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-[#E5E5E5] p-8 lg:p-10 rounded-[120px] rounded-tr-none rounded-bl-none">
                            <div className="space-y-6">
                                <p className="text-stone-700 text-lg font-medium">
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
                                        <li key={i} className="flex items-center gap-3 text-brand-accent font-black text-sm tracking-widest">
                                            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-stone-500 text-sm font-bold italic">
                                    Segurança, previsibilidade e precisão em cada operação.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* IMAGEM */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[16/9] rounded-[120px] rounded-tr-none rounded-bl-none overflow-hidden shadow-2xl">
                            <img
                                src="/Guindaste.png"
                                alt="Movimentação de Cargas"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                </div>

                {/* TÍTULO 2 */}
                <div className="mb-8">
                    <div className="relative inline-block">
                        <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-brand-primary uppercase">
                            RESPONSABILIDADE TÉCNICA INTEGRAL
                        </h2>
                        <div className="w-full h-[3px] bg-brand-accent mt-2"></div>
                    </div>
                </div>

                {/* Block 2 */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* IMAGEM */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="aspect-[16/10] rounded-[120px] rounded-tl-none rounded-br-none overflow-hidden shadow-2xl">
                            <img
                                src="/responsabilidade.png"
                                alt="Responsabilidade Técnica"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* TEXTO */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="bg-[#E5E5E5] p-8 lg:p-10 rounded-[120px] rounded-tl-none rounded-br-none">
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
                                        <li key={i} className="flex items-center gap-3 text-brand-accent font-black text-sm tracking-widest">
                                            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-stone-500 text-sm font-bold italic">
                                    A engenharia não é suporte. É fundamento.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}