import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/src/lib/sanity.image";

interface Post {
  _id: string;
  title: string;
  publishedAt: string;
  content: any;
  image?: any;
  tags?: string[];
  author?: {
    name: string;
    position: string;
    description: string;
  };
}

export const revalidate = 60;

async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      publishedAt,
      content,
      tags,
      image {
        asset,
        hotspot,
        alt
      },
      author->{
        name,
        position,
        description
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

      <div className="post-content text-xl font-light leading-8">
        <PortableText value={post.content} />

        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-soft-green text-black text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {post.author && (
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-lg font-semibold">{post.author.name} | {post.author.position}</p>
            {post.author.description && (
              <p className="text-sm text-gray-300">
                {post.author.description}
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
