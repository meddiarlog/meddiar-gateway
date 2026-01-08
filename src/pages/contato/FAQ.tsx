import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { supabase } from "@/integrations/supabase/client";
import { HelpCircle } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const defaultFAQs = [
  {
    id: "1",
    question: "Como solicitar uma cotação de frete?",
    answer:
      "Você pode solicitar uma cotação através do nosso formulário online na página 'Cotação de Frete' ou entrando em contato pelo telefone (75) 2137-0024.",
  },
  {
    id: "2",
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo de entrega varia de acordo com a origem, destino e tipo de carga. Após a coleta, informamos o prazo estimado com base na rota e condições logísticas.",
  },
  {
    id: "3",
    question: "Como rastrear minha carga?",
    answer:
      "Clientes cadastrados podem rastrear suas cargas através da Área do Cliente, onde é possível acompanhar em tempo real o status da entrega.",
  },
  {
    id: "4",
    question: "Quais tipos de carga vocês transportam?",
    answer:
      "Transportamos diversos tipos de cargas, incluindo produtos de varejo, insumos industriais, produtos agrícolas, farmacêuticos, materiais de construção e carga geral.",
  },
  {
    id: "5",
    question: "Como emitir a segunda via de boleto?",
    answer:
      "Você pode emitir a segunda via de boletos acessando a Área do Cliente com suas credenciais. Se ainda não possui acesso, entre em contato conosco.",
  },
  {
    id: "6",
    question: "Qual a cobertura de atendimento?",
    answer:
      "Atendemos em todo o território nacional, com foco especial na região Nordeste. Entre em contato para verificar a disponibilidade para sua rota.",
  },
];

const FAQ = () => {
  const [faqs, setFaqs] = useState<FAQ[]>(defaultFAQs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      const { data, error } = await supabase
        .from("faqs")
        .select("id, question, answer")
        .eq("active", true)
        .order("order_index", { ascending: true });

      if (!error && data && data.length > 0) {
        setFaqs(data);
      }
      setLoading(false);
    };

    fetchFAQs();
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-secondary/95 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-white/80">
              Encontre respostas para as dúvidas mais comuns sobre nossos
              serviços.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-muted h-16 rounded-lg"
                  />
                ))}
              </div>
            ) : (
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="bg-card rounded-lg border border-border px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <HelpCircle
              size={48}
              className="text-primary mx-auto mb-4"
            />
            <h3 className="text-2xl font-display font-bold mb-4">
              Não encontrou o que procurava?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco e nossa equipe terá prazer em ajudá-lo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+557521370024"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Ligar: (75) 2137-0024
              </a>
              <a
                href="mailto:meddiarlog@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
