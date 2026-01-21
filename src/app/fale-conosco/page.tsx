import Image from "next/image";
import Container from "@/src/components/Container";
import pageContent from "@/src/data/contact.json";

export default async function BlogPage() {
  const { title, content, image } = pageContent;

  return (
    <>
      <section>
        <Container className="flex gap-28 items-end">
          <div className="min-w-96">
            <Image src={image.src} alt={image.alt} width={580} height={463} />
          </div>

          <div className="">
            <h1 className="text-[#008C64] text-3xl mb-3 font-bold">{title}</h1>
            <p className="pb-0">{content}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
