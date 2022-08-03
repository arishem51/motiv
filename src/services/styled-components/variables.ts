export const COLORS = {
  dark: "#242731",
  dark2: "#5F6165",
  white: "#E0E4E7",
  white2: "#F3F5F8",
  purple: "#A162F7",
  blue: "#2884FF",
  yellow: "#F6CC0D",
  red: "#FF6370",
  green: "#70CF97",
  orange: "#FF764C",
} as const;

export const SIZE = [8, 10, 12, 16, 24, 30, 32, 64] as const;

export const createSizeVariables = () => {
  return SIZE.map((item) => {
    return `--size-${item}: ${item}px;`;
  });
};

export const createColorVariables = () => {
  return Object.entries(COLORS).map(([name, value]) => {
    return `--color-${name}: ${value};`;
  });
};
