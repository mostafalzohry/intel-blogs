export interface Article {
  id: string;
  date: string;
  type: string;
  title: string;
  description: string;
  image: string;
  targetSectors: string[];
  targetLocation: string[];
  threatActors: string[];
  tags: string[];
}

export interface FilterOptions {
  tags: string[];
  industries: string[];
  regions: string[];
  categories: string[];
  sectors: string[];
  groups: string[];
}

export interface ArticlesFilters {
  searchQuery: string;
  selectedTags: string[];
  selectedIndustries: string[];
  selectedRegions: string[];
  selectedCategories: string[];
  selectedSectors: string[];
  selectedGroups: string[];
  startDate: Date | null;
  endDate: Date | null;
}
