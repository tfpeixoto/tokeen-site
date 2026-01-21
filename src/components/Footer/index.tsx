import Container from "../Container";
import WhatsappButton from "../WhatsappButton";
import content from "@/src/data/general.json";

export default function Footer() {
  const { footer } = content;

  return (
    <footer className="text-center py-6 mt-12">
      <WhatsappButton />
      <Container className="border-t">
        <p className="text-sm text-gray-500">{footer.copyright}</p>
      </Container>
    </footer>
  );
}
