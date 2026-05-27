import { Header }   from "@/components/Header";
import { Hero }      from "@/components/Hero";
import { About }     from "@/components/About";
import { Menu }      from "@/components/Menu";
import { Gallery }   from "@/components/Gallery";
import { Contact }   from "@/components/Contact";
import { Footer }    from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
