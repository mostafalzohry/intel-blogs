import { ArticleDetail } from "@/components/Articles/ArticleDetail";
import { fetchArticleById } from "@/lib/api";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { id } = await params;

  const article = await fetchArticleById(id);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
