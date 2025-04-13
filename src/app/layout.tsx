import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peerlist Animation Challenges",
  description: "Submission for the animation challenges on Peerlist",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="fixed bottom-0 inset-x-0 text-center p-4 text-sm">
          <p>
            Made by{" "}
            <a
              href="https://piyushpawar.dev"
              target="_blank"
              className="underline"
            >
              Piyush Pawar
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
