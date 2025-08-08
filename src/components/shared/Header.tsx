import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigationItems = [{
    label: "Universidad de IA",
    href: "/universidad"
  }, {
    label: "Artículos",
    href: "/articulos"
  }, {
    label: "Guías",
    href: "/guias"
  }, {
    label: "Herramientas",
    href: "/herramientas"
  }, {
    label: "Cursos",
    href: "#"
  }, {
    label: "Talleres",
    href: "/talleres"
  }, {
    label: "Anunciar",
    href: "#"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-gray-200 bg-white shadow-md' : 'border-b border-slate-800 bg-neutral-900'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`w-8 h-8 ${isScrolled ? 'bg-neutral-900' : 'bg-white'} rounded flex items-center justify-center transition-colors duration-300`}>
              <span className={`${isScrolled ? 'text-white' : 'text-slate-900'} font-bold text-sm transition-colors duration-300`}>TR</span>
            </div>
            <span className={`${isScrolled ? 'text-neutral-900' : 'text-white'} font-semibold transition-colors duration-300`}>The Rundown</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map(item => <Link key={item.href} to={item.href} className={`text-sm transition-colors duration-300 ${location.pathname === item.href ? "text-purple-400" : isScrolled ? "text-slate-600 hover:text-neutral-900" : "text-slate-300 hover:text-white"}`}>
                {item.label}
              </Link>)}
          </nav>

          {/* Login Button */}
          <Button variant="outline" size="sm" className={`transition-colors duration-300 ${isScrolled ? 'border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-neutral-900' : 'border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
            Inicio de sesión de la Universidad →
          </Button>
        </div>
      </div>
    </header>;
}