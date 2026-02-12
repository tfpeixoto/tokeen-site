import { client } from "@/sanity/client";
import Container from "../Container";
import CardPost from "../CardPost";
import { CardPostProps } from "../CardPost";

// Busca os dados no servidor (Server Component)
async function getPosts() {
  return client.fetch(
    `*[_type == "post"]{_id, title, slug, _createdAt, image}`,
  );
}

export default async function BlogList() {
  const posts = await getPosts();

  console.log(posts);

  return (
    <section className="bloglist">
      <Container>
        <div className="grid grid-cols-3 gap-6">
          {posts.map((post: CardPostProps) => (
            <CardPost key={post._id} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
