import ContactPage from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontak Kami | KAMMUI",
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