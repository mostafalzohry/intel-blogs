"use client";
import type React from "react";
import type { Article } from "@/types/article.types";
import { theme } from "@/styles/theme";
import { useRouter } from "next/navigation";

interface ArticleHeaderProps {
  article: Article;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article }) => {
  const router = useRouter();
  const goHome = () => router.push("/");

  return (
    <div style={{ backgroundColor: theme.colors.cardBg }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm mb-2 flex-wrap">
              <button
                className="hover:underline"
                onClick={goHome}
                style={{ color: theme.colors.text.secondary }}
              >
                Home
              </button>
              <span style={{ color: theme.colors.text.secondary }}>/</span>
              <button
                className="hover:underline"
                onClick={goHome}
                style={{ color: theme.colors.text.secondary }}
              >
                Intel Updates
              </button>
              <span style={{ color: theme.colors.text.secondary }}>/</span>
              <span
                style={{ color: theme.colors.text.secondary }}
                className="truncate"
              >
                {article.title}
              </span>
            </div>
            <h1
              className="text-3xl font-bold"
              style={{ color: theme.colors.text.primary }}
            >
              {article.title}
            </h1>
          </div>

          <button
            className="py-2 px-4 rounded-lg font-semibold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0"
            style={{
              backgroundColor: theme.colors.secondary,
              color: theme.colors.text.primary,
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
};
