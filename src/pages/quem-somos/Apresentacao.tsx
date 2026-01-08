import Layout from "@/components/layout/Layout";
import { Target, Eye, Award, History } from "lucide-react";

const Apresentacao = () => {
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
              Apresentação
            </h1>
            <p className="text-xl text-white/80">
              Conheça a história e os valores que guiam a Meddiar Logística.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <History className="text-primary" size={24} />
                </div>
                <h2 className="text-3xl font-display font-bold">Nossa História</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Meddiar Logística nasceu com o propósito de oferecer soluções
                  de transporte de cargas com excelência e compromisso. Desde sua
                  fundação, a empresa tem se dedicado a construir uma reputação
                  sólida baseada na confiança e qualidade dos serviços prestados.
                </p>
                <p>
                  Com sede em Serrinha, Bahia, expandimos nossa atuação para
                  atender clientes em todo o território nacional, sempre mantendo
                  nosso compromisso com a pontualidade e segurança das cargas.
                </p>
                <p>
                  Hoje, a Meddiar Logística é reconhecida pela eficiência
                  operacional, investimento constante em tecnologia e
                  desenvolvimento de sua equipe, garantindo sempre o melhor
                  atendimento aos nossos parceiros e clientes.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p className="text-lg font-medium">Imagem da Empresa</p>
                <p className="text-sm">Foto institucional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border card-hover">
              <div className="p-3 bg-primary/10 rounded-xl inline-block mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer soluções logísticas de transporte de cargas com
                excelência, segurança e pontualidade, contribuindo para o sucesso
                dos nossos clientes e para o desenvolvimento sustentável do setor.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border card-hover">
              <div className="p-3 bg-primary/10 rounded-xl inline-block mb-4">
                <Eye className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência no segmento de transporte de cargas, reconhecida
                pela qualidade dos serviços, inovação tecnológica e compromisso
                com a satisfação dos clientes.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border card-hover">
              <div className="p-3 bg-primary/10 rounded-xl inline-block mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Valores</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Compromisso com o cliente</li>
                <li>• Ética e transparência</li>
                <li>• Segurança em primeiro lugar</li>
                <li>• Inovação contínua</li>
                <li>• Responsabilidade social</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apresentacao;
