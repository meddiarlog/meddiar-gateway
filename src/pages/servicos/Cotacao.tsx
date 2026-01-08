import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Send, CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().email("E-mail inválido").max(255),
  phone: z.string().min(10, "Telefone inválido").max(20),
  company: z.string().optional(),
  origin_city: z.string().min(2, "Cidade de origem é obrigatória").max(100),
  destination_city: z.string().min(2, "Cidade de destino é obrigatória").max(100),
  cargo_type: z.string().min(1, "Digite o tipo de carga"),
  cargo_weight: z.string().optional(),
  message: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const Cotacao = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      origin_city: "",
      destination_city: "",
      cargo_type: "",
      cargo_weight: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const { error } = await supabase.from("quote_requests").insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company || null,
        origin_city: data.origin_city,
        destination_city: data.destination_city,
        cargo_type: data.cargo_type,
        cargo_weight: data.cargo_weight || null,
        message: data.message || null,
      });

      if (error) throw error;

      setSubmitted(true);
      toast.success("Cotação enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar cotação:", error);
      toast.error("Erro ao enviar cotação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-20 bg-background min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={40} />
              </div>
              <h1 className="text-3xl font-display font-bold mb-4">
                Cotação Enviada!
              </h1>
              <p className="text-muted-foreground mb-8">
                Recebemos sua solicitação de cotação. Nossa equipe entrará em
                contato em breve através do e-mail ou telefone informado.
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  form.reset();
                }}
              >
                Enviar nova cotação
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

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
              Cotação de Frete
            </h1>
            <p className="text-xl text-white/80">
              Preencha o formulário abaixo e receba uma cotação personalizada
              para sua necessidade de transporte.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 bg-card p-8 rounded-2xl border border-border"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome completo *</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone *</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome da empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="origin_city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade de origem *</FormLabel>
                        <FormControl>
                          <Input placeholder="Cidade - UF" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="destination_city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade de destino *</FormLabel>
                        <FormControl>
                          <Input placeholder="Cidade - UF" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="cargo_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de carga *</FormLabel>
                        <FormControl>
                          <Input placeholder="Digite o tipo de carga" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cargo_weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Peso estimado</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 500 kg" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Informações adicionais</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Detalhes sobre a carga, dimensões, urgência, etc."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={loading}
                >
                  {loading ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Cotação
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cotacao;
