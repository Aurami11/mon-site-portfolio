import { JSX } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="px-6 py-12 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Me contacter</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Vous pouvez me joindre via les moyens suivants :
      </p>

      <div className="mt-6 flex justify-center space-x-6">
        <ContactCard
          href="mailto:christdalmeida11@gmail.com"
          icon={<FaEnvelope />}
          title="Email"
          description="christdalmeida@gmail.com"
        />
        <ContactCard
          href="https://github.com/aurami11"
          icon={<FaGithub />}
          title="GitHub"
          description="Mon profil GitHub"
        />
        <ContactCard
          href="https://www.linkedin.com/in/dedekpesse-d-almeida/"
          icon={<FaLinkedin />}
          title="LinkedIn"
          description="Mon profil LinkedIn"
        />
      </div>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        Je serais ravi de discuter de projets, opportunités et collaborations !
      </p>
    </section>
  );
}

function ContactCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md transition hover:scale-105 hover:shadow-xl"
    >
      <div className="text-4xl text-blue-600 dark:text-blue-400 mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </a>
  );
}
