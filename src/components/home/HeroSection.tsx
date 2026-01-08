import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-secondary via-secondary to-secondary/95">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Transporte de cargas com excelência
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Sua carga em
              <span className="text-primary block">boas mãos</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              Soluções logísticas completas para o seu negócio. Transporte
              seguro, pontual e eficiente em todo o território nacional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8"
                asChild
              >
                <Link to="/servicos/cotacao">
                  Solicitar Cotação
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8"
                asChild
              >
                <Link to="/quem-somos/apresentacao">Conheça a Meddiar</Link>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-6 animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Truck className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-lg">
                    Frota Moderna
                  </h3>
                  <p className="text-white/70 mt-1">
                    Veículos equipados com rastreamento e monitoramento em tempo
                    real
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Shield className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-lg">
                    Segurança Total
                  </h3>
                  <p className="text-white/70 mt-1">
                    Sua carga protegida com seguro completo e equipe treinada
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Clock className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-lg">
                    Pontualidade
                  </h3>
                  <p className="text-white/70 mt-1">
                    Compromisso com prazos e entregas dentro do cronograma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
