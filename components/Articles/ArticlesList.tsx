"use client";
import React, { useState, useEffect } from "react";
import { SearchBar } from "@/components/Filters/SearchBar";
import { FilterSection } from "@/components/Filters/FilterSection";
import { DateRangeFilter } from "@/components/Filters/DateRangeFilter";
import { ArticleCard } from "@/components/Articles/ArticleCard";
import { fetchArticles, generateFilterOptions } from "@/lib/api";
import { filterArticles } from "@/utils/filterUtils";
import { Article, FilterOptions, ArticlesFilters } from "@/types/article.types";
import { theme } from "@/styles/theme";

export const ArticlesList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    tags: [],
    industries: [],
    regions: [],
    categories: [],
    sectors: [],
    groups: [],
  });
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState<ArticlesFilters>({
    searchQuery: "",
    selectedTags: [],
    selectedIndustries: [],
    selectedRegions: [],
    selectedCategories: [],
    selectedSectors: [],
    selectedGroups: [],
    startDate: null,
    endDate: null,
  });

  const loadData = async () => {
    setLoading(true);
    const articlesData = await fetchArticles();
    setArticles(articlesData);

    const filtersData = generateFilterOptions(articlesData);
    setFilterOptions(filtersData);

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const toggleFilter = (
    filterKey: keyof Pick<
      ArticlesFilters,
      | "selectedTags"
      | "selectedIndustries"
      | "selectedRegions"
      | "selectedCategories"
      | "selectedSectors"
      | "selectedGroups"
    >,
    option: string
  ) => {
    setFilters((prev) => {
      const currentArray = prev[filterKey];
      const newArray = currentArray.includes(option)
        ? currentArray.filter((item) => item !== option)
        : [...currentArray, option];

      return { ...prev, [filterKey]: newArray };
    });
  };

  const handleArticleClick = (id: string) => {
    console.log("Navigate to article:", id);
  };

  const filteredArticles = filterArticles(articles, filters);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-xl" style={{ color: theme.colors.text.secondary }}>
          Loading articles...
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-6">
      {/* Left Sidebar - Filters */}
      <div className="w-80 flex-shrink-0">
        <div
          className="rounded-lg p-6 sticky top-6"
          style={{ backgroundColor: theme.colors.cardBg }}
        >
          <SearchBar
            value={filters.searchQuery}
            onChange={(value) =>
              setFilters((prev) => ({ ...prev, searchQuery: value }))
            }
          />

          <FilterSection
            title="Tags"
            options={filterOptions.tags}
            selectedOptions={filters.selectedTags}
            onToggle={(option) => toggleFilter("selectedTags", option)}
            isOpen={true}
          />

          <FilterSection
            title="Industries"
            options={filterOptions.industries}
            selectedOptions={filters.selectedIndustries}
            onToggle={(option) => toggleFilter("selectedIndustries", option)}
          />

          <FilterSection
            title="Regions"
            options={filterOptions.regions}
            selectedOptions={filters.selectedRegions}
            onToggle={(option) => toggleFilter("selectedRegions", option)}
          />

          <FilterSection
            title="Categories"
            options={filterOptions.categories}
            selectedOptions={filters.selectedCategories}
            onToggle={(option) => toggleFilter("selectedCategories", option)}
          />

          <FilterSection
            title="Sector"
            options={filterOptions.sectors}
            selectedOptions={filters.selectedSectors}
            onToggle={(option) => toggleFilter("selectedSectors", option)}
          />

          <FilterSection
            title="Group"
            options={filterOptions.groups}
            selectedOptions={filters.selectedGroups}
            onToggle={(option) => toggleFilter("selectedGroups", option)}
          />

          <DateRangeFilter
            startDate={filters.startDate}
            endDate={filters.endDate}
            onStartDateChange={(date) =>
              setFilters((prev) => ({ ...prev, startDate: date }))
            }
            onEndDateChange={(date) =>
              setFilters((prev) => ({ ...prev, endDate: date }))
            }
          />
        </div>
      </div>

      <div className="flex-1 space-y-4">
        {filteredArticles.length === 0 ? (
          <div
            className="text-center py-20 rounded-lg"
            style={{ backgroundColor: theme.colors.cardBg }}
          >
            <p
              className="text-lg"
              style={{ color: theme.colors.text.secondary }}
            >
              No articles found matching your filters
            </p>
          </div>
        ) : (
          filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={handleArticleClick}
            />
          ))
        )}
      </div>
    </div>
  );
};
