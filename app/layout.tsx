import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CosmicBackground from "@/components/CosmicBackground";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ivanseptaadipratama.vercel.app"),
  title: {
    default: "Ivan Septa Adi Pratama | Fullstack Developer",
    template: "%s | Ivan Septa Adi Pratama",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} antialiased bg-[#040409] text-[#f2f5f9] min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        {/* Animated Cosmic Background (Canvas 2D Starfield + Accretion Disk / Black Hole) */}
        <CosmicBackground />

        {/* Global Cosmic Header */}
        <Header />

        {/* Main Content Layer */}
        <main className="relative z-10 w-full overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
