import { HashScroll } from "@/components/HashScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Roadmap } from "@/components/Roadmap";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HashScroll />
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatsBand />
        <ProblemSolution />
        <Roadmap />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
