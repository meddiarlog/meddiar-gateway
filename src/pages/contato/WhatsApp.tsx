import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppPage = () => {
  const phoneNumber = "557521370024";
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da Meddiar Logística."
  );

  return (
    <Layout>
      {/* Hero com imagem de fundo */}
      <section className="relative h-[300px] md:h-[350px] flex items-center">
        {/* Background Image - celular com apps de mensagem */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Atendimento via WhatsApp
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Fale diretamente com nossa equipe
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-24 h-24 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-8">
              <MessageCircle size={48} className="text-white" fill="white" />
            </div>

            <h2 className="text-3xl font-display font-bold mb-4">
              Atendimento via WhatsApp
            </h2>

            <p className="text-muted-foreground mb-8">
              Clique no botão abaixo para iniciar uma conversa com nossa equipe.
              Estamos disponíveis para tirar suas dúvidas, fornecer cotações e
              muito mais.
            </p>

            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5C] text-white text-lg px-8"
              asChild
            >
              <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" size={24} />
                Iniciar Conversa
              </a>
            </Button>

            <p className="mt-6 text-sm text-muted-foreground">
              Número: <strong>(75) 2137-0024</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-display font-bold mb-4">
              Horário de Atendimento
            </h3>
            <p className="text-muted-foreground">
              Segunda a Sexta: 08h às 18h
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Fora do horário comercial, deixe sua mensagem que responderemos
              assim que possível.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatsAppPage;
