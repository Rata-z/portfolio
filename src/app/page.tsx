import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import Canvas from "@/components/canvas/canvas";

export default function Home() {
  return (
    <main className="relative flex  overflow-x-hidden flex-col  ">
      <div className="absolute top-0 left-0 w-screen h-screen z-0 o">
        <Canvas />
      </div>
      <div className="max-w-screen-2xl w-full px-2 lg:px-0 lg:w-[50rem] mx-auto  justify-center">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
