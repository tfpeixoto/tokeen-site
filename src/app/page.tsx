import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import WhatsappButton from "@/src/components/WhatsappButton";
import BlogList from "@/src/components/BlogList";
import Footer from "@/src/components/Footer";
import IntroSection from "@/src/components/IntroSection";

export default async function Home() {
  return (
    <main className="bg-[url('/bg-hero.png')] bg-contain bg-top bg-no-repeat">
      <Header />
      <Hero />
      <IntroSection />
      <BlogList />
      <WhatsappButton />
      <Footer />
    </main>
  );
}
