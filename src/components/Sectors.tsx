import { motion } from "motion/react";

export default function Sectors() {
    const services = [
        "PLANEJAMENTO, COORDENAÇÃO E CONTROLE DE PROJETOS",
        "DESENVOLVIMENTO DE PRODUTOS INDUSTRIAIS",
        "PROJETOS DE MOVIMENTAÇÃO DE CARGAS (RIGGING)",
        "SOLUÇÕES SUSTENTÁVEIS E EFICIÊNCIA OPERACIONAL",
        "TESTES E ENSAIOS TÉCNICOS",
        "ENSAIOS NÃO DESTRUTIVOS",
    ];

    return (
        <section id="setores" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-4 relative inline-block">
                        Serviços Industriais Completos
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-accent"></div>
                    </h2>
                    <p className="text-stone-600 text-lg mt-8 max-w-5xl leading-relaxed">
                        Soluções técnicas desenvolvidas com rigor, análise especializada e foco em performance operacional, garantindo segurança, confiabilidade e eficiência em cada etapa do processo.
                    </p>
                </div>

                {/* Grid of Service Boxes */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-stone-50 p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all cursor-default group"
                        >
                            <span className="text-brand-primary font-black tracking-wider text-sm lg:text-base uppercase group-hover:text-brand-accent transition-colors">
                                {service}
                            </span>
                        </motion.div>
                    ))}

                    {/* Centered Bottom Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="md:col-span-2 flex justify-center"
                    >
                        <div className="w-full lg:w-2/3 bg-stone-50 p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all cursor-default group">
                            <span className="text-brand-primary font-black tracking-wider text-sm lg:text-base uppercase group-hover:text-brand-accent transition-colors">
                                CONSULTORIA EM ENGENHARIA
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
