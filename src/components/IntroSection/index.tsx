import Image from "next/image";
import Container from "../Container";

export default function IntroSection() {
  return (
    <section className="intro mb-12 text-center">
      <Container>
        <div className="intro__title mb-[100]">
          <h2 className="text-3xl font-extralight mb-4">
            Crédito mais justo com recebíveis como garantia
          </h2>
        </div>
      </Container>

      <Container className="flex gap-12">
        <div className="intro__image">
          <Image 
            src="/credito-justo.png" 
            alt="Crédito com recebíveis" 
            width={400} 
            height={300} 
          />
        </div>

        <div className="intro__content text-left">
          <h3 className="text-3xl font-bold mb-[60]">isso vai resolvendo a vida de todo mundo</h3>

          <p>
            O franqueado quita dívidas com fornecedores e royalties sem custo de
            antecipação...
          </p>

          <p>
            ...e a franquia reduz risco, organiza o fluxo e cresce com mais
            equilíbrio.
          </p>
        </div>
      </Container>
    </section>
  );
}
