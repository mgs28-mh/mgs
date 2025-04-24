import { getArticle } from "@/lib/api";
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest): Promise<NextResponse | never> {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (!secret || !slug) {
    return new NextResponse("Missing parameters", { status: 400 });
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new NextResponse("Invalid token", { status: 401 });
  }

  const article = await getArticle(slug);

  if (!article) {
    return new NextResponse("Article not found", { status: 404 });
  }

  (await draftMode()).enable();
  redirect(`/articles/${article.slug}`);
}