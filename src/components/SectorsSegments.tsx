import { motion } from "motion/react";

const segments = [
    {
        title: "SETORES INDUSTRIAIS",
        content: "A RAO Engenharia atua junto a indústrias metalúrgicas, empresas de usinagem e caldeirarias que demandam projetos técnicos bem fundamentados, controle estrutural rigoroso e conformidade normativa em todas as etapas do processo produtivo. A atuação contempla desenvolvimento de soluções técnicas, validação de estruturas, planejamento de intervenções industriais e acompanhamento técnico especializado."
    },
    {
        title: "OPERAÇÕES TÉCNICAS",
        content: "No campo operacional, a RAO participa de projetos de montagem industrial, manutenção pesada e intervenções estruturais que exigem planejamento técnico detalhado, análise de riscos e responsabilidade formal. A atuação envolve suporte técnico estratégico para execução segura, previsível e alinhada às normas vigentes."
    },
    {
        title: "EQUIPAMENTOS E LOGÍSTICA",
        content: "A empresa também atende operações que envolvem locação de guindastes e movimentação de cargas, desenvolvendo estudos técnicos, planos de rigging e análises estruturais voltadas à segurança operacional e eficiência na execução. Cada projeto é estruturado com base em critérios técnicos, garantindo viabilidade prática e mitigação de riscos."
    },
    {
        title: "ABRANGÊNCIA DE ATUAÇÃO",
        content: "Com sede em Cianorte – PR, a RAO Engenharia possui atuação regional, estadual e nacional, atendendo operações industriais que exigem rigor técnico, responsabilidade profissional e soluções sob medida para diferentes contextos e níveis de complexidade."
    }
];

export default function SectorsSegments() {
    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-black text-brand-accent mb-16 tracking-tight uppercase"
                >
                    SEGMENTOS ATENDIDOS
                </motion.h2>

                <div className="space-y-12">
                    {segments.map((segment, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-8 lg:p-12 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] border border-stone-100"
                        >
                            <h3 className="text-xl lg:text-2xl font-black text-brand-accent mb-4 tracking-tight uppercase">
                                {segment.title}
                            </h3>
                            <p className="text-lg lg:text-xl text-stone-700 leading-relaxed font-medium">
                                {segment.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
