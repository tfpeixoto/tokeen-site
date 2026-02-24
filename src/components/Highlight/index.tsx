import Container from "../Container";

type HighlightProps = {
  content: string;
};

export default function Highlight({ content }: HighlightProps) {
  return (
    <section>
      <Container className="text-center">
        <h3
          className="text-white text-3xl md:text-4xl font-extralight text-balance"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </section>
  );
}
