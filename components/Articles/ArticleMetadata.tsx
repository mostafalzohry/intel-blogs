import type React from "react";
import type { Article } from "@/types/article.types";
import { theme } from "@/styles/theme";

interface ArticleMetadataProps {
  article: Article;
}

export const ArticleMetadata: React.FC<ArticleMetadataProps> = ({
  article,
}) => {
  return (
    <div className="lg:col-span-3">
      <div className="space-y-4">
        {/* Organization */}
        <div>
          <p
            className="text-xs mb-1"
            style={{ color: theme.colors.text.secondary }}
          >
            Organization
          </p>
          <p
            className="text-sm font-medium"
            style={{ color: theme.colors.text.primary }}
          >
            {article.companyName}
          </p>
        </div>

        {/* Target Sectors */}
        {article.targetSectors && article.targetSectors.length > 0 && (
          <div>
            <p
              className="text-xs mb-1"
              style={{ color: theme.colors.text.secondary }}
            >
              Target Sectors
            </p>
            <p className="text-sm" style={{ color: theme.colors.text.primary }}>
              {article.targetSectors.join(", ")}
            </p>
          </div>
        )}

        {/* Threat Actors */}
        {article.threatActors && article.threatActors.length > 0 && (
          <div>
            <p
              className="text-xs mb-1"
              style={{ color: theme.colors.text.secondary }}
            >
              Threat Actors
            </p>
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                style={{
                  backgroundColor: theme.colors.accent.purple,
                  color: "#fff",
                }}
              >
                ◆
              </div>
              <span
                className="text-sm"
                style={{ color: theme.colors.text.primary }}
              >
                {article.threatActors[0]}
              </span>
            </div>
          </div>
        )}

        {/* Source */}
        {article.source && (
          <div>
            <p
              className="text-xs mb-1"
              style={{ color: theme.colors.text.secondary }}
            >
              Source
            </p>
            <a
              href={article.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs break-all hover:underline line-clamp-2"
              style={{ color: theme.colors.secondary }}
            >
              {article.source}
            </a>
          </div>
        )}

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div>
            <p
              className="text-xs mb-2"
              style={{ color: theme.colors.text.secondary }}
            >
              Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.text.primary,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
