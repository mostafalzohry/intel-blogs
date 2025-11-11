"use client";
import React, { useState } from "react";
import { TimePeriod } from "@/types/dashboard.types";
import { theme } from "@/styles/theme";
import { countryDataByPeriod } from "@/data/mockData";

interface FlagIconProps {
  countryCode: string;
  countryName: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({ countryCode, countryName }) => {
  return (
    <img
      src={`https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`}
      alt={`${countryName} flag`}
      className="w-10 h-10 rounded-full object-cover shadow-lg"
    />
  );
};

interface TopTargetedCountriesProps {
  className?: string;
}

export const TopTargetedCountries: React.FC<TopTargetedCountriesProps> = ({
  className = "",
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("year");
  const countries = countryDataByPeriod[selectedPeriod];

  return (
    <div
      className={`rounded-lg p-6 ${className}`}
      style={{ backgroundColor: theme.colors.cardBg }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-xl font-semibold"
          style={{ color: theme.colors.text.primary }}
        >
          Top Targeted Countries
        </h2>
        <select
          className="px-4 py-2 rounded-lg text-sm border-0 outline-none cursor-pointer transition-colors"
          style={{
            backgroundColor: theme.colors.background,
            color: theme.colors.text.secondary,
          }}
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value as TimePeriod)}
        >
          <option value="year">This year</option>
          <option value="month">This month</option>
          <option value="week">This week</option>
        </select>
      </div>

      {/* Countries Grid */}
      <div className="grid grid-cols-2 gap-6">
        {countries.map((country, index) => (
          <div
            key={`${country.code}-${index}`}
            className="flex items-center gap-3"
          >
            {/* Flag */}
            <div className="flex-shrink-0">
              <FlagIcon countryCode={country.code} countryName={country.name} />
            </div>

            {/* Country Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {country.name}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: theme.colors.text.primary }}
                >
                  {country.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div
                className="w-full h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: theme.colors.background }}
              >
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${country.percentage}%`,
                    backgroundColor: theme.colors.secondary,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
