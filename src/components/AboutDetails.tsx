import { motion } from "motion/react";

export default function AboutDetails() {
    const timelineEvents = [
        { year: "1997", label: "FUNDAÇÃO DA EMPRESA" },
        { year: "2005", label: "AMPLIAÇÃO TÉCNICA" },
        { year: "2015", label: "ATUAÇÃO REGIONAL CONSOLIDADA" },
        { year: "HOJE", label: "30 ANOS DE ENGENHARIA APLICADA" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#22221f] rounded-[2.5rem] p-8 lg:p-16 shadow-2xl text-white"
                >
                    <div className="max-w-5xl">
                        <h2 className="text-4xl lg:text-5xl font-black mb-10 tracking-tight">SOBRE A RAO</h2>

                        <div className="space-y-8 text-lg lg:text-xl leading-relaxed opacity-90">
                            <p>
                                Fundada em 1997, a RAO Engenharia atua há <span className="bg-brand-accent px-2 py-0.5 font-bold">30 anos</span> desenvolvendo soluções técnicas inteligentes, seguras e sob medida para operações industriais.
                            </p>

                            <p>
                                Com sede em Cianorte – PR e atuação <span className="bg-brand-accent px-2 py-0.5 font-bold">regional, estadual e nacional,</span> a empresa se posiciona como parceira estratégica de indústrias e empresas que exigem rigor técnico, conformidade normativa e controle operacional.
                            </p>

                            <p className="font-medium">
                                A RAO atua com forte base em projeto, análise técnica e responsabilidade profissional.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="mt-20 relative pt-12">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-white/20"></div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {timelineEvents.map((event, index) => (
                                    <div key={index} className="relative pt-8">
                                        {/* Vertical line/tick */}
                                        <div className="absolute top-[-32px] left-1/2 -translate-x-1/2 w-0.5 h-8 bg-white"></div>

                                        <div className="text-center">
                                            <p className="text-[10px] font-bold tracking-widest uppercase mb-2 opacity-60">
                                                {event.label}
                                            </p>
                                            <div className="inline-block bg-brand-accent px-4 py-1 rounded-full text-sm font-black">
                                                {event.year}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
