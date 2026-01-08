import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  FileSearch, 
  BarChart3, 
  Bell, 
  FileText, 
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Rastreamento de Cargas",
    description: "Acompanhe em tempo real a localização das suas entregas",
  },
  {
    icon: FileSearch,
    title: "Consulta de Documentos",
    description: "Acesse notas fiscais, conhecimentos de transporte e comprovantes",
  },
  {
    icon: BarChart3,
    title: "Relatórios e Histórico",
    description: "Visualize o histórico completo de todas as suas operações",
  },
  {
    icon: Bell,
    title: "Notificações",
    description: "Receba alertas sobre o status das suas entregas",
  },
  {
    icon: FileText,
    title: "Segunda Via de Boletos",
    description: "Emita segunda via de boletos de forma rápida e prática",
  },
];

const AreaDoCliente = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-secondary/95 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Serviços
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Área do Cliente
            </h1>
            <p className="text-xl text-white/80">
              Acesse recursos exclusivos para acompanhar suas cargas e gerenciar
              seus documentos.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Recursos Disponíveis
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Na área do cliente você tem acesso a diversas ferramentas para
              facilitar o acompanhamento das suas operações logísticas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border card-hover"
              >
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  <feature.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/auth" target="_blank" rel="noopener noreferrer">
                Acessar Área do Cliente
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-display font-bold mb-4">
                Primeiro acesso?
              </h2>
              <p className="text-muted-foreground mb-6">
                Se você é cliente Meddiar Logística e ainda não possui acesso à
                área do cliente, entre em contato conosco para solicitar suas
                credenciais de acesso.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contato/fale-conosco">
                  Solicitar Acesso
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AreaDoCliente;
