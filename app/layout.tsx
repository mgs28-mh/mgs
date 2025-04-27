import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/next';

const fonts = Plus_Jakarta_Sans({
  weight: [ "400", "600"],
  preload: false,
});

export const metadata: Metadata = {
  title: "KAMMUI | Komunitas Mahasiswa Muslim Unggul Indonesia",
  description: "Komunitas Mahasiswa Muslim Unggul Indonesia",
  keywords: ['Komunitas', 'Pendidikan', 'Mahasiswa', 'Muslim', 'Unggul', 'Mahasiswa Unggul', 'Lingkungan Positif'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black ${fonts.className}`}>
        {children}
        <Providers>
          <Navbar />
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
