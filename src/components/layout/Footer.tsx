import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Truck } from "lucide-react";
import logo from "@/assets/logo-meddiar.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Meddiar Logística"
              className="h-16 w-auto object-contain bg-white p-2 rounded"
            />
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Especializada em transporte de cargas, a Meddiar Logística oferece
              soluções completas e eficientes para atender às suas necessidades
              logísticas com segurança e pontualidade.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:meddiarlog@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  meddiarlog@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+557521370024"
                  className="hover:text-primary transition-colors"
                >
                  (75) 2137-0024
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Serrinha – BA</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold">Serviços</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Truck size={16} className="text-primary" />
                <span>Transporte de Cargas</span>
              </li>
              <li>
                <Link
                  to="/servicos/cotacao"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Cotação de Frete
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/area-do-cliente"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Área do Cliente
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/boletos"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Segunda Via de Boletos
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/quem-somos/apresentacao"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/quem-somos/unidade"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Nossa Unidade
                </Link>
              </li>
              <li>
                <Link
                  to="/contato/fale-conosco"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link
                  to="/contato/faq"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/70">
            © {new Date().getFullYear()} Meddiar Logística. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
