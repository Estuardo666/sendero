import type { Metadata } from "next";
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
