export const theme = {
  colors: {
    primary: "#1e3a8a",
    secondary: "#1e40af",
    background: "#041433",
    cardBg: "#1D2D4A",
    text: {
      primary: "#f1f5f9",
      secondary: "#94a3b8",
    },
    accent: {
      cyan: "#06b6d4",
      purple: "#a855f7",
      orange: "#f97316",
      yellow: "#fbbf24",
      green: "#10b981",
      red: "#ef4444",
    },
  },
} as const;

export type ThemeColors = typeof theme.colors;
export type AccentColor = keyof typeof theme.colors.accent;
