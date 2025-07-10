import type { Metadata } from "next";
import { JetBrains_Mono} from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";


const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  weight: ["100","200","300","400","500","600","700","800"],
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
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header /> 
        <StairTransition />
        <PageTransition> {children} </PageTransition>
      </body>
    </html>
  );
}
