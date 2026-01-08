import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Play } from "lucide-react";
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
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Notícias do Setor</h2>
          <p className="section-subtitle mx-auto">
            Fique por dentro das novidades do mundo do transporte e logística.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {loading ? (
              <>
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="h-48 bg-muted rounded-t-lg" />
                    <CardContent className="p-5">
                      <div className="h-4 bg-muted rounded w-1/3 mb-3" />
                      <div className="h-6 bg-muted rounded mb-2" />
                      <div className="h-4 bg-muted rounded w-full" />
                    </CardContent>
                  </Card>
                ))}
              </>
            ) : news.length > 0 ? (
              news.map((item) => (
                <Card key={item.id} className="card-hover overflow-hidden">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-4xl">📰</span>
                    </div>
                  )}
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar size={14} />
                      <span>
                        {formatDate(item.published_at || item.created_at)}
                      </span>
                    </div>
                    <CardTitle className="text-lg mb-2 line-clamp-2">
                      {item.title}
                    </CardTitle>
                    {item.summary && (
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {item.summary}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="md:col-span-2 text-center py-12 text-muted-foreground">
                <p>Nenhuma notícia publicada ainda.</p>
                <p className="text-sm mt-2">
                  Volte em breve para novidades do setor.
                </p>
              </div>
            )}
          </div>

          {/* Video Section */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Vídeo em Destaque</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10 p-4 bg-primary rounded-full group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-white ml-1" fill="white" />
                  </div>
                  <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium z-10">
                    Clique para assistir
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Conheça mais sobre a Meddiar Logística e nossos serviços de
                  transporte de cargas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
