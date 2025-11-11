import type React from "react";
import { theme } from "@/styles/theme";
import { Article } from "@/types/article.types";

interface ArticleRelatedIntelProps {
  article: Article;
}

export const ArticleRelatedIntel: React.FC<ArticleRelatedIntelProps> = ({
  article,
}) => {
  return (
    <div className="lg:col-span-4">
      <div>
        <p
          className="text-sm font-semibold mb-3"
          style={{ color: theme.colors.text.primary }}
        >
          Related Intel
        </p>
        <div className="space-y-3">
          {article.relatedIntel.map((intel) => (
            <div
              key={intel.id}
              className="flex gap-3 p-2 rounded-lg cursor-pointer transition-all hover:opacity-80"
              style={{ backgroundColor: theme.colors.background }}
            >
              <img
                src={intel.image || "/placeholder.svg"}
                alt={intel.title}
                className="w-16 h-16 object-cover rounded flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs mb-1">
                  <span style={{ color: theme.colors.text.secondary }}>
                    Company name
                  </span>
                </div>
                <h4
                  className="text-xs font-semibold mb-1 line-clamp-2"
                  style={{ color: theme.colors.text.primary }}
                >
                  {intel.title}
                </h4>
                <div className="flex items-center gap-2 text-xs">
                  <span style={{ color: theme.colors.text.secondary }}>
                    {intel.date}
                  </span>
                  <span style={{ color: theme.colors.text.secondary }}>•</span>
                  <span style={{ color: theme.colors.text.secondary }}>
                    {intel.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
