import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ParticleBackground } from "./components/ParticleBackground";
import { ScrollProgress } from "./components/ScrollProgress";
import { Toaster } from "sonner";

export default function App() {
  const profile = useQuery(api.portfolio.getProfile);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <Navigation />
      
      <main className="relative z-10">
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills />
        <Experience />
        <Projects />
        <Contact profile={profile} />
      </main>
      
      <Toaster theme="dark" />
    </div>
  );
}
