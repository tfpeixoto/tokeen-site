import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/src/lib/sanity.image";

export type CardPostProps = {
  _id: string;
  slug: SlugProps;
  title: string;
  _createdAt: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  content: string;
};

type SlugProps = {
  current: string;
  _type: string;
};

export default function CardPost({
  _id,
  slug,
  title,
  _createdAt,
  image,
  content,
}: CardPostProps) {
  return (
    <article
      key={_id}
      className="bg-black rounded flex flex-col md:flex-row gap-8 p-5 hover:scale-105 hover:transition-all"
    >
      <Link
        href={`/blog/${slug.current}`}
        className="block hover:opacity-80 transition-opacity"
      >
        {image ? (
          <Image
            src={urlFor(image).width(400).height(300).url()}
            alt={image?.alt || ""}
            height={300}
            width={400}
            className="mb-5"
          />
        ) : (
          <div className="bg-gray-800 aspect-4/3 mb-5"></div>
        )}

        <h2 className="text-xl font-semibold mb-2 text-white leading-6 hover:text-green">
          {title}
        </h2>

        <p className="text-gray-500 text-sm">
          {new Date(_createdAt).toLocaleDateString("pt-BR")}
        </p>

        {content && <p>{content}</p>}
      </Link>
    </article>
  );
}
