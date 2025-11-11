import React, { useState } from "react";
import { theme } from "@/styles/theme";

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onToggle: (option: string) => void;
  isOpen?: boolean;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selectedOptions,
  onToggle,
  isOpen: initialOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors"
        style={{
          backgroundColor: theme.colors.cardBg,
          color: theme.colors.text.primary,
        }}
      >
        <span className="font-medium">{title}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.colors.text.secondary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 px-4 py-2 space-y-2 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 cursor-pointer py-2 hover:opacity-80 transition-opacity"
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => onToggle(option)}
                className="w-4 h-4 rounded cursor-pointer"
                style={{ accentColor: theme.colors.secondary }}
              />
              <span
                className="text-sm"
                style={{ color: theme.colors.text.secondary }}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
