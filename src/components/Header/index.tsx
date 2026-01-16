import Link from "next/link";
import Image from "next/image";
import Container from "../Container";

export default function Header() {
  return (
    <header>
      <Container className="flex justify-between text-white">
        <Image
          src="/marca-tokeen.svg"
          alt="Marca Tokeen"
          width="290"
          height="72"
          className="max-w-[200]"
        />

        <ul className="flex">
          <li className="flex items-center text-center px-2 leading-4 text-balance max-w-[120]">
            <Link href="/" className="hover:text-[#69BD45] hover:font-bold">
              Como funciona?
            </Link>
          </li>
          <li className="flex items-center text-center px-2 leading-4 text-balance max-w-[120]">
            <Link href="/" className="hover:text-[#69BD45] hover:font-bold">
              Quem somos?
            </Link>
          </li>
          <li className="flex items-center text-center px-2 leading-4 text-balance max-w-[120]">
            <Link href="/blog" className="hover:text-[#69BD45] hover:font-bold">
              Endentendo o assunto
            </Link>
          </li>
          <li className="flex items-center text-center px-2 leading-4 text-balance max-w-[120]">
            <Link href="/" className="hover:text-[#69BD45] hover:font-bold">
              Fale com nosso time
            </Link>
          </li>
          <li className="flex items-center text-center px-2 leading-4 text-balance max-w-[120]">
            <Link href="/blog" className="hover:text-[#69BD45] hover:font-bold">
              Entre
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
}
