import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/src/lib/sanity.image";

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
      image {
        asset,
        hotspot,
        alt
      }}`;
  const post = await client.fetch(query, { slug });

  return post;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const post: Post = await getPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8 pb-8">
        {post?.image ? (
          <Image
            src={urlFor(post.image).width(1200).height(600).url()}
            alt=""
            width={1200}
            height={600}
            className="mb-12"
          />
        ) : (
          <div className="bg-gray-700 mb-12 aspect-video rounded"></div>
        )}

        <h1 className="text-5xl font-bold mb-2 text-green">{post.title}</h1>
      </header>

      <div className="post-content text-2xl font-light leading-9">
        <PortableText value={post.content} />
      </div>
    </article>
  );
}
