import { AppearanceSetting } from "../index";

const JOPLIN_THEME_LIGHT = 1;
const JOPLIN_THEME_SOLARIZED_LIGHT = 3;

export const isJoplinThemeDark = (theme: number) =>
  theme !== JOPLIN_THEME_LIGHT && theme !== JOPLIN_THEME_SOLARIZED_LIGHT;

export const resolveAppearance = (
  appearance: AppearanceSetting,
  joplinTheme: number,
  themeAutoDetect: boolean
): AppearanceSetting => {
  if (appearance !== "auto" || themeAutoDetect) return appearance;
  return isJoplinThemeDark(joplinTheme) ? "dark" : "light";
};

export const hasThemeMismatch = (
  appearance: AppearanceSetting,
  joplinTheme: number
) =>
  appearance !== "auto" &&
  isJoplinThemeDark(joplinTheme) !== (appearance === "dark");
