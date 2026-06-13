import { VT323, Space_Mono } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Andrés Figueroa | Portafolio",
  description: "Portafolio de Andrés Alejandro Figueroa Zamora - Desarrollador Front-end y Automatización",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${vt323.variable} ${spaceMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
