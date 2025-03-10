// components/RecentProjects.tsx
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";

const projects: Project[] = [
  { title: "Tarification du Risque Automobile", description: "Modèle ML pour l'assurance auto.", link: "#" },
  { title: "DJAMTALAH E-commerce", description: "Développement d'une plateforme e-commerce scalable.", link: "#" },
  { title: "Impact Météo sur Sinistres", description: "Analyse des effets climatiques sur l'assurance.", link: "#" },
];

export default function RecentProjects() {
  return (
    <section className="px-6 py-12 text-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">🚀 Projets Récents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <a href="/projects" className="text-blue-600 dark:text-blue-400 font-semibold mt-6 inline-block hover:underline">
        Voir tous les projets →
      </a>
    </section>
  );
}
