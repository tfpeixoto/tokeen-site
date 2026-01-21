import Hero from "@/src/components/Hero";
import BlogList from "@/src/components/BlogList";
import Highlight from "@/src/components/Highlight";
import IntroSection from "@/src/components/IntroSection";
import pageContent from "@/src/data/home.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tokeen - O dinheiro de amanhã, trabalhando hoje",
  description:
    "Com o pagamento direto de compromissos dos recebíveis das maquininhas o dinheiro futuro se transforma em mais vendas – com mais controle, menos custo e zero burocracia.",
};

export default async function Home() {
  const { hero, hightlight } = pageContent;

  return (
    <>
      <Hero title={hero.title} description={hero.description} />
      <Highlight content={hightlight.content} />
      <IntroSection />
      <BlogList />
    </>
  );
}
