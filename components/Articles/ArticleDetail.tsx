import type React from "react";
import type { Article } from "@/types/article.types";
import { theme } from "@/styles/theme";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleImageSection } from "./ArticleImageSection";
import { ArticleMetadata } from "./ArticleMetadata";
import { ArticleWebsitesLocation } from "./ArticleWebsitesLocation";
import { ArticleContent } from "./ArticleContent";
import { ArticleRelatedIntel } from "./ArticleRelatedIntel";

interface ArticleDetailProps {
  article: Article;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: theme.colors.background }}
    >
      <ArticleHeader article={article} />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <ArticleImageSection article={article} />
          <ArticleMetadata article={article} />
          <ArticleWebsitesLocation article={article} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <ArticleContent article={article} />
          <ArticleRelatedIntel article={article} />
        </div>
      </div>
    </div>
  );
};
