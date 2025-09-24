import Decoracao from "@/components/decoracoes";
import Footer from "@/components/footer";
import { GaleriaAluguel } from "@/components/GaleriaAluguel";
import HeroCarousel from "@/components/hero-carousel";
import Locacao from "@/components/locacao";
import Navigation from "@/components/navigation";
import PageLoader from "@/components/page-loader";
import { Sobre } from "@/components/Sobre";
import contentData from "@/data/content.json";

export default function Home() {
  return (
    <>
      <PageLoader />
      <main className="min-h-screen bg-black">
        <Navigation />
        <section id="hero">
          <HeroCarousel slides={contentData.hero.slides} />
        </section>
        <section id="aluguel">
          <GaleriaAluguel />
        </section>
        {/* <section id="services">
          <Services services={contentData.services} />
        </section> */}
        <section id="locacoes">
          <Locacao locacoes={contentData.locacoes} />
        </section>
        <section id="decoracoes">
          <Decoracao decoracoes={contentData.decoracoes} />
        </section>
        <section id="sobre">
          <Sobre />
        </section>

        <Footer />
      </main>
    </>
  );
}
