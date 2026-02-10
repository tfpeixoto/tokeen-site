import { client } from "@/sanity/client";
import Link from "next/link";
import Container from "@/src/components/Container";

async function getPosts() {
  return client.fetch(`*[_type == "post"]{_id, title, slug, _createdAt}`);
}

export default async function BlogPage() {
  const posts = await getPosts();

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

      <Container>
        <div className="space-y-6">
          {posts.map((post: any) => (
            <article key={post._id} className="pb-6">
              <Link
                href={`/entendendo-do-assunto/${post.slug.current}`}
                className="block hover:opacity-80 transition-opacity"
              >
                <h2 className="text-2xl font-semibold mb-2 text-white hover:text-blue-600">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-sm">
                  {new Date(post._createdAt).toLocaleDateString("pt-BR")}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
