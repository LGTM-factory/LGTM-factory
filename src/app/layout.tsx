import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Sans_JP, Monoton } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/shadcn-utils";
import Image from "next/image";
import bgImage from "@/assets/bg-dark.png";
import Header from "@/components/Header";
import { siteMetadata } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.SITE_URL),
  title: {
    default: siteMetadata.SITE_NAME,
    template: `%s | ${siteMetadata.SITE_NAME}`,
  },
  description: siteMetadata.SITE_DESC,
  openGraph: {
    title: siteMetadata.SITE_NAME,
    description: siteMetadata.SITE_DESC,
    url: siteMetadata.SITE_URL,
    siteName: siteMetadata.SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.SITE_NAME,
    description: siteMetadata.SITE_DESC,
  },
};

const ibmMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"], // thinからboldまで指定可能
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmMono",
});

const notojp = Noto_Sans_JP({
  preload: false,
  display: "swap",
  variable: "--font-notojp",
});

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monoton",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          ibmMono.variable,
          notojp.variable,
          monoton.variable,
          "relative font-sans text-foreground",
        )}
      >
        <div className="fixed inset-0 -z-10">
          <Image
            src={bgImage}
            alt="background image"
            fill
            quality={100}
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <div className="min-h-dvh">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
