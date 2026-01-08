import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white">
            Soluções Logísticas com
            <span className="text-primary block">Excelência</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            Conectamos seu negócio aos melhores caminhos. Transporte seguro, 
            rápido e eficiente em todo o território nacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8"
              asChild
            >
              <Link to="/servicos/cotacao">
                Solicite uma Cotação
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8"
              asChild
            >
              <Link to="/quem-somos/apresentacao">Conheça a Meddiar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
