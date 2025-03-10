import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "DJAMTALAH – Plateforme E-commerce",
    description: "Développement et déploiement d’une plateforme e-commerce intuitive et scalable.",
    link: "https://djamtalah.com",
    status: "terminé", // Nouveau champ
  },
  {
    title: "Segmentation et Tarification du Risque Automobile à l’aide du Machine Learning",
    description: "Développement d’un modèle de segmentation des assurés en fonction de leur profil de risque.",
    link: "https://github.com/Aurami11/ml_tarification_classification",
    status: "terminé", // Nouveau champ
  },
  {
    title: "Tarification du Risque Incendie à l'aide du Machine Learning",
    description: "Modélisation de la fréquence des sinistres pour déterminer la prime pure d’un produit d'assurance incendie.",
    link: "https://challengedata.ens.fr/challenges/161",
    status: "en cours", // Nouveau champ
  },
  {
    title: "Analyse de l’Impact Météorologique sur les Sinistres Automobiles",
    description: "Modélisation des effets des conditions météorologiques sur la fréquence et la sévérité des sinistres.",
    link: "https://github.com/Aurami11/projet_impact-meteorologique-sinistres_academic",
    status: "terminé", // Nouveau champ
  },
  {
    title: "Modélisation et Prédiction du Coût Ultime des Sinistres Corporels",
    description: "Mise en place d’un modèle prédictif pour estimer le coût ultime des sinistres corporels.",
    link: "https://github.com/Aurami11/ml_prediction-sinistres-corporels",
    status: "terminé", // Nouveau champ
  },
  // {
  //   title: "Prédiction de variation de prix d'un actif basé sur les actualités",
  //   description: "Développement d'un modèle prédictif pour prédire la variation de prix d'un actif en analysant l'impact des actualités sur le marché financier.",
  //   link: "https://github.com/moi/prediction-actif-actualites", // Remplace par le lien vers ton projet
  //   status: "en cours", // Si tu veux, tu peux indiquer que c'est en cours de développement
  // },
];

export default function Projects() {
  return (
    <section className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">Mes projets</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
