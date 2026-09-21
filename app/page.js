import { MotionShell } from "../components/Motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import AdditionalProjects from "../components/AdditionalProjects";
import Tools from "../components/Tools";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <MotionShell>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <AdditionalProjects />
        <Tools />
        <Process />
        <Contact />
      </main>
      <Footer />
    </MotionShell>
  );
}
