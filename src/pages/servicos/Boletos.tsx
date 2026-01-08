import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, AlertCircle } from "lucide-react";

const Boletos = () => {
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
              Segunda Via de Boletos
            </h1>
            <p className="text-xl text-white/80">
              Acesse o sistema para emitir a segunda via dos seus boletos de
              forma rápida e prática.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-primary" size={40} />
              </div>

              <h2 className="text-2xl font-display font-bold mb-4">
                Emissão de Segunda Via
              </h2>

              <p className="text-muted-foreground mb-8">
                Para emitir a segunda via dos seus boletos, acesse a Área do
                Cliente com suas credenciais de acesso. Lá você poderá
                visualizar todos os boletos pendentes e emitir a segunda via
                quando necessário.
              </p>

              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/auth" target="_blank" rel="noopener noreferrer">
                  Acessar Área do Cliente
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-muted rounded-xl p-6 flex items-start gap-4">
              <AlertCircle className="text-primary flex-shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-semibold mb-2">Precisa de ajuda?</h4>
                <p className="text-sm text-muted-foreground">
                  Se você tiver dificuldades para acessar o sistema ou emitir a
                  segunda via, entre em contato conosco pelo telefone{" "}
                  <strong>(75) 2137-0024</strong> ou pelo e-mail{" "}
                  <strong>meddiarlog@gmail.com</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Boletos;
