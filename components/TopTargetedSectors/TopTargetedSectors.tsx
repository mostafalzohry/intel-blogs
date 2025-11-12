"use client";
import React, { useState, useEffect } from "react";
import { TimePeriod, DashboardData } from "@/types/dashboard.types";
import { theme } from "@/styles/theme";
import { fetchDashboardData } from "@/lib/api";
import { Loading } from "../Loading";

interface TopTargetedSectorsProps {
  totalSectors?: number;
}

export const TopTargetedSectors: React.FC<TopTargetedSectorsProps> = ({
  totalSectors = 122,
}) => {
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
            Top Targeted Sectors
          </h2>
          <div className="w-32 h-10 rounded-lg bg-gray-300 animate-pulse"></div>
        </div>
        <Loading message="Loading sectors..." />
      </div>
    );
  }

  const rawSectors = dashboardData.sectorData[selectedPeriod] ?? [];

  const sectors = rawSectors.map((sector) => {
    const colorName =
      dashboardData.sectorColors.find((sc) => sc.name === sector.name)
        ?.colorName ?? "gray";

    return {
      ...sector,
      color: (theme.colors.accent as Record<string, string>)[colorName],
    };
  });

  const circleSize = 280;
  const strokeWidth = 40;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const segments = sectors.reduce<
    { name: string; percentage: number; offset: number; color: string }[]
  >((acc, sector) => {
    const prevOffset =
      acc.length > 0
        ? acc[acc.length - 1].offset +
          (acc[acc.length - 1].percentage / 100) * circumference
        : 0;
    acc.push({
      name: sector.name,
      percentage: sector.percentage,
      offset: prevOffset,
      color: sector.color,
    });
    return acc;
  }, []);

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
          Top Targeted Sectors
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

      <div className="flex items-center gap-6">
        {/* Donut Chart */}
        <div className="relative flex-shrink-0">
          <svg
            width={circleSize}
            height={circleSize}
            className="transform -rotate-90"
          >
            {segments.map((segment, index) => {
              const dash = (segment.percentage / 100) * circumference;
              return (
                <circle
                  key={index}
                  cx={circleSize / 2}
                  cy={circleSize / 2}
                  r={radius}
                  stroke={segment.color}
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={`${dash} ${circumference}`}
                  strokeDashoffset={-segment.offset}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <div className="mb-10">
            <div className="flex items-baseline gap-3">
              <span
                className="text-7xl font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                {totalSectors}
              </span>
              <span
                className="text-2xl"
                style={{ color: theme.colors.text.primary }}
              >
                sectors
              </span>
            </div>
            <p
              className="text-base mt-2"
              style={{ color: theme.colors.text.primary }}
            >
              Total Sectors
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-5">
            {sectors.map((sector, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-4 h-4 rounded flex-shrink-0"
                    style={{ backgroundColor: sector.color }}
                  />
                  <span
                    className="text-base"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {sector.name}
                  </span>
                </div>
                <span
                  className="text-base font-semibold ml-4"
                  style={{ color: theme.colors.text.primary }}
                >
                  {sector.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
