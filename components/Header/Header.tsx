import React from "react";
import { theme } from "@/styles/theme";
import { HeaderProps } from "@/types/dashboard.types";

export const Header: React.FC<HeaderProps> = ({ title, breadcrumb }) => {
  return (
    <div className="px-8 py-6" style={{ backgroundColor: theme.colors.cardBg }}>
      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: theme.colors.text.primary }}
      >
        {title}
      </h1>
      <div
        className="flex items-center gap-2"
        style={{ color: theme.colors.text.secondary }}
      >
        {breadcrumb.map((item, index) => (
          <React.Fragment key={index}>
            <span>{item}</span>
            {index < breadcrumb.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
