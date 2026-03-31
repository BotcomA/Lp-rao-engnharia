import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, ClipboardList, CalendarCheck, DraftingCompass, Timer, Search, Lightbulb, Zap } from "lucide-react";

const services = [
    {
        title: "PROJETO E DESENVOLVIMENTO DE PRODUTOS",
        description: "Desenvolvimento tecnico completo de produtos, equipamentos e estruturas industriais, da concepcao a documentacao final para fabricacao.",
        indication: "Industrias e fabricantes que buscam lancar ou aprimorar produtos industriais.",
        items: ["Reducao de retrabalho", "Otimizacao de custos", "Conformidade normativa", "Maior competitividade tecnica"],
        icon: <ClipboardList size={64} strokeWidth={1.5} />
    },
    {
        title: "GESTAO DE PROJETOS",
        description: "Planejamento, coordenacao e controle tecnico de todas as etapas do projeto, garantindo prazo, custo e qualidade.",
        indication: "Obras industriais, retrofit, ampliacoes e implantacao de processos.",
        items: ["Cumprimento de prazos", "Controle financeiro estruturado", "Reducao de riscos", "Previsibilidade operacional"],
        icon: <CalendarCheck size={64} strokeWidth={1.5} />
    },
    {
        title: "PROJETO DE MOVIMENTACAO DE CARGAS (RIGGING)",
        description: "Estudo tecnico e plano detalhado para icamento e movimentacao segura com guindastes e equipamentos industriais.",
        indication: "Industrias, construtoras, locadoras de guindastes e manutencao pesada.",
        items: ["Seguranca operacional", "Conformidade com normas", "Reducao de acidentes", "Eficiencia na execucao"],
        icon: <DraftingCompass size={64} strokeWidth={1.5} />
    },
    {
        title: "TESTES E ENSAIOS",
        description: "Avaliacao tecnica de desempenho e resistencia de materiais e estruturas.",
        items: ["Garantia de qualidade", "Seguranca estrutural", "Prevencao de falhas"],
        icon: <Timer size={64} strokeWidth={1.5} />
    },
    {
        title: "ENSAIOS NAO DESTRUTIVOS",
        description: "Inspecao tecnica da integridade de materiais e soldas sem danificacao do componente.",
        items: ["Identificacao precoce de defeitos", "Aumento da vida util", "Atendimento as normas"],
        icon: <Search size={64} strokeWidth={1.5} />
    },
    {
        title: "CONSULTORIA EM ENGENHARIA",
        description: "Assessoria tecnica para validacao, melhoria e tomada de decisao estrategica.",
        items: ["Identificacao precoce de defeitos", "Aumento da vida util", "Atendimento as normas"],
        icon: <Lightbulb size={64} strokeWidth={1.5} />
    },
    {
        title: "SOLUCOES SUSTENTAVEIS",
        description: "Projetos voltados para validacao, melhoria e otimizacao de recursos industriais.",
        items: ["Reducao de custos operacionais", "Conformidade ambiental", "Eficiencia produtiva"],
        icon: <Zap size={64} strokeWidth={1.5} />
    }
];

export default function ServicesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const swipeThreshold = 50;

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    const handleSwipe = (offsetX: number) => {
        if (offsetX <= -swipeThreshold) {
            next();
        } else if (offsetX >= swipeThreshold) {
            prev();
        }
    };

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
    };

    const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null) {
            return;
        }

        const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
        handleSwipe(touchEndX - touchStartX.current);
        touchStartX.current = null;
    };

    return (
        <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="flex items-center justify-center h-[560px] sm:h-[580px] lg:h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                                className="w-full max-w-5xl h-[600px] sm:h-[600px] lg:h-[510px] bg-white rounded-[2rem] lg:rounded-[2.5rem] p-5 sm:p-6 lg:p-16 shadow-xl border border-stone-100 grid lg:grid-cols-[1fr,auto] gap-6 sm:gap-8 lg:gap-12 items-center touch-pan-y overflow-hidden"
                            >
                                <div className="h-full overflow-y-auto pr-1">
                                    <div className="flex lg:hidden items-center justify-center mb-5 p-4 bg-stone-50 rounded-2xl text-brand-primary">
                                        {services[currentIndex].icon}
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-accent mb-5 sm:mb-6 lg:mb-8 tracking-tight uppercase leading-tight">
                                        {services[currentIndex].title}
                                    </h3>

                                    <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                                        <p className="text-base sm:text-lg lg:text-xl text-brand-primary font-medium leading-relaxed">
                                            {services[currentIndex].description}
                                        </p>

                                        {services[currentIndex].indication && (
                                            <p className="text-sm sm:text-base text-stone-600 font-bold">
                                                Indicado: <span className="font-medium">{services[currentIndex].indication}</span>
                                            </p>
                                        )}

                                        <div className="pt-2 sm:pt-4">
                                            <p className="text-xs sm:text-sm font-bold text-brand-primary uppercase tracking-[0.18em] sm:tracking-widest mb-4">
                                                {services[currentIndex].title.includes("PROJETO") ? "Principais ganhos:" : "Resultados:"}
                                            </p>
                                            <ul className="grid sm:grid-cols-2 gap-2.5 sm:gap-3">
                                                {services[currentIndex].items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-stone-600 font-medium">
                                                        <span className="text-brand-accent">•</span>
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

                    <div className="flex justify-center items-center gap-3 sm:gap-8 mt-8 sm:mt-12">
                        <button
                            onClick={prev}
                            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-brand-accent flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-white transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex gap-2 max-w-[140px] sm:max-w-none overflow-hidden">
                            {services.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? "bg-brand-accent w-8" : "bg-stone-300"}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-brand-accent flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-white transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
