import React from "react";
import { Article } from "@/types/article.types";
import { theme } from "@/styles/theme";

interface ArticleCardProps {
  article: Article;
  onClick: (id: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onClick,
}) => {
  return (
    <div
      className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
      style={{ backgroundColor: theme.colors.cardBg }}
      onClick={() => onClick(article.id)}
    >
      <div className="flex gap-4 p-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <div
            className="w-48 h-36 rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${article.image})`,
              backgroundColor: theme.colors.background,
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs"
              style={{ color: theme.colors.text.secondary }}
            >
              {article.date}
            </span>
            <span
              className="text-xs"
              style={{ color: theme.colors.text.secondary }}
            >
              •
            </span>
            <span
              className="text-xs"
              style={{ color: theme.colors.text.secondary }}
            >
              {article.type}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-lg font-semibold mb-2 line-clamp-2"
            style={{ color: theme.colors.text.primary }}
          >
            {article.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm mb-4 line-clamp-2"
            style={{ color: theme.colors.text.secondary }}
          >
            {article.description}
          </p>

          {/* Footer Info */}
          <div className="grid grid-cols-3 gap-4 mt-auto">
            <div>
              <p
                className="text-xs mb-1"
                style={{ color: theme.colors.text.secondary }}
              >
                Target Sectors
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: theme.colors.text.primary }}
              >
                {article.targetSectors.join(", ")}
              </p>
            </div>
            <div>
              <p
                className="text-xs mb-1"
                style={{ color: theme.colors.text.secondary }}
              >
                Target Location
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: theme.colors.text.primary }}
              >
                {article.targetLocation.join(", ")}
              </p>
            </div>
            <div>
              <p
                className="text-xs mb-1"
                style={{ color: theme.colors.text.secondary }}
              >
                Threat Actors
              </p>
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={theme.colors.text.secondary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span
                  className="text-sm font-medium"
                  style={{ color: theme.colors.text.primary }}
                >
                  {article.threatActors[0]}
                </span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.slice(0, 6).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.text.primary,
                }}
              >
                {tag}
              </span>
            ))}
            {article.tags.length > 6 && (
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.text.primary,
                }}
              >
                +{article.tags.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
