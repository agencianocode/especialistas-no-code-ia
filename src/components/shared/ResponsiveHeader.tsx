import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function ResponsiveHeader() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: "Universidad de IA", href: "/universidad" },
    { label: "Artículos", href: "/articulos" },
    { label: "Guías", href: "/guias" },
    { label: "Herramientas", href: "/herramientas" },
    { label: "Cursos", href: "#" },
    { label: "Talleres", href: "/talleres" },
    { label: "Anunciar", href: "#" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800' 
          : 'bg-neutral-900'
      }`}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            aria-label="The Rundown - Inicio"
          >
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">TR</span>
            </div>
            <span className="text-white font-semibold hidden sm:block">The Rundown</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation">
            {navigationItems.map(item => (
              <Link 
                key={item.href} 
                to={item.href} 
                className={`text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-2 py-1 ${
                  location.pathname === item.href 
                    ? "text-primary font-medium" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200"
            >
              Inicio de sesión
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:bg-slate-800"
                  aria-label="Abrir menú de navegación"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-80 bg-neutral-900 border-neutral-800 text-white"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                        <span className="text-slate-900 font-bold text-sm">TR</span>
                      </div>
                      <span className="text-white font-semibold">The Rundown</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:bg-slate-800"
                      aria-label="Cerrar menú"
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 py-6" role="navigation">
                    <div className="space-y-2">
                      {navigationItems.map(item => (
                        <Link 
                          key={item.href} 
                          to={item.href} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-base transition-colors ${
                            location.pathname === item.href 
                              ? "text-primary bg-primary/10 font-medium" 
                              : "text-slate-300 hover:text-white hover:bg-slate-800"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile Login Button */}
                  <div className="pt-6 border-t border-neutral-800">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Inicio de sesión
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}