"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import pageContent from "@/src/data/general.json";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { logo, menu, cta } = pageContent.header;

  return (
    <header className="header">
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

        <div className="md:hidden flex items-center">
          <button
            className="w-[48] h-[48]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-xl w-[32] h-[32] flex md:hidden"
            />
          </button>
        </div>

        <div className="hidden md:flex">
          <ul className="flex">
            {menu.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-center px-2 leading-4 text-balance max-w-[120]"
              >
                <Link
                  href={item.href}
                  target={item.target ?? "_self"}
                  className="hover:text-green hover:font-bold"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {cta && (
              <li className="flex items-center text-center px-2 leading-4 text-balance max-w-[120]">
                <Link
                  href={cta.href}
                  target={cta.target || ""}
                  className="bg-[#4D34AC] text-white uppercase p-2 rounded font-bold hover:bg-white hover:text-[#4D34AC]"
                >
                  {cta.label}
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div
          className={`
          fixed inset-0 z-50 transform md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"} 
          transition-transform duration-300 ease-in-out bg-soft-black
        `}
        >
          <div className="flex justify-end p-6">
            <button onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon
                icon={faXmark}
                className="w-[32] h-[32] flex md:hidden"
              />
            </button>
          </div>

          <ul className="flex flex-col">
            {menu.map((item, index) => (
              <li key={index} className="text-center m-2 w-full">
                <Link
                  href={item.href}
                  target={item.target ?? "_self"}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl hover:text-green hover:font-bold"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {cta && (
              <li className="text-center w-full mt-10">
                <Link
                  href={cta.href}
                  target={cta.target || ""}
                  className="bg-[#4D34AC] text-white uppercase p-2 rounded font-bold hover:bg-white hover:text-[#4D34AC]"
                >
                  {cta.label}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </header>
  );
}
