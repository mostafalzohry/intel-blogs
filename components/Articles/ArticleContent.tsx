import type React from "react";
import type { Article } from "@/types/article.types";
import { theme } from "@/styles/theme";

interface ArticleContentProps {
  article: Article;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  return (
    <div className="lg:col-span-8">
      {/* Title */}
      <h2
        className="text-2xl font-bold mb-4"
        style={{ color: theme.colors.text.primary }}
      >
        {article.title}
      </h2>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: theme.colors.text.secondary }}
      >
        {article.description}
      </p>

      {/* Full Content */}
      <div
        className="text-sm leading-relaxed space-y-4"
        style={{ color: theme.colors.text.secondary }}
      >
        {article.content?.split("\n\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
