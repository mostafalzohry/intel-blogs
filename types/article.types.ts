export interface RelatedIntel {
  id: string;
  title: string;
  date: string;
  type: string;
  image: string;
}

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
  companyName: string;
  organization: string;
  source: string;
  websites: string[];
  industrialGoodsAndServices: string[];
  content: string;
  relatedIntel: RelatedIntel[];
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
