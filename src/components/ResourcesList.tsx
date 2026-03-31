import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Download, X, Eye, Info, ChevronLeft, ChevronRight } from "lucide-react";

const catalogs = [
    // GUINDASTES
    {
        id: "g-90",
        title: "Guindaste Sany 90ton",
        subtitle: "STC90",
        description: "Equipamento de alta performance para içamentos pesados.",
        image: "/img/Guindaste_sany_90ton.png",
        pdfUrl: "/img/Guindaste_sany_90ton.png",
        category: "GUINDASTES",
        specs: [
            { label: "Nome do equipamento", value: "Guindaste Sany STC90" },
            { label: "Capacidade máxima", value: "90 toneladas" },
            { label: "Extensão máxima", value: "49.5 m" },
            { label: "Extensão máxima com JIB", value: "76.5 m" },
            { label: "Lança", value: "Telescópico" }
        ]
    },
    {
        id: "g-80",
        title: "Guindaste Sany 80ton",
        subtitle: "STC80",
        description: "Versatilidade e precisão em operações de médio e grande porte.",
        image: "/img/Guindaste_sany_75ton.png",
        pdfUrl: "/img/Guindaste_sany_75ton.png",
        category: "GUINDASTES",
        specs: [
            { label: "Nome do equipamento", value: "Guindaste Sany STC80" },
            { label: "Capacidade máxima", value: "80 toneladas" },
            { label: "Extensão máxima", value: "45 m" },
            { label: "Extensão máxima com JIB", value: "61 m" },
            { label: "Lança", value: "Telescópico" }
        ]
    },
    {
        id: "g-25",
        title: "Guindaste Sany 25ton",
        subtitle: "STC250",
        description: "Agilidade e eficiência para içamentos urbanos e rápidos.",
        image: "/img/Guindaste_sany_25ton.png",
        pdfUrl: "/img/Guindaste_sany_25ton.png",
        category: "GUINDASTES",
        specs: [
            { label: "Nome do equipamento", value: "Guindaste Sany STC250" },
            { label: "Capacidade máxima", value: "25 toneladas" },
            { label: "Extensão máxima", value: "39.5 m" },
            { label: "Extensão máxima com JIB", value: "47,6 m" },
            { label: "Lança", value: "Telescópico" }
        ]
    },
    // CAMINHÃO MUNCK
    {
        id: "m-70",
        title: "Munck 70.700",
        subtitle: "CAMINHÃO MUNCK",
        description: "Alta capacidade de carga e alcance para logística pesada.",
        image: "/img/catalogo3.png",
        pdfUrl: "/img/catalogo3.png",
        category: "CAMINHÃO MUNCK",
        specs: [
            { label: "Nome do equipamento", value: "Caminhão Munck 70.700" },
            { label: "Capacidade máxima", value: "14,1 toneladas" },
            { label: "Extensão máxima vertical", value: "26.8 m" },
            { label: "Extensão máxima horizontal", value: "23,4 m" },
            { label: "Lança", value: "articulada com lanças telescópicas" }
        ]
    },
    {
        id: "m-52",
        title: "Munck 52.000",
        subtitle: "CAMINHÃO MUNCK",
        description: "Equilíbrio perfeito entre força e manobrabilidade.",
        image: "/img/catalogo2.png",
        pdfUrl: "/img/catalogo2.png",
        category: "CAMINHÃO MUNCK",
        specs: [
            { label: "Nome do equipamento", value: "Caminhão Munck 52.000" },
            { label: "Capacidade máxima", value: "13,2 toneladas" },
            { label: "Extensão máxima vertical", value: "26.2 m" },
            { label: "Extensão máxima horizontal", value: "22,5 m" },
            { label: "Lança", value: "articulada com lanças telescópicas" }
        ]
    },
    {
        id: "m-45",
        title: "Munck 45.007",
        subtitle: "CAMINHÃO MUNCK",
        description: "Ideal para montagens industriais e transporte de cargas.",
        image: "/img/catalogo4.png",
        pdfUrl: "/img/catalogo4.png",
        category: "CAMINHÃO MUNCK",
        specs: [
            { label: "Nome do equipamento", value: "Caminhão Munck 45.007" },
            { label: "Capacidade máxima", value: "10,9 toneladas" },
            { label: "Extensão máxima vertical", value: "20,5 m" },
            { label: "Extensão máxima horizontal", value: "17,5 m" },
            { label: "Lança", value: "articulada com lanças telescópicas" }
        ]
    },
    // PLATAFORMA ARTICULADA
    {
        id: "p-45",
        title: "Plataforma Z-45/25",
        subtitle: "PLATAFORMA ARTICULADA",
        description: "Alcance e flexibilidade para trabalhos em altura.",
        image: "/img/Plataforma_articulada_z-45.png",
        pdfUrl: "/img/Plataforma_articulada_z-45.png",
        category: "PLATAFORMA ARTICULADA",
        specs: [
            { label: "Nome do equipamento", value: "Plataforma articulada" },
            { label: "Capacidade máxima", value: "227 kg" },
            { label: "Extensão máxima", value: "15,9 m" },
            { label: "Fonte de energia", value: "diesel" },
            { label: "Giro", value: "hidráulico de 180 graus" }
        ]
    },
    {
        id: "p-60",
        title: "Plataforma Z-60/34",
        subtitle: "PLATAFORMA ARTICULADA",
        description: "Máximo alcance e produtividade em terrenos irregulares.",
        image: "/img/Plataforma_articulada_z-60.png",
        pdfUrl: "/img/Plataforma_articulada_z-60.png",
        category: "PLATAFORMA ARTICULADA",
        specs: [
            { label: "Nome do equipamento", value: "Plataforma articulada" },
            { label: "Capacidade máxima", value: "227 kg" },
            { label: "Extensão máxima", value: "20,1 m" },
            { label: "Fonte de energia", value: "diesel" },
            { label: "Giro", value: "hidráulico de 360 graus" }
        ]
    }
];

