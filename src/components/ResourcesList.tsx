import { motion } from "motion/react";
import { Download } from "lucide-react";

const resources = [
    {
        title: "TABELA DE GUINDASTES",
        description: "Tabela técnica completa abrangendo todos os tipos de guindastes, de 25 tn até 500 tn.",
        image: "caminhao.png"
    },
    {
        title: "TABELAS TÉCNICAS E CATÁLOGOS",
        description: "PDF para baixar com compilação de tabelas técnicas e catálogos de componentes industriais.",
        image: "https://picsum.photos/seed/rao-catalogs/600/400"
    },
    {
        title: "TABELA DE CONVERSÃO DE MEDIDAS",
        description: "Ferramenta de consulta rápida para conversão de unidades de medida utilizadas na engenharia.",
        image: "regua.png"
    },
    {
        title: "TABELA DE FLANGES",
        description: "Especificações técnicas e dimensões padronizadas para diferentes tipos de flanges industriais.",
        image: "disco.png"
    },
    {
        title: "TABELA DE CONVERSÃO DE PRESSÃO",
        description: "Referência técnica para conversão entre diferentes escalas de pressão (PSI, Bar, MPa, etc).",
        image: "tabela.png"
    }
];

export default function ResourcesList() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`bg-stone-50 rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] border border-stone-100 flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                }`}
                        >
                            {/* Image Section */}
                            <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden">
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-brand-primary/10"></div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                                <h3 className="text-2xl lg:text-3xl font-black text-brand-accent mb-4 tracking-tight uppercase">
                                    {resource.title}
                                </h3>
                                <p className="text-lg lg:text-xl text-stone-700 font-medium max-w-2xl">
                                    {resource.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
