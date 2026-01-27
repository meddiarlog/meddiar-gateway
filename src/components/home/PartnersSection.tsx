import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import logoAndreGuimaraes from "@/assets/partners/andre-guimaraes.png";
import logoDrywallCenter from "@/assets/partners/drywall-center.avif";
import logoGdsul from "@/assets/partners/gdsul.png";
import logoRcervellini from "@/assets/partners/rcervellini.jpeg";
import logoConstrucenter from "@/assets/partners/construcenter.jpeg";

const partners = [
  { name: "Grupo André Guimarães", logo: logoAndreGuimaraes },
  { name: "Drywall Center", logo: logoDrywallCenter },
  { name: "GDSUL", logo: logoGdsul },
  { name: "RCervellini", logo: logoRcervellini },
  { name: "Construcenter", logo: logoConstrucenter },
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

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="bg-card rounded-lg p-8 flex items-center justify-center h-36 card-hover border border-border mx-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-24 w-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
