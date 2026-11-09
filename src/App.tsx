import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useActiveSection } from "./components/useActiveSection";
import { navItems } from "./data/portfolio";

const ids = navItems.map((n) => n.id);

export default function App() {
  const active = useActiveSection(ids);
  return (
    <>
      <a href="#skills" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory">Skip to content</a>
      <Navbar active={active} />
      <main>
        <Hero /><About /><Skills /><Projects /><Achievements /><Experience /><Contact />
      </main>
      <Footer />
    </>
  );
}
