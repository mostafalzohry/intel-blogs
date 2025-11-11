export interface HeaderProps {
  title: string;
  breadcrumb: string[];
}

export interface CountryData {
  name: string;
  percentage: number;
  code: string;
}

export interface CountryDataByPeriod {
  year: CountryData[];
  month: CountryData[];
  week: CountryData[];
}

export type TimePeriod = "year" | "month" | "week";
