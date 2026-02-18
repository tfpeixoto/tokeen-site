import Image from "next/image";
import Container from "@/src/components/Container";
import LastNews from "@/src/components/LastNews/LastNews";
import pageContent from "@/src/data/contact.json";

export default async function BlogPage() {
  const { title, content, image, lastnews } = pageContent;

  return (
    <>
      <section className="content">
        <Container className="flex gap-20 flex-col md:flex-row items-end">
          <div className="min-w-96">
            <Image src={image.src} alt={image.alt} width={580} height={463} />
          </div>

          <div>
            <h1 className="text-dark-green text-3xl mb-3 font-bold">{title}</h1>
            <p className="text-xl font-extralight pb-0">{content}</p>
          </div>
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
