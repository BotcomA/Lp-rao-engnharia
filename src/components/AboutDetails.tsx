import { motion } from "motion/react";

export default function AboutDetails() {
    const timelineEvents = [
        { year: "1997", label: "FUNDAÇÃO DA EMPRESA" },
        { year: "2005", label: "AMPLIAÇÃO TÉCNICA" },
        { year: "2015", label: "ATUAÇÃO REGIONAL CONSOLIDADA" },
        { year: "HOJE", label: "30 ANOS DE ENGENHARIA APLICADA" },
    ];

    return (
        <section className="py-16 md:py-24 bg-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#22221f] rounded-[2rem] lg:rounded-[2.5rem] p-5 sm:p-8 lg:p-16 shadow-2xl text-white"
                >
                    <div className="max-w-5xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 md:mb-10 tracking-tight">SOBRE A RAO</h2>

                        <div className="space-y-6 md:space-y-8 text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">
                            <p>
                                Fundada há <span className="bg-brand-accent px-2 py-0.5 font-bold">30 anos</span> a RAO Engenharia atua desenvolvendo soluções técnicas inteligentes, seguras e sob medida para operações industriais.
                            </p>

                            <p>
                                Com sede em Cianorte – PR e atuação <span className="bg-brand-accent px-2 py-0.5 font-bold">regional, estadual e nacional,</span> a empresa se posiciona como parceira estratégica de indústrias e empresas que exigem rigor técnico, conformidade normativa e controle operacional.
                            </p>

                            <p className="font-medium">
                                A RAO atua com forte base em projeto, análise técnica e responsabilidade profissional.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="mt-12 md:mt-20 relative pt-10 md:pt-12">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-white/20"></div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                {timelineEvents.map((event, index) => (
                                    <div key={index} className="relative pt-8">
                                        {/* Vertical line/tick */}
                                        <div className="absolute top-[-32px] left-1/2 -translate-x-1/2 w-0.5 h-8 bg-white"></div>

                                        <div className="text-center">
                                            <div className="inline-block max-w-full px-4 py-2 bg-brand-accent rounded-full text-[11px] sm:text-xs font-bold text-center break-words">
                                                {event.label}
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
