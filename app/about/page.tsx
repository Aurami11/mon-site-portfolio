// app/about/page.tsx
import { JSX } from "react";
import { FaBrain, FaRobot, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section className="p-6 md:p-12 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">À propos de moi</h1>
      
      {/* Présentation */}
      <div className="mt-6 max-w-3xl mx-auto">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
          Salut ! Je m&apos;appelle Jules, j&apos;ai <span className="font-bold">20 ans</span> et je suis étudiant en 
          <span className="font-bold"> Master 1 d&apos;Actuariat à l&apos;ISFA</span>. 🎓 Passionné par le 
          <span className="font-bold"> machine learning, la programmation et les mathématiques</span>, 
          j&apos;adore relever des défis et explorer des domaines variés ! 🚀
        </p>
      </div>

      {/* Section Faits Intéressants */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">🔍 Quelques faits intéressants</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <FactCard
            icon={<FaBrain />}
            title="Problèmes complexes ?"
            description="Si ça ne fait pas chauffer les neurones, ce n&apos;est pas un vrai challenge. 🤯"
          />
          <FactCard
            icon={<FaRobot />}
            title="Machine Learning Addict"
            description="J&apos;ai plus de modèles d&apos;IA que de chaussettes... et c&apos;est inquiétant. 😅"
          />
          <FactCard
            icon={<FaLaptopCode />}
            title="Polyvalent &amp; Curieux"
            description="J&apos;aime toucher à tout : actuariat, IA, dev web, data science... 🛠️"
          />
          <FactCard
            icon={<FaRocket />}
            title="Ambitieux &amp; Passionné"
            description="Je veux créer des modèles utiles et intelligents pour le monde réel. 💡"
          />
        </div>
      </div>

      {/* Section Contact */}
      <div className="mt-12">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
          Envie de discuter projets, actuariat, IA ou juste échanger ?  
        </p>
        <p className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400 mt-2">
          📬 Contacte-moi et lançons des défis ensemble !
        </p>
      </div>
    </section>
  );
}

// Composant pour afficher chaque fait intéressant
function FactCard({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center p-4 md:p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900 transition hover:scale-105 hover:shadow-xl">
      <div className="text-3xl md:text-4xl text-blue-600 dark:text-blue-400 mb-2">{icon}</div>
      <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
}
