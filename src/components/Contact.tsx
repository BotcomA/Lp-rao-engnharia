import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contato" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    <div className="grid lg:grid-cols-2 relative z-10">
                        <div className="p-12 lg:p-20 text-white">
                            <h2 className="text-5xl font-black tracking-tight mb-8">Solicite uma <br /><span className="text-brand-accent italic font-serif font-light">Análise Técnica</span></h2>
                            <p className="text-stone-400 text-lg mb-12 leading-relaxed max-w-md">
                                Nossa equipe de especialistas está pronta para avaliar seu projeto e oferecer as melhores soluções técnicas e econômicas.
                            </p>

                            <div className="space-y-10">
                                <div className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-stone-500 uppercase tracking-[0.2em] mb-1">Ligue agora</p>
                                        <p className="text-xl font-bold">+55 (11) 99999-9999</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-stone-500 uppercase tracking-[0.2em] mb-1">E-mail</p>
                                        <p className="text-xl font-bold">contato@raoengenharia.com.br</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-stone-50 p-12 lg:p-20">
                            <form className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">Seu Nome Completo</label>
                                    <input type="text" className="w-full bg-transparent border-b-2 border-stone-200 py-3 focus:outline-none focus:border-brand-accent transition-colors text-brand-primary font-bold text-lg" placeholder="Ex: João da Silva" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">E-mail Corporativo</label>
                                    <input type="email" className="w-full bg-transparent border-b-2 border-stone-200 py-3 focus:outline-none focus:border-brand-accent transition-colors text-brand-primary font-bold text-lg" placeholder="joao@empresa.com.br" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">Tipo de Serviço</label>
                                    <select className="w-full bg-transparent border-b-2 border-stone-200 py-3 focus:outline-none focus:border-brand-accent transition-colors text-brand-primary font-bold text-lg appearance-none cursor-pointer">
                                        <option>Análise Técnica</option>
                                        <option>Orçamento de Obra</option>
                                        <option>Consultoria</option>
                                        <option>Outros</option>
                                    </select>
                                </div>

                                <button className="w-full py-5 bg-brand-primary text-white font-black rounded-2xl hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-4 shadow-xl shadow-brand-primary/20 group">
                                    ENVIAR SOLICITAÇÃO
                                    <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
