"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Container from "../Container";
import WhatsappButton from "../WhatsappButton";
import content from "@/src/data/general.json";

const iconMap: { [key: string]: any } = {
  faLinkedin,
  faInstagram,
  faEnvelope,
};

export default function Footer() {
  const { info, copyright, social, stamp, whatsapp } = content.footer;

  return (
    <footer className="text-center py-6 mt-12 mb-20 md:mb-0">
      <WhatsappButton {...whatsapp} />

      <Container className="border-t md:grid md:grid-cols-3">
        <div>
          <p
            className="text-sm text-center mb-16 md:mb-0 md:text-left text-white"
            dangerouslySetInnerHTML={{ __html: info }}
          />
        </div>

        <div className="mb-20 md:mb-0">
          <p>{stamp.intro}</p>
          <Link href={stamp.url} target="_blank">
            <Image
              className="m-auto"
              src={stamp.image.src}
              alt={stamp.image.alt}
              width={stamp.image.width}
              height={stamp.image.height}
            />
          </Link>
        </div>

        <div>
          <ul className="flex justify-center md:justify-end">
            {social.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="text-2xl text-white hover:text-white"
                  target="_blank"
                  aria-label={item.label}
                >
                  <FontAwesomeIcon icon={iconMap[item.icon]} />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-sm text-center md:text-right text-white mt-4">
            {copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
