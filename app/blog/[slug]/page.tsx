import { getAllArticles, getArticle } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOCKS, INLINES, Node } from "@contentful/rich-text-types";
import { ReactNode } from "react";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const allArticles = await getAllArticles();
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

interface RichTextNode {
  data: {
    target?: {
      fields?: {
        title?: string;
        description?: string;
        file?: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
    uri?: string;
  };
}

const richTextRenderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: Node, children: ReactNode) => (
      <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_2]: (_node: Node, children: ReactNode) => (
      <h2 className="text-3xl font-bold mt-12 mb-6 text-emerald-700 dark:text-emerald-400 border-b pb-2 border-emerald-100 dark:border-emerald-800">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_node: Node, children: ReactNode) => (
      <h3 className="text-2xl font-semibold mt-10 mb-5 text-emerald-600 dark:text-emerald-300">
        {children}
      </h3>
    ),
    [BLOCKS.UL_LIST]: (_node: Node, children: ReactNode) => (
      <ul className="list-disc pl-6 mb-6 space-y-3">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: Node, children: ReactNode) => (
      <ol className="list-decimal pl-6 mb-6 space-y-3">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: Node, children: ReactNode) => (
      <li className="text-lg text-gray-700 dark:text-gray-300">{children}</li>
    ),
    [BLOCKS.QUOTE]: (_node: Node, children: ReactNode) => (
      <blockquote className="border-l-4 border-emerald-400 pl-6 py-3 my-6 italic text-gray-600 dark:text-gray-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-r-lg">
        {children}
      </blockquote>
    ),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [BLOCKS.EMBEDDED_ASSET]: (node: RichTextNode, children: ReactNode) => {
      const file = node.data.target?.fields?.file;
      const title = node.data.target?.fields?.title;
      const description = node.data.target?.fields?.description;
      
      if (!file) return null;

      return (
        <div className="my-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={`https:${file.url}`}
            width={file.details.image.width}
            height={file.details.image.height}
            alt={description || title || 'Embedded content'}
            className="w-full h-auto object-cover"
          />
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: RichTextNode, children: ReactNode) => (
      <a 
        href={node.data.uri} 
        className="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 underline underline-offset-4"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  renderMark: {
    bold: (text: ReactNode) => <strong className="font-semibold">{text}</strong>,
    italic: (text: ReactNode) => <em className="italic">{text}</em>,
    underline: (text: ReactNode) => <u className="underline">{text}</u>,
    code: (text: ReactNode) => (
      <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">
        {text}
      </code>
    ),
  },
};

interface BlogPostArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostArticlePage(props: BlogPostArticlePageProps) {
  const params = await props.params;
  const draft = await draftMode();
  const isEnabled = draft.isEnabled;

  const article = await getArticle(params.slug, isEnabled);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative py-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900/70">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-normal">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 py-16 max-w-4xl">
        {article.articleImage && (
          <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
            <Image
              alt="Article Image"
              className="w-full h-auto object-cover"
              height={600}
              src={article.articleImage.url}
              width={1200}
              priority
            />
          </div>
        )}

        {/* Rich Text Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {documentToReactComponents(article.details.json, richTextRenderOptions)}
        </article>

        {/* Author/Date Section */}
        <div className="mt-16 pt-8 border-t border-emerald-100 dark:border-emerald-800">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
              <span className="text-emerald-600 dark:text-emerald-300 font-medium">
                {article.authorName?.[0] || 'A'}
              </span>
            </div>
            <div>
              <p className="font-medium text-emerald-800 dark:text-emerald-200">
                {article.authorName || 'Admin'}
              </p>
              <p className="text-sm text-emerald-600 dark:text-emerald-400">
                Published on {article.date ? new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}