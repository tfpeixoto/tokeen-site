import Container from "@/src/components/Container";
import Highlight from "@/src/components/Highlight";
import pageContent from "@/src/data/whoWeAre.json";

export default async function BlogPage() {
  const { title, content, contentBox } = pageContent;

  return (
    <>
      <section>
        <Container className="flex gap-28 flex-col md:flex-row">
          <div className="min-w-48">
            <h1 className="font-black text-[#4D9234] text-5xl lowercase">
              {title}
            </h1>
          </div>

          <div
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Container>
      </section>

      <Highlight content={pageContent.hightlight} />

      <section>
        <Container className="flex gap-28 flex-col md:flex-row">
          <div className="min-w-48"></div>
          <div
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: contentBox }}
          />
        </Container>
      </section>
    </>
  );
}
