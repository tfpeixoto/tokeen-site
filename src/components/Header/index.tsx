import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import pageContent from "@/src/data/general.json";

export default function Header() {
  const { logo, menu, cta } = pageContent.header;

  return (
    <header>
      <Container className="flex justify-between text-white">
        <Link href="/">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={+logo.width}
            height={+logo.height}
            className="max-w-[200]"
          />
        </Link>

        <ul className="flex">
          {menu.map((item, index) => (
            <li
              key={index}
              className="flex items-center text-center px-2 leading-4 text-balance max-w-[120]"
            >
              <Link
                href={item.href}
                className="hover:text-[#69BD45] hover:font-bold"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center text-center px-2 leading-4 text-balance max-w-[120]">
            <Link
              href={cta.href}
              target={cta.target || ""}
              className="bg-[#4D34AC] text-white uppercase p-2 rounded font-bold hover:bg-white hover:text-[#4D34AC]"
            >
              {cta.label}
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
}
