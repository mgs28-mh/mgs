import AboutPage from "@/components/about-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About page of KAMMUI",
    description: "This is About Page",
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
