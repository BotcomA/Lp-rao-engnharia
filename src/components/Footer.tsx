import { Instagram, Facebook, Linkedin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 bg-[#111010] text-white relative">
            <div className="max-w-6xl mx-auto px-4">

                {/* Localização */}
                <p className="text-center text-stone-300">
                    Cianorte – PR | Noroeste do Paraná - América do Sul.
                </p>

                {/* BLOCO PRINCIPAL */}
                <div className="relative flex flex-col items-center">

                    {/* LOGO CENTRAL */}
                    <img
                        src="/img/logo-rao-branca.png"
                        alt="RAO Engenharia"
                        className="h-40 md:h-48 lg:h-56 object-contain"
                    />

                    {/* SELO (posição absoluta à direita) */}
                    <img
                        src="/rotary.png"
                        alt="Selo Rotary"
                        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[320px]"
                    />

                    {/* CONTATO + REDES */}
                    <div className="flex items-center gap-6 mt-8 text-stone-300">

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

                {/* LINHA */}
                <div className="w-full h-px bg-stone-600 my-12"></div>

                {/* EMAIL */}
                <p className="text-center text-2xl mb-6">
                    comercial@raoengenharia.com.br
                </p>

                {/* RODAPÉ */}
                <div className="text-center space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-white-400">
                        © RAO ENGENHARIA – A INDÚSTRIA DAS INDÚSTRIAS.
                    </p>
                    <p className="text-[10px] text-white-500">
                        Todos os direitos reservados.
                    </p>
                </div>

            </div>
        </footer>
    );
}