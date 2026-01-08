import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Quem Somos
import Apresentacao from "./pages/quem-somos/Apresentacao";
import Unidade from "./pages/quem-somos/Unidade";
import PerfilDeCarga from "./pages/quem-somos/PerfilDeCarga";

// Serviços
import AreaDoCliente from "./pages/servicos/AreaDoCliente";
import Cotacao from "./pages/servicos/Cotacao";
import Boletos from "./pages/servicos/Boletos";

// Contato
import FaleConosco from "./pages/contato/FaleConosco";
import WhatsAppPage from "./pages/contato/WhatsApp";
import FAQ from "./pages/contato/FAQ";

// Auth & Cliente
import Auth from "./pages/Auth";
import ClienteArea from "./pages/ClienteArea";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Quem Somos */}
          <Route path="/quem-somos/apresentacao" element={<Apresentacao />} />
          <Route path="/quem-somos/unidade" element={<Unidade />} />
          <Route path="/quem-somos/perfil-de-carga" element={<PerfilDeCarga />} />
          
          {/* Serviços */}
          <Route path="/servicos/area-do-cliente" element={<AreaDoCliente />} />
          <Route path="/servicos/cotacao" element={<Cotacao />} />
          <Route path="/servicos/boletos" element={<Boletos />} />
          
          {/* Contato */}
          <Route path="/contato/fale-conosco" element={<FaleConosco />} />
          <Route path="/contato/whatsapp" element={<WhatsAppPage />} />
          <Route path="/contato/faq" element={<FAQ />} />
          
          {/* Auth & Cliente */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/cliente" element={<ClienteArea />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
