import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Unidade = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-secondary/95 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Quem Somos
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Nossa Unidade
            </h1>
            <p className="text-xl text-white/80">
              Conheça nossa estrutura física e localização estratégica.
            </p>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Localização Estratégica
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nossa unidade está estrategicamente localizada em Serrinha,
                  Bahia, proporcionando fácil acesso às principais rodovias e
                  centros de distribuição da região Nordeste.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">Serrinha – BA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(75) 2137-0024</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-muted-foreground">meddiarlog@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 08h às 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl aspect-square flex items-center justify-center border border-border">
              <div className="text-center p-8">
                <MapPin size={64} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-lg font-medium text-muted-foreground">
                  Mapa da Localização
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Serrinha, Bahia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Estrutura Física
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">
                +
              </div>
              <h4 className="font-semibold mb-2">Área de Armazenagem</h4>
              <p className="text-sm text-muted-foreground">
                Espaço amplo para recebimento e expedição de cargas
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">
                +
              </div>
              <h4 className="font-semibold mb-2">Pátio de Veículos</h4>
              <p className="text-sm text-muted-foreground">
                Área dedicada para nossa frota de caminhões
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">
                +
              </div>
              <h4 className="font-semibold mb-2">Escritório Administrativo</h4>
              <p className="text-sm text-muted-foreground">
                Atendimento e gestão operacional
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Unidade;
