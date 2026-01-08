import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Play } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface News {
  id: string;
  title: string;
  summary: string | null;
  image_url: string | null;
  published_at: string | null;
  created_at: string;
}

const NewsSection = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("id, title, summary, image_url, published_at, created_at")
        .eq("published", true)
        .order("published_at", { ascending: false })
        .limit(3);

      if (!error && data) {
        setNews(data);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd 'de' MMMM, yyyy", { locale: ptBR });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Título centralizado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
            Notícias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das novidades do setor de transporte e logística
          </p>
        </div>

        {/* Grid: 3 notícias + 1 vídeo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            <>
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4" />
                  <div className="h-4 bg-muted rounded w-1/3 mb-2" />
                  <div className="h-6 bg-muted rounded mb-1" />
                  <div className="h-6 bg-muted rounded w-3/4" />
                </div>
              ))}
              <div className="animate-pulse">
                <div className="aspect-video bg-muted rounded-lg" />
                <div className="h-4 bg-muted rounded w-2/3 mt-4" />
              </div>
            </>
          ) : news.length > 0 ? (
            <>
              {news.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    {item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <span className="text-4xl">📰</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={14} />
                    <span>
                      {formatDate(item.published_at || item.created_at)}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
              ))}

              {/* Vídeo em Destaque */}
              <div className="lg:col-span-1">
                <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10 p-4 bg-primary rounded-full group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Conheça mais sobre a Meddiar Logística e nossos serviços de
                  transporte de cargas.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Placeholder quando não há notícias */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="group">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <span className="text-4xl opacity-50">📰</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={14} />
                    <span>Em breve</span>
                  </div>
                  <h3 className="font-bold text-lg text-muted-foreground">
                    Aguarde novidades do setor
                  </h3>
                </div>
              ))}

              {/* Vídeo em Destaque */}
              <div className="lg:col-span-1">
                <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10 p-4 bg-primary rounded-full group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Conheça mais sobre a Meddiar Logística e nossos serviços de
                  transporte de cargas.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
