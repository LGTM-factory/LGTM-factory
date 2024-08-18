import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notojp = Noto_Sans_JP({
  preload: false,
  display: "swap",
  variable: "--font-notojp",
});

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
    <html lang="ja">
      <body className={`${inter.variable} ${notojp.variable}`}>
        <p className="text-4xl">
          <span>LGTM</span>
          <span>良さそうだね</span>
        </p>
        {children}
      </body>
    </html>
  );
}
