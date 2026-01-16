import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/imageUrl";

interface Post {
  _id: string;
  title: string;
  _createdAt: string;
  content: any;
  image?: any;
}

export const revalidate = 60;

async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      _createdAt,
      content,
      image
    }
  `;

  console.log("Buscando post com slug:", slug);

  const post = await client.fetch(query, { slug });

  return post;
}

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const post: Post = await getPost(resolvedParams.slug);

  console.log(post.image.asset._ref);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8 border-b pb-8">
        <h1 className="text-4xl font-bold mb-2 text-white">{post.title}</h1>
        <p className="text-gray-500 text-sm">
          Publicado em: {new Date(post._createdAt).toLocaleDateString("pt-BR")}
        </p>
        <Link href={`/`} className="text-sm text-white">
          ← Voltar
        </Link>
      </header>

      <div className="prose prose-lg prose-blue max-w-none">
        <Image
          src={urlFor(post.image).width(1200).height(600).url()}
          alt=""
          width={1200}
          height={600}
          className="mb-10"
        />
        <PortableText value={post.content} />
      </div>
    </article>
  );
}
