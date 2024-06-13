import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Section>
      <Container>
        <article className="prose mx-auto">{children}</article>
      </Container>
    </Section>
  );
}
