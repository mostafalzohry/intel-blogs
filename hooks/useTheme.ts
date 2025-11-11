import { theme } from "@/styles/theme";
import { AccentColor } from "@/styles/theme";

export const useTheme = () => {
  const getAccentColor = (colorName: AccentColor): string => {
    return theme.colors.accent[colorName];
  };

  return {
    colors: theme.colors,
    getAccentColor,
  };
};