const tables = [
    {
        id: "tab-1",
        title: "TABELA - CONVERSÃO DE MEDIDAS",
        subtitle: "EQUIVALÊNCIA ENTRE DIFERENTES SISTEMAS DE MEDIÇÃO",
        description: "Tabela de referência rápida para conversão entre unidades métricas e imperiais comumente utilizadas em projetos de engenharia mecânica e civil.",
        image: "/img/tabela1.png",
        pdfUrl: "/img/conversao_medidas.pdf",
        specs: []
    },
    {
        id: "tab-2",
        title: "TABELA - FLANGES",
        subtitle: "DIMENSÕES E ESPECIFICAÇÕES",
        description: "Guia técnico de dimensões de flanges conforme normas ANSI/ASME e DIN, facilitando a especificação correta em sistemas de tubulação industrial.",
        image: "/img/tabela2.png",
        pdfUrl: "/img/tabela_geral_flanges.pdf",
        specs: []
    },
    {
        id: "tab-3",
        title: "TABELA - CONVERSÃO DE PRESSÃO",
        subtitle: "EQUIVALÊNCIA ENTRE DIFERENTES UNIDADES DE PRESSÃO",
        description: "Conversor estático para unidades de pressão (PSI, Bar, MPa, kgf/cm²), essencial para calibração de instrumentos e testes hidrostáticos.",
        image: "/img/tabela3.png",
        pdfUrl: "/img/tabela_convercao_de_pressao.pdf",
        specs: []
    }
];
interface Spec {
    label: string;
    value: string;
}

interface Resource {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    pdfUrl: string;
    category?: string;
    specs: Spec[];
}

