import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, FileText, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Área do Cliente",
    description:
      "Acesse sua área exclusiva para rastrear entregas, consultar documentos e muito mais.",
    href: "/auth",
    external: true,
  },
  {
    icon: FileText,
    title: "Cotação de Frete",
    description:
      "Solicite uma cotação personalizada para suas necessidades de transporte.",
    href: "/servicos/cotacao",
    external: false,
  },
  {
    icon: Truck,
    title: "Transporte de Cargas",
    description:
      "Conheça nossos serviços de transporte rodoviário com cobertura nacional.",
    href: "/quem-somos/perfil-de-carga",
    external: false,
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Nossos Serviços</h2>
          <p className="section-subtitle mx-auto">
            Oferecemos soluções logísticas completas para atender às demandas do
            seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 border border-border card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              {service.external ? (
                <Button variant="outline" className="group/btn" asChild>
                  <a href={service.href} target="_blank" rel="noopener noreferrer">
                    Acessar
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </a>
                </Button>
              ) : (
                <Button variant="outline" className="group/btn" asChild>
                  <Link to={service.href}>
                    Saiba mais
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
