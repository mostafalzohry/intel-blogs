import { Article, ArticlesFilters } from "@/types/article.types";

export function filterArticles(
  articles: Article[],
  filters: ArticlesFilters
): Article[] {
  return articles.filter((article) => {
    // Search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesSearch =
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query));

      if (!matchesSearch) return false;
    }

    // Tags filter
    if (filters.selectedTags.length > 0) {
      const hasMatchingTag = filters.selectedTags.some((selectedTag) =>
        article.tags.includes(selectedTag)
      );
      if (!hasMatchingTag) return false;
    }

    // Industries filter
    if (filters.selectedIndustries.length > 0) {
      const hasMatchingIndustry = filters.selectedIndustries.some((industry) =>
        article.targetSectors.some((sector) => sector.includes(industry))
      );
      if (!hasMatchingIndustry) return false;
    }

    // Regions filter
    if (filters.selectedRegions.length > 0) {
      const hasMatchingRegion = filters.selectedRegions.some((region) =>
        article.targetLocation.includes(region)
      );
      if (!hasMatchingRegion) return false;
    }

    // Categories filter (type)
    if (filters.selectedCategories.length > 0) {
      if (!filters.selectedCategories.includes(article.type)) return false;
    }

    // Sectors filter
    if (filters.selectedSectors.length > 0) {
      const hasMatchingSector = filters.selectedSectors.some((sector) =>
        article.targetSectors.includes(sector)
      );
      if (!hasMatchingSector) return false;
    }

    // Groups filter (threat actors)
    if (filters.selectedGroups.length > 0) {
      const hasMatchingGroup = filters.selectedGroups.some((group) =>
        article.threatActors.includes(group)
      );
      if (!hasMatchingGroup) return false;
    }

    // Date range filter
    if (filters.startDate || filters.endDate) {
      const articleDate = new Date(article.date);

      if (filters.startDate && articleDate < filters.startDate) return false;
      if (filters.endDate && articleDate > filters.endDate) return false;
    }

    return true;
  });
}
