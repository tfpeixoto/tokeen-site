import Container from "@/src/components/Container";
import TitleContent from "@/src/components/TitleContent";
import { Metadata } from "next";
import Image from "next/image";
import content from "@/src/data/howItWorks.json";

export const metadata: Metadata = {
  title: "Como funciona - Tokeen",
  description:
    "Descubra como o Tokeen transforma o dinheiro do futuro em vendas hoje.",
};

export default async function BlogPage() {
  const { list } = content;

  return (
    <>
      <section>
        <Container>
          <Image
            src={content.computer.src}
            alt={content.computer.alt}
            width={358}
            height={173}
          />
        </Container>
      </section>

      <section>
        <Container>
          {list.map((item) => (
            <TitleContent
              key={item.title}
              title={item.title}
              content={item.content}
            />
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
    </>
  );
}
