import type React from "react";
import type { Article } from "@/types/article.types";
import { theme } from "@/styles/theme";

interface ArticleImageSectionProps {
  article: Article;
}

export const ArticleImageSection: React.FC<ArticleImageSectionProps> = ({
  article,
}) => {
  return (
    <div className="lg:col-span-4">
      <div className="space-y-3">
        {/* AI Insights Badge */}
        <div className="relative inline-block">
          <div
            className="rounded-lg overflow-hidden"
            style={{ backgroundColor: theme.colors.cardBg }}
          >
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-64 object-cover"
            />
            <span
              className="absolute top-3 left-3 px-2 py-1 rounded text-sm font-semibold flex items-center gap-1"
              style={{
                backgroundColor: theme.colors.accent.orange,
                color: "#1a1a1a",
              }}
            >
              AI Insights
              <span className="text-xs">ℹ</span>
            </span>
          </div>
        </div>

        {/* Date and Type */}
        <div className="flex items-center gap-2 text-sm">
          <span style={{ color: theme.colors.text.secondary }}>
            {article.date}
          </span>
          <span style={{ color: theme.colors.text.secondary }}>•</span>
          <span style={{ color: theme.colors.text.secondary }}>
            {article.type}
          </span>
        </div>
      </div>
    </div>
  );
};
