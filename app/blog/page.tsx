import BlogPost from "@/components/blog-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KAMMUI | Blog",
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
