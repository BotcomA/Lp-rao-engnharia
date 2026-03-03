import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ClipboardList, CalendarCheck, DraftingCompass, Timer, Search, Lightbulb, Zap } from "lucide-react";

const services = [
    {
        title: "PROJETO E DESENVOLVIMENTO DE PRODUTOS",
        description: "Desenvolvimento técnico completo de produtos, equipamentos e estruturas industriais, da concepção à documentação final para fabricação.",
        indication: "Indústrias e fabricantes que buscam lançar ou aprimorar produtos industriais.",
        items: ["Redução de retrabalho", "Otimização de custos", "Conformidade normativa", "Maior competitividade técnica"],
        icon: <ClipboardList size={64} strokeWidth={1.5} />
    },
    {
        title: "GESTÃO DE PROJETOS",
        description: "Planejamento, coordenação e controle técnico de todas as etapas do projeto, garantindo prazo, custo e qualidade.",
        indication: "Obras industriais, retrofit, ampliações e implantação de processos.",
        items: ["Cumprimento de prazos", "Controle financeiro estruturado", "Redução de riscos", "Previsibilidade operacional"],
        icon: <CalendarCheck size={64} strokeWidth={1.5} />
    },
    {
        title: "PROJETO DE MOVIMENTAÇÃO DE CARGAS (RIGGING)",
        description: "Estudo técnico e plano detalhado para içamento e movimentação segura com guindastes e equipamentos industriais.",
        indication: "Indústrias, construtoras, locadoras de guindastes e manutenção pesada.",
        items: ["Segurança operacional", "Conformidade com normas", "Redução de acidentes", "Eficiência na execução"],
        icon: <DraftingCompass size={64} strokeWidth={1.5} />
    },
    {
        title: "TESTES E ENSAIOS",
        description: "Avaliação técnica de desempenho e resistência de materiais e estruturas.",
        items: ["Garantia de qualidade", "Segurança estrutural", "Prevenção de falhas"],
        icon: <Timer size={64} strokeWidth={1.5} />
    },
    {
        title: "ENSAIOS NÃO DESTRUTIVOS",
        description: "Inspeção técnica da integridade de materiais e soldas sem danificação do componente.",
        items: ["Identificação precoce de defeitos", "Aumento da vida útil", "Atendimento às normas"],
        icon: <Search size={64} strokeWidth={1.5} />
    },
    {
        title: "CONSULTORIA EM ENGENHARIA",
        description: "Assessoria técnica para validação, melhoria e tomada de decisão estratégica.",
        items: ["Identificação precoce de defeitos", "Aumento da vida útil", "Atendimento às normas"],
        icon: <Lightbulb size={64} strokeWidth={1.5} />
    },
    {
        title: "SOLUÇÕES SUSTENTÁVEIS",
        description: "Projetos voltados para validação, melhoria e otimização de recursos industriais.",
        items: ["Redução de custos operacionais", "Conformidade ambiental", "Eficiência produtiva"],
        icon: <Zap size={64} strokeWidth={1.5} />
    }
];

export default function ServicesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    return (
        <section className="py-24 bg-stone-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    {/* Carousel Container */}
                    <div className="flex items-center justify-center min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full max-w-5xl bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-xl border border-stone-100 grid lg:grid-cols-[1fr,auto] gap-12 items-center"
                            >
                                <div>
                                    <h3 className="text-3xl lg:text-4xl font-black text-brand-accent mb-8 tracking-tight uppercase leading-tight">
                                        {services[currentIndex].title}
                                    </h3>

                                    <div className="space-y-6">
                                        <p className="text-lg lg:text-xl text-brand-primary font-medium leading-relaxed">
                                            {services[currentIndex].description}
                                        </p>

                                        {services[currentIndex].indication && (
                                            <p className="text-stone-600 font-bold">
                                                Indicado: <span className="font-medium">{services[currentIndex].indication}</span>
                                            </p>
                                        )}

                                        <div className="pt-4">
                                            <p className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">
                                                {services[currentIndex].title.includes("PROJETO") ? "Principais ganhos:" : "Resultados:"}
                                            </p>
                                            <ul className="grid sm:grid-cols-2 gap-3">
                                                {services[currentIndex].items.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-stone-600 font-medium">
                                                        <span className="text-brand-accent">▶</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-stone-50 rounded-3xl text-brand-primary">
                                    {services[currentIndex].icon}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center gap-8 mt-12">
                        <button
                            onClick={prev}
                            className="w-14 h-14 rounded-full border-2 border-brand-accent flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-white transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex gap-2">
                            {services.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? "bg-brand-accent w-8" : "bg-stone-300"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-14 h-14 rounded-full border-2 border-brand-accent flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-white transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
