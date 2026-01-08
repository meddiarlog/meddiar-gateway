import { Building2 } from "lucide-react";

const partners = [
  { name: "Empresa 1", logo: null },
  { name: "Empresa 2", logo: null },
  { name: "Empresa 3", logo: null },
  { name: "Empresa 4", logo: null },
  { name: "Empresa 5", logo: null },
  { name: "Empresa 6", logo: null },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Conheça alguns clientes da Meddiar Logística
          </h2>
          <p className="section-subtitle mx-auto">
            Siga o caminho de quem já confia em nossos serviços e encontre as
            melhores soluções logísticas para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 flex items-center justify-center h-28 card-hover border border-border"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Building2 size={32} />
                  <span className="text-xs font-medium">Logo Parceiro</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
