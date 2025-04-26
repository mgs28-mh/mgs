import AboutPage from "@/components/about-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang Kami | KAMMUI",
    description: "Komunitas Mahasiswa Muslim Unggul Indonesia",
    // other metadata
  };

const About = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};

export default About;
