import Container from "../Container";

export default function Footer() {
  return (
    <footer className="text-center py-6 mt-12">
      <Container className="border-t">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Tokeen. Todos os direitos
          reservados.
        </p>
      </Container>
    </footer>
  );
}
