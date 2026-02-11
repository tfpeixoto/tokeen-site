import Container from "@/src/components/Container";
import Highlight from "@/src/components/Highlight";
import LastNews from "@/src/components/LastNews/LastNews";
import pageContent from "@/src/data/whoWeAre.json";

export default async function BlogPage() {
  const { title, content, contentBox, lastnews } = pageContent;

  return (
    <>
      <section className="quem-somos">
        <Container className="flex gap-8 md:gap-28 flex-col md:flex-row">
          <div className="min-w-48">
            <h1 className="font-black text-[#4D9234] text-5xl lowercase">
              {title}
            </h1>
          </div>

          <div
            className="text-xl font-extralight leading-7"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Container>
      </section>

      <Highlight content={pageContent.hightlight} />

      <section>
        <Container className="flex gap-28 flex-col md:flex-row">
          <div className="min-w-48 hidden md:block"></div>
          <div
            className="text-xl font-extralight leading-7"
            dangerouslySetInnerHTML={{ __html: contentBox }}
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
