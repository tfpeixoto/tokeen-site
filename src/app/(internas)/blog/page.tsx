import BlogList from "@/src/components/BlogList";
import Container from "@/src/components/Container";

export default async function BlogPage() {
  return (
    <>
      <section>
        <Container className="flex gap-28 flex-col md:flex-row">
          <div className="min-w-48">
            <h1 className="font-black text-[#4D9234] text-5xl lowercase">
              Entendendo do assunto
            </h1>
          </div>
        </Container>
      </section>

      <BlogList initialPostsCount={3} />
    </>
  );
}
