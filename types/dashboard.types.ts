export interface HeaderProps {
  title: string;
  breadcrumb: string[];
}

export type TimePeriod = "year" | "month" | "week";

export interface CountryData {
  name: string;
  percentage: number;
  code: string;
}

export type CountryDataByPeriod = {
  [period in TimePeriod]: CountryData[];
};

export interface SectorData {
  name: string;
  percentage: number;
}

export type SectorDataByPeriod = {
  [period in TimePeriod]: SectorData[];
};

export interface SectorColor {
  name: string;
  colorName: string;
}

export interface DashboardData {
  id: string;
  sectorColors: SectorColor[];
  sectorData: SectorDataByPeriod;
  countryData: CountryDataByPeriod;
}
