import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INÍCIO", href: "/", isExternal: false },
    { name: "A RAO", href: "/a-rao", isExternal: false },
    { name: "SERVIÇOS", href: "/servicos", isExternal: false },
    { name: "SETORES", href: "/setores", isExternal: false },
    { name: "RECURSOS", href: "/recursos", isExternal: false },
  ];

  const isTransparent = transparent && !isScrolled && !isMenuOpen;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isTransparent 
        ? "bg-transparent border-transparent" 
        : "bg-white border-b border-stone-100 shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex gap-1">
              <div className={`w-1.5 h-10 transition-colors ${isTransparent ? 'bg-white' : 'bg-brand-primary'}`}></div>
              <div className={`w-1.5 h-10 transition-colors ${isTransparent ? 'bg-white' : 'bg-brand-primary'}`}></div>
              <div className={`w-1.5 h-10 transition-colors ${isTransparent ? 'bg-white' : 'bg-brand-primary'}`}></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-4xl font-black tracking-tighter transition-colors ${isTransparent ? 'text-white' : 'text-brand-primary'}`}>RAO</span>
              <span className={`text-[10px] font-bold tracking-[0.2em] transition-colors mt-0.5 ${isTransparent ? 'text-white' : 'text-brand-primary'}`}>ENGENHARIA</span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return link.isExternal ? (
                <a 
                  key={link.name}
                  href={link.href} 
                  className={`text-sm font-bold tracking-wider transition-colors hover:text-brand-accent ${
                    isTransparent ? 'text-white/90' : 'text-brand-primary/80'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className={`text-sm font-bold tracking-wider transition-colors hover:text-brand-accent ${
                    isActive 
                      ? 'text-brand-accent' 
                      : isTransparent ? 'text-white/90' : 'text-brand-primary/80'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              to="/solicitar-analise"
              className={`px-6 py-2 border-2 transition-all text-xs font-bold rounded-full uppercase tracking-widest ${
                isTransparent 
                  ? 'border-white text-white hover:bg-white hover:text-brand-primary' 
                  : 'border-brand-accent text-brand-primary hover:bg-brand-accent hover:text-white'
              }`}
            >
              SOLICITAR ANÁLISE TÉCNICA
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 transition-colors ${isTransparent ? 'text-white' : 'text-brand-primary'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-white border-b border-stone-200 px-4 py-8 space-y-6 shadow-xl"
        >
          {navLinks.map((link) => (
            link.isExternal ? (
              <a 
                key={link.name}
                href={link.href} 
                className="block text-lg font-bold tracking-wider text-brand-primary hover:text-brand-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                to={link.href} 
                className={`block text-lg font-bold tracking-wider hover:text-brand-accent ${
                  location.pathname === link.href ? 'text-brand-accent' : 'text-brand-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link 
            to="/solicitar-analise"
            className="block w-full text-center px-6 py-4 border-2 border-brand-accent text-brand-primary text-sm font-bold rounded-full hover:bg-brand-accent hover:text-white transition-all uppercase tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            SOLICITAR ANÁLISE TÉCNICA
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
