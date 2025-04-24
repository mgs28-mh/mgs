import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "KAMMUI | Blog",
    description: "Blog dan Artikel tentang KAMMUI",
    // other metadata
  };

const BlogPage = () => {
  return (
    <>
      <Blog />
    </>
  );
};

export default BlogPage;