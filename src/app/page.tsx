import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Price from "@/components/Price/Price";
import Banner from "@/components/banner";
import WhatsAppBubble from "@/components/Whatsapp";
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
      <WhatsAppBubble />
    </main>
  );
}
