import { AccentColor } from "@/styles/theme";

export interface Sector {
  name: string;
  percentage: number;
  colorName: AccentColor;
}

export interface SectorDataByPeriod {
  year: Sector[];
  month: Sector[];
  week: Sector[];
}
