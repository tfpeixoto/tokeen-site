import Container from "@/src/components/Container";
import TitleContent from "@/src/components/TitleContent";
import { Metadata } from "next";
import Image from "next/image";
import LastNews from "@/src/components/LastNews/LastNews";
import content from "@/src/data/solutions.json";

export const metadata: Metadata = {
  title: "Como funciona - Tokeen",
  description:
    "Descubra como o Tokeen transforma o dinheiro do futuro em vendas hoje.",
};

export default async function BlogPage() {
  const { comercial, enterprise, lastnews } = content;

  return (
    <>
      <section>
        <Container className="md:pl-52">
          <Image
            src={content.computer.src}
            alt={content.computer.alt}
            width={358}
            height={173}
          />
        </Container>
      </section>

      <section>
        <Container className="md:pl-52">
          <h2 className="text-5xl text-green font-bold mb-10">{comercial.subtitle}</h2>
          {comercial.items.map((item, index) => (
            <TitleContent key={index} {...item} />
          ))}
        </Container>
      </section>

      <Container>
        <hr className="border-green" />
      </Container>

      <section>
        <Container className="md:pl-52">
          <h2 className="text-5xl text-green font-bold mb-10">{enterprise.subtitle}</h2>
          {enterprise.items.map((item, index) => (
            <TitleContent key={index} {...item} />
          ))}
        </Container>
      </section>

      <section>
        <Container>
          <Image
            src={content.flow.src}
            alt={content.flow.alt}
            width={800}
            height={600}
          />
        </Container>
      </section>

      <section className="news">
        <Container>
          <LastNews {...lastnews} />
        </Container>
      </section>
    </>
  );
}
