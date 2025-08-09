import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, User, LogOut, Settings, Crown, Trophy } from "lucide-react";
import { useAuth } from "@/hooks/useSupabase";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function ResponsiveHeader() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

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

  const handleSignOut = async () => {
    await signOut();
  };

  const getUserInitials = (fullName: string | null) => {
    if (!fullName) return "U";
    return fullName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.avatar_url} alt={user?.full_name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {getUserInitials(user?.full_name)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.full_name || user?.email}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">
                <Crown className="w-3 h-3 mr-1" />
                Nivel {user?.level || 1}
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Trophy className="w-3 h-3 mr-1" />
                {user?.experience || 0} XP
              </Badge>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/universidad/dashboard" className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Mi Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/universidad/perfil" className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Configuración</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Cerrar sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const LoginButton = () => (
    <Button 
      variant="outline" 
      size="sm" 
      className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200"
      asChild
    >
      <Link to="/login">
        Inicio de sesión
        <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </Button>
  );

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

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center">
            {loading ? (
              <div className="w-8 h-8 rounded-full bg-slate-700 animate-pulse" />
            ) : user ? (
              <UserMenu />
            ) : (
              <LoginButton />
            )}
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

                  {/* Mobile Auth Section */}
                  <div className="pt-6 border-t border-neutral-800">
                    {loading ? (
                      <div className="w-full h-10 rounded-lg bg-slate-700 animate-pulse" />
                    ) : user ? (
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-slate-800">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user?.avatar_url} alt={user?.full_name} />
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                {getUserInitials(user?.full_name)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-white truncate">
                                {user?.full_name || user?.email}
                              </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                <Crown className="w-3 h-3 mr-1" />
                                Nivel {user?.level || 1}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <Trophy className="w-3 h-3 mr-1" />
                                {user?.experience || 0} XP
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Link 
                            to="/universidad/dashboard" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-lg text-base text-slate-300 hover:text-white hover:bg-slate-800"
                          >
                            <User className="w-4 h-4 inline mr-2" />
                            Mi Dashboard
                          </Link>
                          <Link 
                            to="/universidad/perfil" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-lg text-base text-slate-300 hover:text-white hover:bg-slate-800"
                          >
                            <Settings className="w-4 h-4 inline mr-2" />
                            Configuración
                          </Link>
                          <Button 
                            variant="ghost" 
                            onClick={() => {
                              handleSignOut();
                              setIsMobileMenuOpen(false);
                            }}
                            className="w-full justify-start px-4 py-3 text-base text-red-400 hover:text-red-300 hover:bg-red-900/20"
                          >
                            <LogOut className="w-4 h-4 mr-2" />
                            Cerrar sesión
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                        asChild
                      >
                        <Link to="/login">
                          Inicio de sesión
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    )}
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