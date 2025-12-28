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
  title: "रूहानी शायरी गीत",
  description:
    "दिल को छू लेने वाली आधुनिक हिंदी शायरी, प्रेम और उम्मीद के रंगों में रंगी हुई।",
  metadataBase: new URL("https://agentic-e4beca18.vercel.app"),
  openGraph: {
    title: "रूहानी शायरी गीत",
    description:
      "दिल को छू लेने वाली आधुनिक हिंदी शायरी, प्रेम और उम्मीद के रंगों में रंगी हुई।",
    url: "https://agentic-e4beca18.vercel.app",
    type: "website",
    locale: "hi_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "रूहानी शायरी गीत",
    description:
      "दिल की धड़कनों से बुनी हुई प्रेम और उम्मीद की सुरमयी दास्तान।",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
