import type React from "react";
import Link from "next/link";
import type { Article } from "@/types/article.types";
import { theme } from "@/styles/theme";

interface ArticleWebsitesLocationProps {
  article: Article;
}

export const ArticleWebsitesLocation: React.FC<
  ArticleWebsitesLocationProps
> = ({ article }) => {
  return (
    <div className="lg:col-span-5">
      <div className="space-y-4">
        {/* Website */}
        {article.websites && article.websites.length > 0 && (
          <div>
            <p
              className="text-xs mb-2"
              style={{ color: theme.colors.text.secondary }}
            >
              Website
            </p>
            <div className="space-y-1">
              {article.websites.map((website, idx) => (
                <Link
                  key={idx}
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs hover:underline"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {website}
                  <svg
                    className="w-3 h-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Target Location */}
        {article.targetLocation && article.targetLocation.length > 0 && (
          <div>
            <p
              className="text-xs mb-1"
              style={{ color: theme.colors.text.secondary }}
            >
              Target Location
            </p>
            <p className="text-sm" style={{ color: theme.colors.text.primary }}>
              {article.targetLocation.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
