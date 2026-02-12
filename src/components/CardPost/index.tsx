import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/imageUrl";

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
  };
  content: string;
};

type SlugProps = {
  current: string;
  _type: string;
};

export default async function CardPost({
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
      className="bg-black rounded flex flex-col md:flex-row gap-8 p-4 hover:scale-105"
    >
      <Link
        href={`/entendendo-do-assunto/${slug.current}`}
        className="block hover:opacity-80 transition-opacity"
      >
        {/* <Image
          src={urlFor(image).width(400).height(200).url()}
          alt=""
          width={400}
          height={200}
          className="mb-10"
        /> */}

        <h2 className="text-2xl font-semibold mb-2 text-white hover:text-blue-600">
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
