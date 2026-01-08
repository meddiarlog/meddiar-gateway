import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut, User, FileText, Truck, Home } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo-meddiar.jpeg";

interface Profile {
  full_name: string | null;
  company_name: string | null;
}

const ClienteArea = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name, company_name")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (profileData) {
        setProfile(profileData);
      }
      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logout realizado com sucesso!");
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Meddiar" className="h-12" />
            <div className="hidden sm:block">
              <p className="text-sm text-muted-foreground">Área do Cliente</p>
              <p className="font-semibold">
                {profile?.full_name || profile?.company_name || "Cliente"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <Home size={18} className="mr-2" />
                Ir para o site
              </Link>
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut size={18} className="mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-display font-bold mb-8">
          Bem-vindo, {profile?.full_name?.split(" ")[0] || "Cliente"}!
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-6 border border-border card-hover">
            <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
              <Truck className="text-primary" size={28} />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">
              Rastrear Cargas
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Acompanhe em tempo real o status das suas entregas.
            </p>
            <Button variant="outline" className="w-full" disabled>
              Em breve
            </Button>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border card-hover">
            <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
              <FileText className="text-primary" size={28} />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">
              Segunda Via de Boletos
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Emita a segunda via dos seus boletos.
            </p>
            <Button variant="outline" className="w-full" disabled>
              Em breve
            </Button>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border card-hover">
            <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
              <User className="text-primary" size={28} />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">Meu Perfil</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Visualize e atualize seus dados cadastrais.
            </p>
            <Button variant="outline" className="w-full" disabled>
              Em breve
            </Button>
          </div>
        </div>

        <div className="mt-12 bg-card rounded-xl p-8 border border-border">
          <h2 className="text-xl font-display font-bold mb-4">
            Precisa de ajuda?
          </h2>
          <p className="text-muted-foreground mb-4">
            Entre em contato com nossa equipe de atendimento:
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+557521370024"
              className="text-primary hover:underline"
            >
              📞 (75) 2137-0024
            </a>
            <a
              href="mailto:meddiarlog@gmail.com"
              className="text-primary hover:underline"
            >
              ✉️ meddiarlog@gmail.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClienteArea;
