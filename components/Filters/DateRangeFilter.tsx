"use client";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { theme } from "@/styles/theme";

interface DateRangeFilterProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
}

export const DateRangeFilter: React.FC<DateRangeFilterProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className="mb-6">
      <div
        className="flex items-center gap-3 py-3 px-4 rounded-lg date-picker-wrapper"
        style={{ backgroundColor: theme.colors.cardBg }}
      >
        <DatePicker
          selected={startDate}
          onChange={onStartDateChange}
          selectsStart
          startDate={startDate || undefined}
          endDate={endDate || undefined}
          placeholderText="Start date"
          dateFormat="dd/MM/yyyy"
          className="flex-1 bg-transparent outline-none text-sm"
          wrapperClassName="flex-1"
        />
        <span style={{ color: theme.colors.text.secondary }}>-</span>
        <DatePicker
          selected={endDate}
          onChange={onEndDateChange}
          selectsEnd
          startDate={startDate || undefined}
          endDate={endDate || undefined}
          minDate={startDate || undefined}
          placeholderText="End date"
          dateFormat="dd/MM/yyyy"
          className="flex-1 bg-transparent outline-none text-sm"
          wrapperClassName="flex-1"
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.colors.text.secondary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>

      {/* Custom styles for react-datepicker */}
      <style jsx global>{`
        .date-picker-wrapper input {
          color: ${theme.colors.text.secondary} !important;
        }

        .date-picker-wrapper input::placeholder {
          color: ${theme.colors.text.secondary} !important;
          opacity: 0.7;
        }

        .react-datepicker {
          background-color: ${theme.colors.cardBg} !important;
          border: 1px solid ${theme.colors.background} !important;
          font-family: inherit;
        }
        .react-datepicker__header {
          background-color: ${theme.colors.background} !important;
          border-bottom: 1px solid ${theme.colors.background} !important;
        }
        .react-datepicker__current-month,
        .react-datepicker__day-name {
          color: ${theme.colors.text.primary} !important;
        }
        .react-datepicker__day {
          color: ${theme.colors.text.secondary} !important;
        }
        .react-datepicker__day:hover {
          background-color: ${theme.colors.secondary} !important;
          color: ${theme.colors.text.primary} !important;
        }
        .react-datepicker__day--selected {
          background-color: ${theme.colors.secondary} !important;
          color: ${theme.colors.text.primary} !important;
        }
        .react-datepicker__day--keyboard-selected {
          background-color: ${theme.colors.secondary} !important;
        }
        .react-datepicker__day--in-range {
          background-color: ${theme.colors.secondary}80 !important;
        }
        .react-datepicker__navigation-icon::before {
          border-color: ${theme.colors.text.secondary} !important;
        }
        .react-datepicker__navigation:hover *::before {
          border-color: ${theme.colors.text.primary} !important;
        }
      `}</style>
    </div>
  );
};
