import { Instagram, Facebook, Linkedin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-16 bg-[#141414] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Location */}
                <p className="text-stone-300 text-lg mb-10 font-medium text-center">
                    Cianorte – PR | Noroeste do Paraná - America do Sul.
                </p>

                {/* Logo + Rotary */}
                <div className="grid md:grid-cols-2 items-center gap-10 mb-10">
                    
                    {/* Logo RAO */}
                    <div className="flex justify-center md:justify-end">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-16 bg-white"></div>
                                <div className="w-2.5 h-16 bg-white"></div>
                                <div className="w-2.5 h-16 bg-white"></div>
                            </div>

                            <div className="flex flex-col items-start leading-none">
                                <span className="text-7xl font-black tracking-tighter text-white">
                                    RAO
                                </span>
                                <span className="text-2xl font-bold tracking-[0.3em] text-white -mt-1">
                                    ENGENHARIA
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Selo Rotary */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="/rotary.png"
                            alt="Selo de Responsabilidade Social Rotary"
                            className="w-[260px] md:w-[300px] object-contain"
                        />
                    </div>
                </div>

                {/* Contact + Social */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                    
                    <div className="flex items-center gap-2 text-stone-300">
                        <Phone size={20} className="fill-stone-300 text-stone-300" />
                        <span className="text-xl font-medium">
                            (44) 98821-6169
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#" className="text-white hover:text-brand-accent transition-colors">
                            <Instagram size={24} />
                        </a>

                        <a href="#" className="text-white hover:text-brand-accent transition-colors">
                            <Facebook size={24} />
                        </a>

                        <a href="#" className="text-white hover:text-brand-accent transition-colors">
                            <Linkedin size={24} />
                        </a>

                        <a href="#" className="text-white hover:text-brand-accent transition-colors">
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-stone-700 mb-8"></div>

                {/* Email */}
                <p className="text-2xl font-medium text-white mb-8 text-center">
                    comercial@raoengenharia.com.br
                </p>

                {/* Copyright */}
                <div className="space-y-2 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        © RAO ENGENHARIA – A INDUSTRIA DAS INDUSTRIAS.
                    </p>

                    <p className="text-[10px] text-stone-500">
                        Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}