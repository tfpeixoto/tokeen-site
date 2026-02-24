import { client } from "@/sanity/client";
import { urlFor } from "@/src/lib/sanity.image";

export async function getFeaturedPost() {
  const featuredPost = await client.fetch(
    `*[_type == "post" && featured == true] | order(publishedAt desc)[0]{
      title,
      slug,
      content,
      image {
        asset,
        alt
      }
    }`
  );

  if (!featuredPost) return null;

  const excerpt = featuredPost.content
    ?.find((block: any) => block._type === "block")
    ?.children?.map((child: any) => child.text)
    ?.join("")
    ?.slice(0, 250);

  return {
    title: featuredPost.title,
    url: `/blog/${featuredPost.slug.current}`,
    excerpt: excerpt ? `${excerpt}...` : undefined,
    image: featuredPost.image
      ? {
          src: urlFor(featuredPost.image).width(400).height(300).url(),
          alt: featuredPost.image.alt || "",
          width: 400,
          height: 300,
        }
      : undefined,
  };
}
