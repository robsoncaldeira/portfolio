import { getDictionary, type Lang, LANGS } from "@/dictionaries";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { CaseStudies } from "@/components/case-studies";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (LANGS.includes(rawLang as Lang) ? rawLang : "pt") as Lang;
  const dict = getDictionary(lang);

  return (
    <>
      <Nav dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} />
        <About dict={dict} />
        <CaseStudies dict={dict} />
        <Skills dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
