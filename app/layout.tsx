import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlagiarismGuard – Check if your content was stolen before publishing",
  description: "Scan the web to ensure your original content hasn't been plagiarized elsewhere before you publish it."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="06353ab4-7024-4efa-bbfc-ba8bdc1b120f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
