// components/Skills.tsx
import { JSX } from "react";
import { FaPython, FaChartBar, FaDatabase, FaLaptopCode } from "react-icons/fa";

export default function Skills() {
  return (
    <section className="px-6 py-12 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">💡 Mes Compétences</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        <SkillCard icon={<FaPython />} title="Python" description="Data Science & Machine Learning" />
        <SkillCard icon={<FaChartBar />} title="Statistiques" description="Modélisation, GLM, Prédictions" />
        <SkillCard icon={<FaDatabase />} title="Bases de données" description="PostgreSQL, Firestore" />
        <SkillCard icon={<FaLaptopCode />} title="Développement Web" description="Next.js, Tailwind CSS" />
      </div>
    </section>
  );
}

function SkillCard({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center p-4 md:p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md transition hover:scale-105 hover:shadow-xl w-full md:w-auto">
      <div className="text-3xl md:text-4xl text-blue-600 dark:text-blue-400 mb-2 md:mb-3">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{description}</p>
    </div>
  );
}
