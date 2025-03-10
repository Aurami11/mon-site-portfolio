// app/page.tsx
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import RecentProjects from "@/components/RecentProjetcs";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <Hero />
      <Skills />
      <RecentProjects />
      <ContactCTA />
    </main>
  );
}