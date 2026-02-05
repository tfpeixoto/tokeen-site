"use client";

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
  const { info, copyright, social } = content.footer;

  return (
    <footer className="text-center py-6 mt-12">
      <WhatsappButton />

      <Container className="border-t md:grid md:grid-cols-2">
        <div>
          <p
            className="text-sm text-left text-gray-500"
            dangerouslySetInnerHTML={{ __html: info }}
          />
        </div>

        <div>
          <ul className="flex justify-end">
            {social.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank">
                  <FontAwesomeIcon icon={iconMap[item.icon]} />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-sm text-right text-gray-500 mt-4">{copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
