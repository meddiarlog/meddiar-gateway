import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Eye, EyeOff, Truck, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo-meddiar.jpeg";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

const resetSchema = z.object({
  email: z.string().email("E-mail inválido"),
});

type LoginFormData = z.infer<typeof loginSchema>;
type ResetFormData = z.infer<typeof resetSchema>;

const Auth = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "reset">("login");

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const resetForm = useForm<ResetFormData>({
    resolver: zodResolver(resetSchema),
    defaultValues: { email: "" },
  });

  const onLogin = async (data: LoginFormData) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;

      toast.success("Login realizado com sucesso!");
      navigate("/cliente");
    } catch (error: any) {
      toast.error(error.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  const onResetPassword = async (data: ResetFormData) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/auth/reset`,
      });

      if (error) throw error;

      toast.success("E-mail de recuperação enviado!");
      setMode("login");
    } catch (error: any) {
      toast.error(error.message || "Erro ao enviar e-mail");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Background Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-secondary">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <Truck size={64} className="mb-6 text-primary" />
          <h1 className="text-4xl font-display font-bold mb-4">
            Área do Cliente
          </h1>
          <p className="text-xl text-white/80 max-w-md">
            Acesse sua conta para rastrear cargas, consultar documentos e
            gerenciar suas operações logísticas.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Voltar ao site
            </Link>
            <img
              src={logo}
              alt="Meddiar Logística"
              className="h-16 w-auto mb-6"
            />
            <h2 className="text-3xl font-display font-bold mb-2">
              {mode === "login" ? "Autenticação" : "Recuperar Senha"}
            </h2>
            <p className="text-muted-foreground">
              {mode === "login"
                ? "Entre com suas credenciais para acessar"
                : "Informe seu e-mail para recuperar sua senha"}
            </p>
          </div>

          {mode === "login" ? (
            <Form {...loginForm}>
              <form
                onSubmit={loginForm.handleSubmit(onLogin)}
                className="space-y-6"
              >
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Usuário (E-mail)</FormLabel>
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

                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
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
                  {loading ? "Entrando..." : "Acessar"}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setMode("reset")}
                    className="text-sm text-primary hover:underline"
                  >
                    Esqueceu a senha?
                  </button>
                </div>
              </form>
            </Form>
          ) : (
            <Form {...resetForm}>
              <form
                onSubmit={resetForm.handleSubmit(onResetPassword)}
                className="space-y-6"
              >
                <FormField
                  control={resetForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail cadastrado</FormLabel>
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

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar E-mail de Recuperação"}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="text-sm text-primary hover:underline"
                  >
                    Voltar ao login
                  </button>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
