"use client";
import React, { useState, useEffect } from "react";
import { TimePeriod, DashboardData } from "@/types/dashboard.types";
import { theme } from "@/styles/theme";
import { fetchDashboardData } from "@/lib/api";
import { Loading } from "../Loading";
import { FlagIcon } from "../FlagIcon";

export const TopTargetedCountries: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("year");
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const data = await fetchDashboardData();
    setDashboardData(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading || !dashboardData) {
    return (
      <div
        className={`rounded-lg p-6`}
        style={{ backgroundColor: theme.colors.cardBg }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-xl font-semibold"
            style={{ color: theme.colors.text.primary }}
          >
            Top Targeted Countries
          </h2>
          <div className="w-32 h-10 rounded-lg bg-gray-300 animate-pulse"></div>
        </div>
        <Loading />
      </div>
    );
  }

  const countries = dashboardData.countryData[selectedPeriod] ?? [];

  return (
    <div
      className={`rounded-lg p-6`}
      style={{ backgroundColor: theme.colors.cardBg }}
    >
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

      <div className="grid grid-cols-2 gap-6">
        {countries.map((country, index) => (
          <div
            key={`${country.code}-${index}`}
            className="flex items-center gap-3"
          >
            <FlagIcon countryCode={country.code} countryName={country.name} />

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
