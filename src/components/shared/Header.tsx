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
  return <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-800 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">TR</span>
            </div>
            <span className="text-white font-semibold">The Rundown</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map(item => <Link key={item.href} to={item.href} className={`text-sm transition-colors ${location.pathname === item.href ? "text-purple-400" : "text-slate-300 hover:text-white"}`}>
                {item.label}
              </Link>)}
          </nav>

          {/* Login Button */}
          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
            Inicio de sesión de la Universidad →
          </Button>
        </div>
      </div>
    </header>;
}