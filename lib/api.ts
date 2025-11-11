import { Article, FilterOptions } from "@/types/article.types";

const API_BASE_URL = "https://690f91c345e65ab24ac44093.mockapi.io/api/v1";

export async function fetchArticles(): Promise<Article[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/articles`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export function generateFilterOptions(articles: Article[]): FilterOptions {
  const allTags = new Set<string>();
  const allIndustries = new Set<string>();
  const allRegions = new Set<string>();
  const allCategories = new Set<string>();
  const allSectors = new Set<string>();
  const allGroups = new Set<string>();

  articles.forEach((article) => {
    // Collect tags
    article.tags.forEach((tag) => allTags.add(tag));

    // Collect sectors (as industries)
    article.targetSectors.forEach((sector) => {
      allSectors.add(sector);
      allIndustries.add(sector);
    });

    // Collect regions
    article.targetLocation.forEach((location) => allRegions.add(location));

    // Collect categories (types)
    allCategories.add(article.type);

    // Collect threat actors (groups)
    article.threatActors.forEach((actor) => allGroups.add(actor));
  });

  return {
    tags: Array.from(allTags).sort(),
    industries: Array.from(allIndustries).sort(),
    regions: Array.from(allRegions).sort(),
    categories: Array.from(allCategories).sort(),
    sectors: Array.from(allSectors).sort(),
    groups: Array.from(allGroups).sort(),
  };
}
