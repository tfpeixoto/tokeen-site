import Container from "../Container";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="text-center">
      <Container>
        <h1
          className="text-5xl md:text-6xl py-20 font-extralight mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="text-2xl font-light"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Container>
    </section>
  );
}
