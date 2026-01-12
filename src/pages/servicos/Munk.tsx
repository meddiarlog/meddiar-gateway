import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Truck, Shield, Clock, Phone, CheckCircle } from "lucide-react";

const Munk = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Versatilidade",
      description: "Equipamento ideal para cargas de diferentes tamanhos e pesos",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Operação segura com equipe treinada e certificada",
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Rapidez na carga e descarga de materiais",
    },
  ];

  const services = [
    "Transporte de placas de drywall e gesso",
    "Movimentação de materiais de construção",
    "Cargas paletizadas",
    "Equipamentos industriais",
    "Containers e estruturas metálicas",
    "Materiais frágeis com cuidado especial",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Serviço de Munk
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Soluções em transporte com caminhão Munk para cargas especiais
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                O que é o Serviço de Munk?
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                O caminhão Munk é um veículo equipado com guindaste hidráulico articulado, 
                ideal para operações de carga e descarga de materiais pesados e volumosos. 
                É a solução perfeita para transportar placas de drywall, materiais de construção 
                e cargas que necessitam de movimentação especial.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Na Meddiar Logística, oferecemos serviço de Munk com operadores experientes 
                e equipamentos modernos, garantindo segurança e eficiência em todas as operações.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a
                  href="https://wa.me/557521370024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2" size={20} />
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                alt="Caminhão Munk em operação"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">
            Vantagens do Serviço de Munk
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">
              Aplicações do Serviço
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
            Precisa de Serviço de Munk?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento personalizado para sua operação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/servicos/cotacao">Solicitar Cotação</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a
                href="https://wa.me/557521370024"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Munk;
