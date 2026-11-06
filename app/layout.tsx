
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Rivera | Ingeniero en Infotecnología",
  description:
    "Portafolio profesional de Daniel Rivera. Desarrollo Backend, soporte técnico IT y automatización.",
  keywords: [
    "Daniel Rivera",
    "Ingeniero en Infotecnología",
    "Backend Developer",
    "Node.js",
    "NestJS",
    "Soporte Técnico",
    "DevOps",
    "Honduras",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
