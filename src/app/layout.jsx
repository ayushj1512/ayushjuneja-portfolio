import "./globals.css";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Footer from "@/components/layout/Footer";
import InitialBrandLoader from "@/components/layout/InitialBrandLoader";
import Navbar from "@/components/layout/Navbar";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { generatePersonSchema, generateSiteMetadata, generateWebsiteSchema } from "@/lib/metadata";

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

export const metadata = generateSiteMetadata();

export default function RootLayout({ children }) {
  const personSchema = generatePersonSchema(profile, contact);
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-[var(--bg-primary)] font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <InitialBrandLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
