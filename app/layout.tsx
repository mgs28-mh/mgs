import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Providers } from "./providers";

const poppins = Poppins({
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  title: "KAMMUI",
  description: "Komunitas Mahasiswa Muslim Unggul Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black ${poppins.className}`}>
        {children}
        <Providers>
          <Navbar />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
