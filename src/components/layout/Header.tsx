import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/logo-meddiar.jpeg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const quemSomosItems = [
    { title: "Apresentação", href: "/quem-somos/apresentacao" },
    { title: "Unidade", href: "/quem-somos/unidade" },
    { title: "Perfil de Carga", href: "/quem-somos/perfil-de-carga" },
  ];

  const servicosItems = [
    { title: "Área do Cliente", href: "/servicos/area-do-cliente" },
    { title: "Cotação de Frete", href: "/servicos/cotacao" },
    { title: "Segunda Via de Boletos", href: "/servicos/boletos" },
    { title: "Serviço de Munk", href: "/servicos/munk" },
  ];

  const contatoItems = [
    { title: "Fale Conosco", href: "/contato/fale-conosco" },
    { title: "WhatsApp", href: "/contato/whatsapp" },
    { title: "Perguntas Frequentes", href: "/contato/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Meddiar Logística"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Link Início sem dropdown */}
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Início
            </Link>

            {/* NavigationMenu individual para Quem Somos */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Quem Somos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2">
                      {quemSomosItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* NavigationMenu individual para Serviços */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Serviços
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-52 gap-1 p-2">
                      {servicosItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* NavigationMenu individual para Contato */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Contato
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-52 gap-1 p-2">
                      {contatoItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="/auth" target="_blank" rel="noopener noreferrer">
                Área do Cliente
              </a>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/servicos/cotacao">Cotação de Frete</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </Link>

              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Quem Somos
                </p>
                {quemSomosItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-2 py-1.5 text-sm hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Serviços
                </p>
                {servicosItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-2 py-1.5 text-sm hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Contato
                </p>
                {contatoItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-2 py-1.5 text-sm hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="px-4 pt-4 flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary"
                  asChild
                >
                  <a href="/auth" target="_blank" rel="noopener noreferrer">
                    Área do Cliente
                  </a>
                </Button>
                <Button className="w-full bg-primary" asChild>
                  <Link
                    to="/servicos/cotacao"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cotação de Frete
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
