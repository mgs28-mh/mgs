import BlogPost from "@/components/blog-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | KAMMUI",
  description: "Blog dan Artikel tentang KAMMUI",
  // other metadata
};

const BlogPage = () => {
  return (
    <>
      <BlogPost />
    </>
  );
};

export default BlogPage;
