// components/ProjectCard.tsx
import { Project } from "@/types/project";
import { FaExternalLinkAlt } from "react-icons/fa";

// Définir une valeur par défaut pour status si elle n'est pas fournie
export default function ProjectCard({ title, description, link, status = "terminé" }: Project) {
  return (
    <div className="relative flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl">
      {/* Titre et description */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      </div>

      {/* Bouton lien */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
      >
        Voir le projet <FaExternalLinkAlt className="ml-2" />
      </a>

      {/* Badge de statut */}
      <div
        className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
          status === "en cours" ? "bg-yellow-200 text-yellow-800" : "bg-green-200 text-green-800"
        }`}
      >
        {status === "en cours" ? "En cours" : "Terminé"}
      </div>

      {/* Badge de technologies */}
      <div className="absolute bottom-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
        #Tech
      </div>
    </div>
  );
}
