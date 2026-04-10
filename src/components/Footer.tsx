import { Instagram, Facebook, Linkedin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-16 md:py-20 bg-[#111010] text-white relative">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-center text-stone-300">
                    Cianorte - PR | Noroeste do Parana - America do Sul.
                </p>

                <div className="relative flex flex-col items-center">
                    <img
                        src="/img/logo-rao-branca.png"
                        alt="RAO Engenharia"
                        className="h-32 sm:h-40 md:h-48 lg:h-56 object-contain"
                    />

                    <img
                        src="/selo_rotary_prata.png"
                        alt="Selo Rotary"
                        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[320px]"
                    />

                    <img
                        src="/rotary.png"
                        alt="Selo Rotary"
                        className="block lg:hidden w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] h-auto object-contain mt-4 sm:mt-6"
                    />

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-stone-300">
                        <div className="flex items-center gap-2">
                            <Phone size={18} />
                            <span>(44) 98821-6169</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Instagram size={20} />
                            <Facebook size={20} />
                            <Linkedin size={20} />
                            <svg
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                            >
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-stone-600 my-10 md:my-12"></div>

                <p className="text-center text-lg sm:text-2xl mb-6 break-all sm:break-normal">
                    comercial@raoengenharia.com.br
                </p>

                <div className="text-center space-y-1 flex flex-col items-center">
                    <p className="text-[10px] uppercase tracking-widest text-white-400">
                        © RAO ENGENHARIA - A INDUSTRIA DAS INDUSTRIAS.
                    </p>
                    <p className="text-[10px] text-white-500">
                        Todos os direitos reservados.
                    </p>
                    <p className="text-[10px] sm:text-sm text-stone-400 text-center pt-5 pb-12">
                        Desenvolvido por{" "}
                        <a
                            href="https://kopla.com.br"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-bold text-white hover:text-brand-accent transition-colors"
                        >
                            Kopla Sistemas
                            <ArrowUpRight size={12} />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
