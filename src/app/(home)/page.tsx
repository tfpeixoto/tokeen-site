import Image from "next/image";
import Container from "@/src/components/Container";
import Hero from "@/src/components/Hero";
import Highlight from "@/src/components/Highlight";
import Carousel from "@/src/components/Carousel";
import pageContent from "@/src/data/home.json";
import { Metadata } from "next";
import LastNews from "@/src/components/LastNews/LastNews";
import { getFeaturedPost } from "@/src/lib/getFeaturedPost";

export const metadata: Metadata = {
  title: "Tokeen - O dinheiro de amanhã, trabalhando hoje",
  description:
    "Com o pagamento direto de compromissos dos recebíveis das maquininhas o dinheiro futuro se transforma em mais vendas – com mais controle, menos custo e zero burocracia.",
};

export default async function Home() {
  const { hero, carousel, hightlight, flow } = pageContent;
  const lastnews = await getFeaturedPost();

  return (
    <>
      <Hero {...hero} />
      <Carousel {...carousel} />
      <Highlight {...hightlight} />

      <section>
        <Container className="flex justify-center">
          <Image
            src={flow.src}
            alt={flow.alt}
            width={800}
            height={600}
            className="text-center"
          />
        </Container>
      </section>

      <section className="news">
        <Container>
          {lastnews && <LastNews {...lastnews} />}
        </Container>
      </section>
    </>
  );
}
