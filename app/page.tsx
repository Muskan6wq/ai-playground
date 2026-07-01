import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workspace from "@/components/Workspace";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#0f172a] dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Workspace />
    </main>
  );
}
