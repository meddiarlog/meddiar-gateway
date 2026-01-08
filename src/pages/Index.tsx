import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import PartnersSection from "@/components/home/PartnersSection";
import NewsSection from "@/components/home/NewsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ServicesPreview />
      <PartnersSection />
      <NewsSection />
    </Layout>
  );
};

export default Index;
