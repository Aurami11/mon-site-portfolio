// app/layout.tsx
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Mon Portfolio | Jules D'ALMEIDA",
  description: "Bienvenue sur mon site personnel.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="max-w-6xl mx-auto pt-20 px-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}