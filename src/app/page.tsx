import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Blog from "@/components/Blog";
import Gists from "@/components/Gists";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Works />
      <Blog />
      <Gists />
      <Contact />
    </main>
  );
}
