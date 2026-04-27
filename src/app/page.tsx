import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { CaseStudies } from "@/components/case-studies";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
