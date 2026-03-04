import { motion } from "motion/react";

export default function CEOProfile() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 border-4 border-brand-accent p-1 shadow-2xl">
                            <img
                                src="ricardo.png"
                                alt="Ricardo Aparecido de Oliveira"
                                className="w-full h-auto object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        {/* Decorative shadow element */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-stone-100 -z-10"></div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col"
                    >
                        <div className="mb-8">
                            <h2 className="text-3xl lg:text-5xl font-black text-brand-primary uppercase leading-tight">
                                RICARDO APARECIDO DE OLIVEIRA
                            </h2>
                            <div className="mt-4 space-y-1">
                                <p className="text-lg font-bold text-brand-primary uppercase tracking-wider">
                                    CEO | DIRETOR EXECUTIVO
                                </p>
                                <p className="text-sm font-bold text-stone-500 uppercase tracking-widest">
                                    ENGENHEIRO RESPONSÁVEL – CREA 222367-D
                                </p>
                            </div>
                            <div className="mt-6 w-full h-0.5 bg-brand-accent"></div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-12 mb-12">
                            {/* Responsabilidade Técnica */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-brand-primary">Responsabilidade Técnica</h3>
                                <ul className="space-y-3">
                                    {["Conformidade normativa", "Emissão de ART", "Documentação técnica"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-stone-600 font-medium">
                                            <span className="text-brand-accent">▶</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Método & Segurança */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-brand-primary">Método & Segurança</h3>
                                <ul className="space-y-3">
                                    {["Análise estrutural", "Planejamento técnico", "Segurança operacional"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-stone-600 font-medium">
                                            <span className="text-brand-accent">▶</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-auto pt-8 border-t border-brand-accent">
                            <p className="text-2xl lg:text-3xl text-brand-primary font-medium leading-tight">
                                A engenharia não é delegada. <br />
                                <span className="font-black">É liderada.</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
