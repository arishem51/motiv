export const COLORS = {
  dark: "#242731",
  dark2: "#5F6165",
  dark4: "#7C7C8D",
  dark5: "#777E91",
  white: "#FFFFFF",
  white2: "#F3F5F8",
  white3: "#e6e8ec",
  white4: "#E0E4E7",
  white5: "#f4f5f6",
  white6: "##F5F5F5",
  white7: "#F5F4F6",
  purple: "#A162F7",
  blue: "#2884FF",
  yellow: "#F6CC0D",
  red: "#FF6370",
  green: "#70CF97",
  orange: "#FF764C",
  border: "#B1B5C3",
  checkbox: "#B1B5C4",
  facebook: "#4776d0",
} as const;

export const SIZE = [
  4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 30, 32, 40, 54, 60, 64,
] as const;

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
