import React from "react";

interface FlagIconProps {
  countryCode: string;
  countryName: string;
  className?: string;
}

export const FlagIcon: React.FC<FlagIconProps> = ({
  countryCode,
  countryName,
  className = "",
}) => {
  return (
    <img
      src={`https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`}
      alt={`${countryName} flag`}
      className={`w-10 h-10 rounded-full object-cover shadow-lg ${className}`}
    />
  );
};
