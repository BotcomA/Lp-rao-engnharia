import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INÍCIO", href: "/" },
    { name: "A RAO", href: "/a-rao" },
    { name: "SERVIÇOS", href: "/servicos" },
    { name: "SETORES", href: "/setores" },
    { name: "RECURSOS", href: "/recursos" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white border-b border-stone-100 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between h-24 items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={isScrolled ? "/img/logo-rao-preta.png" : "/img/logo-rao-branca.png"}
              alt="RAO Engenharia"
              className="h-14 lg:h-16 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-base font-bold tracking-wider transition-colors hover:text-brand-accent ${isActive
                      ? "text-brand-accent"
                      : isScrolled
                        ? "text-brand-primary/80"
                        : "text-white/90"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              to="/solicitar-analise"
              className={`px-8 py-3 border-2 transition-all text-sm font-bold rounded-full uppercase tracking-widest ${isScrolled
                  ? "border-brand-accent text-brand-primary hover:bg-brand-accent hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-brand-primary"
                }`}
            >
              SOLICITAR ANÁLISE TÉCNICA
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isScrolled ? "text-brand-primary" : "text-white"}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-white border-b border-stone-200 px-6 py-8 space-y-6 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`block text-lg font-bold tracking-wider hover:text-brand-accent ${location.pathname === link.href
                  ? "text-brand-accent"
                  : "text-brand-primary"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/solicitar-analise"
            className="block w-full text-center px-6 py-4 border-2 border-brand-accent text-brand-primary text-base font-bold rounded-full hover:bg-brand-accent hover:text-white transition-all uppercase tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            SOLICITAR ANÁLISE TÉCNICA
          </Link>
        </motion.div>
      )}
    </nav>
  );
}