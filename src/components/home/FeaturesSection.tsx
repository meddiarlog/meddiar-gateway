import { Truck, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Frota Moderna",
    description: "Veículos equipados com rastreamento e monitoramento em tempo real",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Sua carga protegida com seguro completo e equipe treinada",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Compromisso com prazos e entregas dentro do cronograma",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary rounded-lg shrink-0">
                  <feature.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
