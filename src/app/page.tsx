import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="relative flex justify-center overflow-hidden flex-col mx-auto  max-w-screen-2xl w-[50rem] bg-red-400">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
