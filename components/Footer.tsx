import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm mb-4">© 2024 Mon Portfolio</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/aurami11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100 transition-colors duration-300 flex items-center space-x-2"
          >
            <FaGithub className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dedekpesse-d-almeida/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100 transition-colors duration-300 flex items-center space-x-2"
          >
            <FaLinkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:christdalmeida11@gmail.com"
            className="text-gray-400 hover:text-gray-100 transition-colors duration-300 flex items-center space-x-2"
          >
            <FaEnvelope className="h-5 w-5" />
            <span>Email</span>
          </a>
        </div>
        <p className="mt-4 text-xs text-gray-400">Created with ♥ by Jules D&apos;ALMEIDA</p>
      </div>
    </footer>
  );
}
