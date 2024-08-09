import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Price from "@/components/price";
import Banner from "@/components/banner";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default async function MainPage() {
  return (
    <main className="flex min-h-screen flex-col bg-base items-center">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Price />
      <Banner />
    </main>
  );
}
