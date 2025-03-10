// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center md:gap-5 justify-center text-center md:text-left py-12 md:py-24 px-6 md:px-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg">
      {/* Texte de présentation */}
      <div className="max-w-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Jules D&apos;ALMEIDA
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-4">
          Étudiant en Actuariat & Développeur Web
        </h2>
        <p className="text-base md:text-lg text-gray-200">
          Passionné par l&apos;analyse de données, l&apos;intelligence artificielle et le développement web, je construis des solutions innovantes pour des défis complexes.
        </p>

        {/* Boutons */}
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/CV_2025-03-09_Jules_D'ALMEIDA.pdf" target="_blank">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition w-full md:w-auto">
              📄 Télécharger mon CV
            </button>
          </Link>
          <Link href="/projects">
            <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition w-full md:w-auto">
              🚀 Voir mes projets
            </button>
          </Link>
        </div>
      </div>

      {/* Image de profil */}
      <div className="w-40 h-40 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-lg border-4 border-white mt-6 md:mt-0">
        <Image
          src="/profile.png"
          alt="Jules D'ALMEIDA"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
