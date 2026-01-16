import Container from "../Container";

export default function Hero() {
  return (
    <section className="text-center">
      <Container>
        <h1 className="text-6xl py-20 font-extralight mb-4">
          O dinheiro de <strong>amanhã</strong>, trabalhando hoje.
        </h1>

        <p className="text-2xl font-light">
          Com o pagamento direto de compromissos dos recebíveis das maquininhas
          o dinheiro futuro se transforma em mais vendas – com{" "}
          <strong>mais controle, menos custo e zero burocracia.</strong>
        </p>
      </Container>
    </section>
  );
}
