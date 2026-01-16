import { client } from "@/sanity/client";
import Link from "next/link";
import Container from "../Container";

// Busca os dados no servidor (Server Component)
async function getPosts() {
  return client.fetch(`*[_type == "post"]{_id, title, slug, _createdAt}`);
}

export default async function BlogList() {
  const posts = await getPosts();

  return (
    <section>
      <Container>
        <h2 className="text-3xl font-bold mb-5 text-center">
          O que era futuro vira <strong>liquidez</strong>. O que era risco vira{" "}
          <strong>confiança</strong>. O que era burocracia vira{" "}
          <strong>fluxo</strong>.
        </h2>

        <ul>
          {posts.map((post: any) => (
            <li key={post._id} className="mb-2">
              <Link
                href={`/blog/${post.slug.current}`}
                className="text-blue-600 hover:underline"
              >
                {new Date(post._createdAt).toLocaleDateString("pt-BR")} .{" "}
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
