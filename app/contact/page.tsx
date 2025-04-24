import ContactPage from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "KAMMUI | Kontak",
    description: "Kontak KAMMUI",
    // other metadata
  };

const Contact = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default Contact;