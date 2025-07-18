import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";

// Tambahkan ThemeProvider
import { ThemeProvider } from "@/components/ui/ThemeContext";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Portfolio || Ivan",
  description: "by Ivan Septa Adi Pratama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* class untuk toggle dark/light mode */}
      <body className={`${jetbrainsMono.variable} antialiased bg-white text-black dark:bg-[#0f0f0f] dark:text-white`}>
        <ThemeProvider>
          <Header />
          <StairTransition />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
