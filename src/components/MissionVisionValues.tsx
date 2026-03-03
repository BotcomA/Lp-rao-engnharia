import { motion } from "motion/react";
import { Target, Eye, Users } from "lucide-react";

export default function MissionVisionValues() {
    const items = [
        {
            title: "MISSÃO",
            description: "Aplicar a engenharia com responsabilidade técnica, método e precisão, desenvolvendo soluções seguras, eficientes e tecnicamente viáveis, em conformidade com normas e legislações vigentes.",
            icon: <Target size={64} strokeWidth={1.5} />,
        },
        {
            title: "VISÃO",
            description: "Ser reconhecida como empresa de referência pela excelência técnica, confiabilidade e compromisso com a segurança.",
            icon: <Eye size={64} strokeWidth={1.5} />,
        },
        {
            title: "VALORES",
            list: [
                "Responsabilidade Técnica",
                "Precisão e Método",
                "Segurança em Primeiro Lugar",
                "Compromisso com o Cliente",
                "Transparência e Integridade",
                "Evolução Contínua",
            ],
            icon: <Users size={64} strokeWidth={1.5} />,
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-0">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`flex flex-col items-center text-center px-8 lg:px-12 py-12 relative ${index !== items.length - 1 ? "md:border-r md:border-brand-accent/40" : ""
                                }`}
                        >
                            <h3 className="text-3xl lg:text-4xl font-black text-brand-primary mb-8 tracking-tight uppercase">
                                {item.title}
                            </h3>

                            <div className="flex-grow flex flex-col justify-center mb-12 min-h-[160px]">
                                {item.description ? (
                                    <p className="text-lg text-stone-600 leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                ) : (
                                    <ul className="space-y-2">
                                        {item.list?.map((val, i) => (
                                            <li key={i} className="text-lg text-stone-600 font-bold">
                                                {val}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="text-brand-accent mt-auto">
                                {item.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
