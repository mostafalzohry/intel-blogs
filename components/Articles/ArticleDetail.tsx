"use client";
import type React from "react";
import type { Article } from "@/types/article.types";
import { theme } from "@/styles/theme";

interface ArticleDetailProps {
  article: Article;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Header */}
      <div style={{ backgroundColor: theme.colors.cardBg }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm mb-2 flex-wrap">
                <button
                  className="hover:underline"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Home
                </button>
                <span style={{ color: theme.colors.text.secondary }}>/</span>
                <button
                  className="hover:underline"
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

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Left Column - Image (35%) */}
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

          {/* Middle Column - Metadata (30%) */}
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
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.primary }}
                  >
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

          {/* Right Column - Website & Target Location (35%) */}
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
                      <a
                        key={idx}
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs hover:underline"
                        style={{ color: theme.colors.secondary }}
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
                      </a>
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
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {article.targetLocation.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Content (65%) */}
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

          {/* Right Column - Related Intel (35%) */}
          <div className="lg:col-span-4">
            {article.relatedIntel && article.relatedIntel.length > 0 && (
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
                          <span style={{ color: theme.colors.text.secondary }}>
                            •
                          </span>
                          <span style={{ color: theme.colors.text.secondary }}>
                            {intel.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
