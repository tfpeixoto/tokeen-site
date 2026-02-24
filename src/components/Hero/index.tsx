import Container from "../Container";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="hero">
      <Container className="flex flex-col gap-20 my-32 text-center">
        <h1
          className="text-5xl md:text-7xl m-0 font-extralight text-balance"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="text-3xl font-light p-0 leading-11 text-balance"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Container>
    </section>
  );
}
