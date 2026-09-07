import type { Metadata } from "next";
import { MagneticButtons } from "@/components/sites/sendero2-fmmarketingdigital-com-0ca8991d/shared/MagneticButtons";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escuela Sendero",
  description:
    "En la Unidad Educativa SENDERO, potenciamos las habilidades de cada niño y niña con el método Montessori y las Inteligencias Múltiples.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <head></head>
      <body className="min-h-full flex flex-col">
        {children}
        <MagneticButtons />
      </body>
    </html>
  );
}
