import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, Send, CheckCircle2 } from "lucide-react";

type FormData = {
    nome: string;
    ddd: string;
    whatsapp: string;
    email: string;
    cidade: string;
    estado: string;
    pais: string;
    natureza: string;
    descricao: string;
    documentacao: string;
    complexidade: string;
    prazo: string;
    responsabilidade: string;
};

const initialData: FormData = {
    nome: "",
    ddd: "",
    whatsapp: "",
    email: "",
    cidade: "",
    estado: "",
    pais: "",
    natureza: "",
    descricao: "",
    documentacao: "",
    complexidade: "",
    prazo: "",
    responsabilidade: "",
};

export default function AnalysisForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialData);

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (name: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-brand-primary tracking-widest uppercase">Nome Completo</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-white border-2 border-stone-200 rounded-2xl focus:border-brand-accent outline-none transition-all font-medium"
                                    placeholder="Seu nome completo"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-brand-primary tracking-widest uppercase">DDD</label>
                                    <input
                                        type="text"
                                        name="ddd"
                                        value={formData.ddd}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-white border-2 border-stone-200 rounded-2xl focus:border-brand-accent outline-none transition-all font-medium"
                                        placeholder="11"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-black text-brand-primary tracking-widest uppercase">WhatsApp</label>
                                    <input
                                        type="text"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-white border-2 border-stone-200 rounded-2xl focus:border-brand-accent outline-none transition-all font-medium"
                                        placeholder="99999-9999"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-brand-primary tracking-widest uppercase">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-white border-2 border-stone-200 rounded-2xl focus:border-brand-accent outline-none transition-all font-medium"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-brand-primary tracking-widest uppercase">Cidade</label>
                                    <input
                                        type="text"
                                        name="cidade"
                                        value={formData.cidade}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-white border-2 border-stone-200 rounded-2xl focus:border-brand-accent outline-none transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-brand-primary tracking-widest uppercase">Estado</label>
                                    <input
                                        type="text"
                                        name="estado"
                                        value={formData.estado}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-white border-2 border-stone-200 rounded-2xl focus:border-brand-accent outline-none transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-brand-primary tracking-widest uppercase">País</label>
                                    <input
                                        type="text"
                                        name="pais"
                                        value={formData.pais}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-white border-2 border-stone-200 rounded-2xl focus:border-brand-accent outline-none transition-all font-medium"
                                        placeholder="Brasil"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end pt-6">
                            <button
                                onClick={nextStep}
                                className="flex items-center gap-2 px-10 py-4 bg-brand-accent text-white font-black rounded-2xl hover:bg-brand-primary transition-all uppercase tracking-widest shadow-lg shadow-brand-accent/20"
                            >
                                Próximo <ChevronRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-sm font-black text-brand-primary tracking-widest uppercase block">Qual é a natureza da sua necessidade?</label>
                                <p className="text-xs text-stone-500 font-medium italic">Projeto estrutural, movimentação de cargas / rigging, montagem industrial, manutenção industrial, desenvolvimento de produto, consultoria técnica ou outro.</p>
                                <input
                                    type="text"
                                    name="natureza"
                                    value={formData.natureza}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-white border-2 border-stone-200 rounded-2xl focus:border-brand-accent outline-none transition-all font-medium"
                                    placeholder="Descreva brevemente a natureza"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-black text-brand-primary tracking-widest uppercase block">Descreva o que precisa ser analisado</label>
                                <p className="text-xs text-stone-500 font-medium italic">Informe local, tipo de equipamento, peso estimado, prazos, etc.</p>
                                <textarea
                                    name="descricao"
                                    value={formData.descricao}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-6 py-4 bg-white border-2 border-stone-200 rounded-2xl focus:border-brand-accent outline-none transition-all font-medium resize-none"
                                    placeholder="Detalhes técnicos da sua necessidade..."
                                />
                            </div>
                        </div>
                        <div className="flex justify-between pt-6">
                            <button
                                onClick={prevStep}
                                className="flex items-center gap-2 px-8 py-4 border-2 border-stone-200 text-brand-primary font-black rounded-2xl hover:bg-stone-100 transition-all uppercase tracking-widest"
                            >
                                <ChevronLeft size={20} /> Anterior
                            </button>
                            <button
                                onClick={nextStep}
                                className="flex items-center gap-2 px-10 py-4 bg-brand-accent text-white font-black rounded-2xl hover:bg-brand-primary transition-all uppercase tracking-widest shadow-lg shadow-brand-accent/20"
                            >
                                Próximo <ChevronRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-10"
                    >
                        <div className="space-y-8">
                            {/* Documentação */}
                            <div className="space-y-4">
                                <label className="text-sm font-black text-brand-primary tracking-widest uppercase block">Existe documentação técnica?</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {["Sim, possuo projetos/desenhos.", "Parcial", "Não possuo documentação."].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => handleRadioChange("documentacao", opt)}
                                            className={`px-6 py-4 rounded-2xl border-2 transition-all text-sm font-bold text-left ${formData.documentacao === opt
                                                    ? "border-brand-accent bg-brand-accent/5 text-brand-accent"
                                                    : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Complexidade */}
                            <div className="space-y-4">
                                <label className="text-sm font-black text-brand-primary tracking-widest uppercase block">Complexidade Estimada</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {["Baixa", "Média", "Alta", "Alta complexidade / risco elevado"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => handleRadioChange("complexidade", opt)}
                                            className={`px-4 py-4 rounded-2xl border-2 transition-all text-sm font-bold text-center ${formData.complexidade === opt
                                                    ? "border-brand-accent bg-brand-accent/5 text-brand-accent"
                                                    : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Prazo */}
                            <div className="space-y-4">
                                <label className="text-sm font-black text-brand-primary tracking-widest uppercase block">Prazo Desejado</label>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                    {["Urgente (até 7 dias)", "15 dias", "20 dias", "30 dias", "A definir"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => handleRadioChange("prazo", opt)}
                                            className={`px-3 py-4 rounded-2xl border-2 transition-all text-xs font-bold text-center ${formData.prazo === opt
                                                    ? "border-brand-accent bg-brand-accent/5 text-brand-accent"
                                                    : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Responsabilidade */}
                            <div className="space-y-4">
                                <label className="text-sm font-black text-brand-primary tracking-widest uppercase block">Responsabilidade Técnica</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {["Sim, com emissão de ART", "Apenas análise preliminar", "A definir"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => handleRadioChange("responsabilidade", opt)}
                                            className={`px-6 py-4 rounded-2xl border-2 transition-all text-sm font-bold text-left ${formData.responsabilidade === opt
                                                    ? "border-brand-accent bg-brand-accent/5 text-brand-accent"
                                                    : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between pt-6">
                            <button
                                onClick={prevStep}
                                className="flex items-center gap-2 px-8 py-4 border-2 border-stone-200 text-brand-primary font-black rounded-2xl hover:bg-stone-100 transition-all uppercase tracking-widest"
                            >
                                <ChevronLeft size={20} /> Anterior
                            </button>
                            <button
                                onClick={nextStep}
                                className="flex items-center gap-2 px-10 py-4 bg-brand-accent text-white font-black rounded-2xl hover:bg-brand-primary transition-all uppercase tracking-widest shadow-lg shadow-brand-accent/20"
                            >
                                Finalizar <Send size={20} />
                            </button>
                        </div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-12 text-center space-y-8"
                    >
                        <div className="flex justify-center">
                            <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner">
                                <CheckCircle2 size={64} />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-5xl lg:text-7xl font-black text-brand-primary tracking-tighter uppercase">Obrigado!</h2>
                            <p className="text-xl lg:text-2xl text-stone-600 font-medium max-w-xl mx-auto leading-relaxed">
                                A análise técnica será conduzida diretamente pelo engenheiro responsável. Entraremos em contato em breve.
                            </p>
                        </div>
                        <div className="pt-8">
                            <button
                                onClick={() => window.location.href = "/"}
                                className="px-12 py-4 bg-brand-primary text-white font-black rounded-2xl hover:bg-brand-accent transition-all uppercase tracking-widest shadow-xl"
                            >
                                Voltar ao Início
                            </button>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Progress Bar */}
                {step < 4 && (
                    <div className="mb-12">
                        <div className="flex justify-between mb-4">
                            {[1, 2, 3].map((s) => (
                                <div key={s} className="flex flex-col items-center">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 ${step >= s ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/30" : "bg-stone-200 text-stone-400"
                                            }`}
                                    >
                                        {s}
                                    </div>
                                    <span className={`text-[10px] font-black mt-2 tracking-widest uppercase ${step >= s ? "text-brand-accent" : "text-stone-400"}`}>
                                        {s === 1 ? "Contato" : s === 2 ? "Necessidade" : "Técnico"}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-brand-accent"
                                initial={{ width: "0%" }}
                                animate={{ width: `${((step - 1) / 2) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>
                )}

                <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.05)] border border-stone-100 min-h-[500px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {renderStep()}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
