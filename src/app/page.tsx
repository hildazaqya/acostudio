import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Services from "@/components/services";
export default async function MainPage() {
  return (
    <main className="flex min-h-screen flex-col bg-base items-center">
      <Hero />
      <About />
      <Projects />
      <Services />
    </main>
  );
}
