import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

const Index = () =>
<div className="min-h-screen flex flex-col bg-primary-foreground">
    <main className="max-w-[994px] mx-auto w-full flex flex-col flex-1">
      <Header />
      <HeroSection />
      <ProductsSection />
      <QuoteSection />
      <Footer />
    </main>
  </div>;


export default Index;