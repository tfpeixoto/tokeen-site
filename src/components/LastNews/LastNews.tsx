import Container from "../Container";
import Image from "next/image";

type LastNewsProps = {
  title: string;
  url: string;
  target?: string;
  excerpt?: string;
  image?: ImageProps;
};

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function LastNews({
  title,
  excerpt,
  url,
  target,
  image,
}: LastNewsProps) {
  return (
    <a
      href={url}
      target={target ?? "self"}
      className="bg-[black] flex flex-col md:flex-row gap-8 p-4 hover:scale-105"
    >
      {image && (
        <div className="image">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
      )}

      <div className ="content flex flex-col justify-center">
        <h2 className="text-[#FAC463] text-sm font-bold lowercase mb-12">
          Entendendo do assunto
        </h2>

        <h3 className="font-bold text-2xl leading-7 mb-4">{title}</h3>
        {excerpt && <p>{excerpt}</p>}
      </div>
    </a>
  );
}
