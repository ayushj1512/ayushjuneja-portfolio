import "./globals.css";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import SmoothCursor from "@/components/common/SmoothCursor";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { generatePageMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata = generatePageMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-[var(--bg-primary)] font-sans antialiased`}
      >
        <SmoothCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
