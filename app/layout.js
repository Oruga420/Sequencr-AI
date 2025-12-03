import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Alejandro De La Mora | AI Solutions Architect Resume",
  description:
    "AI Solutions Architect with experience in GenAI workflows, autonomous agents, and RAG pipelines. Built with Next.js in blue tones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}
