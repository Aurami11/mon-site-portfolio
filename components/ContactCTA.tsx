// components/ContactCTA.tsx
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="px-6 py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold">📬 Intéressé par mon profil ?</h2>
      <p className="text-lg text-gray-200 mt-2">
        Discutons de votre projet ou de votre opportunité.
      </p>
      <div className="mt-6">
        <Link href="/contact">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
            Me Contacter
          </button>
        </Link>
      </div>
    </section>
  );
}
