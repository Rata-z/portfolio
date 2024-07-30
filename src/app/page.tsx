import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
