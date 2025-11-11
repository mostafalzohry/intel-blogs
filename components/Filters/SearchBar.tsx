import React from "react";
import { theme } from "@/styles/theme";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative mb-6">
      <svg
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={theme.colors.text.secondary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-lg outline-none text-sm"
        style={{
          backgroundColor: theme.colors.cardBg,
          color: theme.colors.text.primary,
          border: `1px solid ${theme.colors.background}`,
        }}
      />
    </div>
  );
};
