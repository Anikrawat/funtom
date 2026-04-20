import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import CTA from "@/components/Cta";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import OwnersMessage from "@/components/OwnersMessage";
import KitchenBlog from "@/components/FOK";

export default function Home() {
  return (
    <>
      <Hero />
      <KitchenBlog />
      <Products />
      <Stats />
      <OwnersMessage />
      <Process />
      <CTA />
      <Contact />
    </>
  );
}
