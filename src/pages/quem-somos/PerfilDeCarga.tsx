import Layout from "@/components/layout/Layout";
import { Package, ShoppingBag, Factory, Wheat, Pill, Building2 } from "lucide-react";

const cargoTypes = [
  {
    icon: ShoppingBag,
    title: "Produtos de Varejo",
    description: "Mercadorias para comércio, eletrodomésticos e produtos diversos",
  },
  {
    icon: Factory,
    title: "Insumos Industriais",
    description: "Matérias-primas e componentes para indústrias",
  },
  {
    icon: Wheat,
    title: "Produtos Agrícolas",
    description: "Grãos, fertilizantes e insumos do agronegócio",
  },
  {
    icon: Pill,
    title: "Farmacêuticos",
    description: "Medicamentos e produtos hospitalares com cuidado especial",
  },
  {
    icon: Package,
    title: "Carga Geral",
    description: "Carga geral dedicada",
  },
  {
    icon: Building2,
    title: "Materiais de Construção",
    description: "Produtos para construção civil e acabamento",
  },
];

const segments = [
  "Varejo e Atacado",
  "Indústria",
  "Agronegócio",
  "Saúde e Farmacêutico",
  "Construção Civil",
  "E-commerce",
];

const PerfilDeCarga = () => {
  return (
    <Layout>
      {/* Hero com imagem de fundo */}
      <section className="relative h-[400px] md:h-[500px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50" />
        
        {/* Conteúdo */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Perfil de Carga
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Soluções especializadas para diversos tipos de cargas e segmentos
            </p>
          </div>
        </div>
      </section>

      {/* Cargo Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Tipos de Cargas
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Estamos preparados para transportar diversos tipos de mercadorias com
            segurança e eficiência.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cargoTypes.map((cargo, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <cargo.icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">
                      {cargo.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {cargo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Segmentos Atendidos
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Atendemos empresas de diversos setores da economia, oferecendo
            soluções personalizadas para cada necessidade.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="bg-card px-6 py-3 rounded-full border border-border font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {segment}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Precisa transportar sua carga?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Entre em contato conosco e solicite uma cotação personalizada para
            suas necessidades de transporte.
          </p>
          <a
            href="/servicos/cotacao"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Solicitar Cotação
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default PerfilDeCarga;
