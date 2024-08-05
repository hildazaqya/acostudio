import Hero from "@/components/hero";
import About from "@/components/about";

export default async function MainPage() {
  return (
    <main className="flex min-h-screen flex-col bg-base items-center">
      <Hero />
      <About />
    </main>
  );
}