export default function ResourcesList() {
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState<'equipamentos' | 'tabelas'>('equipamentos');

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % catalogs.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + catalogs.length) % catalogs.length);
    };

    const handleDownload = (e: React.MouseEvent, url: string, filename: string) => {
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="py-32 bg-stone-50/50 overflow-hidden min-h-[900px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Tab Navigation Headers */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20 items-start md:items-center justify-center">
                    <button
                        onClick={() => setActiveTab('equipamentos')}
                        className={`text-4xl lg:text-6xl font-black tracking-tighter uppercase transition-all duration-500 text-left ${activeTab === 'equipamentos'
                            ? "text-brand-primary scale-100"
                            : "text-brand-primary opacity-20 hover:opacity-40 scale-95 origin-left"
                            }`}
                    >
                        Equipamentos
                    </button>
                    <button
                        onClick={() => setActiveTab('tabelas')}
                        className={`text-4xl lg:text-6xl font-black tracking-tighter uppercase transition-all duration-500 text-left ${activeTab === 'tabelas'
                            ? "text-brand-primary scale-100"
                            : "text-brand-primary opacity-20 hover:opacity-40 scale-95 origin-left"
                            }`}
                    >
                        Tabelas
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === 'equipamentos' ? (
                        <motion.div
                            key="equipamentos-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="max-w-3xl mb-12 mx-auto">
                                <p className="text-stone-500 text-lg font-medium text-center">
                                    Explore nossa frota completa de guindastes, muncks e plataformas. Equipamentos de última geração para garantir a eficiência do seu projeto.
                                </p>
                            </div>

                            {/* Featured Catalogs Carousel */}
                            <div className="relative mb-32">
                                <div className="overflow-hidden rounded-[3rem]">
                                    <motion.div
                                        className="flex"
                                        animate={{ x: `-${currentSlide * 100}%` }}
                                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                    >
                                        {catalogs.map((catalog) => (
                                            <div
                                                key={catalog.id}
                                                className="min-w-full px-1"
                                            >
                                                <motion.div
                                                    className="group relative bg-white rounded-[2.5rem] p-4 lg:p-6 border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden mx-1"
                                                >
                                                    <div className="flex flex-col md:flex-row gap-8 items-center h-full relative z-10">
                                                        <div className="w-full md:w-2/5 aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-100">
                                                            <img
                                                                src={catalog.image}
                                                                alt={catalog.title}
                                                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                                                referrerPolicy="no-referrer"
                                                            />
                                                        </div>
                                                        <div className="w-full md:w-3/5 pr-4 lg:pr-8 py-4">
                                                            <div className="flex flex-col h-full justify-between">
                                                                <div>
                                                                    <div className="flex items-center gap-2 mb-4">
                                                                        <div className="w-8 h-px bg-brand-accent"></div>
                                                                        <span className="text-brand-accent font-black text-[10px] tracking-[0.3em] uppercase">
                                                                            {catalog.category || "Catálogo Oficial"}
                                                                        </span>
                                                                    </div>
                                                                    <h3 className="text-2xl lg:text-4xl font-black text-brand-primary tracking-tight uppercase mb-4 leading-tight">
                                                                        {catalog.title}
                                                                    </h3>
                                                                    <p className="text-stone-400 text-sm font-bold uppercase tracking-widest">
                                                                        {catalog.subtitle}
                                                                    </p>
                                                                </div>

                                                                <div className="mt-10 flex flex-wrap items-center gap-4">
                                                                    <button
                                                                        onClick={() => setSelectedResource(catalog)}
                                                                        className="px-8 py-3 bg-brand-primary text-white text-[10px] font-black rounded-full uppercase tracking-widest hover:bg-brand-accent transition-colors flex items-center gap-2 shadow-lg shadow-brand-primary/20"
                                                                    >
                                                                        <Eye size={14} />
                                                                        Saiba mais
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Decorative background logo */}
                                                    <div className="absolute -bottom-10 -right-10 opacity-[0.08] pointer-events-none transition-all duration-500 group-hover:opacity-[0.52]">
                                                        <span className="block text-[15rem] font-black tracking-tighter text-black transform transition-transform duration-500 group-hover:scale-140 group-hover:-translate-y-2">
                                                            RAO
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Carousel Controls */}
                                <div className="flex items-center justify-center gap-6 mt-12">
                                    <button
                                        onClick={prevSlide}
                                        className="w-14 h-14 rounded-full border-2 border-stone-200 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-lg bg-white active:scale-95"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>

                                    <div className="flex gap-3">
                                        {catalogs.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentSlide(i)}
                                                className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === i ? "w-10 bg-brand-accent" : "w-2.5 bg-stone-300 hover:bg-stone-400"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={nextSlide}
                                        className="w-14 h-14 rounded-full border-2 border-stone-200 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-lg bg-white active:scale-95"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="tabelas-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="max-w-3xl mb-12 mx-auto">
                                <p className="text-stone-500 text-lg font-medium text-center">
                                    Tabelas de referência técnica, conversões e especificações para apoio em campo e planejamento de engenharia.
                                </p>
                            </div>

                            {/* Tables Section (Static Horizontal Cards) */}
                            <div className="max-w-5xl mx-auto">
                                <div className="space-y-10">
                                    {tables.map((table, index) => (
                                        <motion.div
                                            key={table.id}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                            className={`bg-white rounded-[2.5rem] p-6 lg:p-8 border-2 border-stone-100 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center gap-8 lg:gap-12 transition-all hover:shadow-[10px_10px_0px_0px_rgba(242,125,38,0.1)] hover:border-brand-accent/20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                                }`}
                                        >
                                            <div className="w-full md:w-1/3 aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden border border-stone-100 shadow-inner">
                                                <img
                                                    src={table.image}
                                                    alt={table.title}
                                                    className="w-full h-full object-cover"
                                                    referrerPolicy="no-referrer"
                                                />
                                            </div>
                                            <div className="flex-grow text-center md:text-left">
                                                <h3 className="text-xl lg:text-3xl font-black text-brand-primary tracking-tight uppercase mb-2">
                                                    {table.title}
                                                </h3>
                                                <p className="text-stone-400 font-bold tracking-widest text-xs lg:text-sm uppercase leading-relaxed mb-6">
                                                    {table.subtitle}
                                                </p>
                                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                                    <button
                                                        onClick={() => setSelectedResource(table)}
                                                        className="px-6 py-2.5 bg-brand-primary text-white text-[10px] font-black rounded-full uppercase tracking-widest hover:bg-brand-accent transition-colors flex items-center gap-2 shadow-lg shadow-brand-primary/10"
                                                    >
                                                        <Eye size={14} />
                                                        Saiba mais
                                                    </button>
                                                    <button
                                                        onClick={(e) => handleDownload(e, table.pdfUrl, `${table.title}.pdf`)}
                                                        className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-brand-accent hover:border-brand-accent transition-all bg-white"
                                                        title="Download PDF"
                                                    >
                                                        <Download size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Resource Modal */}
            <AnimatePresence>
                {selectedResource && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedResource(null)}
                            className="absolute inset-0 bg-brand-primary/90 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-7xl h-[85vh] bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
                        >
                            {/* Modal Content - Left Side (Info) */}
                            <div className="w-full lg:w-1/3 p-8 lg:p-12 overflow-y-auto border-b lg:border-b-0 lg:border-r border-stone-100">
                                <div className="flex items-center justify-between mb-8 lg:hidden">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-6 bg-brand-accent"></div>
                                        <span className="text-brand-accent font-black text-xs tracking-widest uppercase">Detalhes</span>
                                    </div>
                                    <button
                                        onClick={() => setSelectedResource(null)}
                                        className="p-2 bg-stone-100 rounded-full text-stone-500 hover:bg-brand-accent hover:text-white transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="hidden lg:flex items-center gap-2 mb-6">
                                    <div className="w-1 h-6 bg-brand-accent"></div>
                                    <span className="text-brand-accent font-black text-xs tracking-widest uppercase">
                                        {selectedResource.category || "Documentação Técnica"}
                                    </span>
                                </div>

                                <h2 className="text-3xl lg:text-4xl font-black text-brand-primary tracking-tighter uppercase mb-4 leading-tight">
                                    {selectedResource.title}
                                </h2>
                                <p className="text-stone-400 font-bold text-sm uppercase tracking-widest mb-8">
                                    {selectedResource.subtitle}
                                </p>

                                <div className="space-y-6 mb-10">
                                    {selectedResource.specs && selectedResource.specs.length > 0 ? (
                                        <div className="grid grid-cols-1 gap-4">
                                            {selectedResource.specs.map((spec, i) => (
                                                <div key={i} className="flex flex-col border-b border-stone-100 pb-2">
                                                    <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-1">
                                                        {spec.label}
                                                    </span>
                                                    <span className="text-stone-600 text-sm font-medium">
                                                        {spec.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-brand-accent">
                                                <Info size={20} />
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-black text-brand-primary uppercase tracking-widest mb-1">Descrição</h4>
                                                <p className="text-stone-600 text-sm leading-relaxed">
                                                    {selectedResource.description}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-3">
                                    {selectedResource.pdfUrl && !selectedResource.specs?.length && (
                                        <button
                                            onClick={(e) => handleDownload(e, selectedResource.pdfUrl, `${selectedResource.title}.pdf`)}
                                            className="w-full py-4 bg-brand-primary text-white text-xs font-black rounded-2xl uppercase tracking-widest hover:bg-brand-accent transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/10"
                                        >
                                            <Download size={18} />
                                            Baixar PDF Técnico
                                        </button>
                                    )}
                                    <button
                                        onClick={() => setSelectedResource(null)}
                                        className="w-full py-4 border border-stone-200 text-stone-500 text-xs font-black rounded-2xl uppercase tracking-widest hover:bg-stone-50 transition-all"
                                    >
                                        Fechar Visualização
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content - Right Side (Photo or PDF) */}
                            <div className="w-full lg:w-2/3 bg-stone-100 relative">
                                <button
                                    onClick={() => setSelectedResource(null)}
                                    className="hidden lg:flex absolute top-6 right-6 z-10 p-3 bg-white/80 backdrop-blur-md rounded-full text-brand-primary hover:bg-brand-accent hover:text-white transition-all shadow-lg"
                                >
                                    <X size={24} />
                                </button>

                                <div className="w-full h-full flex items-center justify-center p-8">
                                    {selectedResource.specs && selectedResource.specs.length > 0 ? (
                                        <img
                                            src={selectedResource.image}
                                            alt={selectedResource.title}
                                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                                            referrerPolicy="no-referrer"
                                        />
                                    ) : (
                                        <iframe
                                            src={`${selectedResource.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-width`}
                                            className="w-full h-full border-none"
                                            title={selectedResource.title}
                                        />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
