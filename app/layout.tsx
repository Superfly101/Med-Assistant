import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-4 px-8 flex bg-white backdrop-blur-lg sticky top-0 border-b-1">
          <nav>
            <h2 className="text-xl font-bold text-black">
              <Link href="/">Sigma AI</Link>
            </h2>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
