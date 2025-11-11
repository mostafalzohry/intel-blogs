import { SectorDataByPeriod } from "@/types/sectors.types";
import { CountryDataByPeriod } from "@/types/dashboard.types";

export const sectorDataByPeriod: SectorDataByPeriod = {
  year: [
    { name: "Healthcare", percentage: 35, colorName: "cyan" },
    { name: "Finance", percentage: 24, colorName: "green" },
    { name: "Technology", percentage: 20, colorName: "yellow" },
    { name: "Manufacturing", percentage: 10, colorName: "orange" },
    { name: "Retail", percentage: 8, colorName: "purple" },
    { name: "Energy", percentage: 4, colorName: "red" },
  ],
  month: [
    { name: "Healthcare", percentage: 32, colorName: "cyan" },
    { name: "Finance", percentage: 26, colorName: "green" },
    { name: "Technology", percentage: 22, colorName: "yellow" },
    { name: "Manufacturing", percentage: 12, colorName: "orange" },
    { name: "Retail", percentage: 6, colorName: "purple" },
    { name: "Energy", percentage: 3, colorName: "red" },
  ],
  week: [
    { name: "Healthcare", percentage: 38, colorName: "cyan" },
    { name: "Finance", percentage: 22, colorName: "green" },
    { name: "Technology", percentage: 18, colorName: "yellow" },
    { name: "Manufacturing", percentage: 11, colorName: "orange" },
    { name: "Retail", percentage: 9, colorName: "purple" },
    { name: "Energy", percentage: 5, colorName: "red" },
  ],
};

export const countryDataByPeriod: CountryDataByPeriod = {
  year: [
    { name: "India", percentage: 50, code: "IN" },
    { name: "Canada", percentage: 30, code: "CA" },
    { name: "Russia", percentage: 20, code: "RU" },
    { name: "United Kingdom", percentage: 40, code: "GB" },
    { name: "Australia", percentage: 60, code: "AU" },
    { name: "United States", percentage: 55, code: "US" },
    { name: "Germany", percentage: 35, code: "DE" },
    { name: "France", percentage: 25, code: "FR" },
    { name: "Japan", percentage: 45, code: "JP" },
    { name: "Brazil", percentage: 28, code: "BR" },
  ],
  month: [
    { name: "India", percentage: 45, code: "IN" },
    { name: "Canada", percentage: 35, code: "CA" },
    { name: "Russia", percentage: 25, code: "RU" },
    { name: "United Kingdom", percentage: 38, code: "GB" },
    { name: "Australia", percentage: 55, code: "AU" },
    { name: "United States", percentage: 52, code: "US" },
    { name: "Germany", percentage: 32, code: "DE" },
    { name: "France", percentage: 22, code: "FR" },
    { name: "Japan", percentage: 42, code: "JP" },
    { name: "Brazil", percentage: 26, code: "BR" },
  ],
  week: [
    { name: "India", percentage: 48, code: "IN" },
    { name: "Canada", percentage: 32, code: "CA" },
    { name: "Russia", percentage: 22, code: "RU" },
    { name: "United Kingdom", percentage: 42, code: "GB" },
    { name: "Australia", percentage: 58, code: "AU" },
    { name: "United States", percentage: 53, code: "US" },
    { name: "Germany", percentage: 33, code: "DE" },
    { name: "France", percentage: 24, code: "FR" },
    { name: "Japan", percentage: 44, code: "JP" },
    { name: "Brazil", percentage: 27, code: "BR" },
  ],
};
