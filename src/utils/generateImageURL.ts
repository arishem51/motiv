export const generateImage = (email: string | null | undefined = "default") => {
  return `https://i.pravatar.cc/48?u=${email}`;
};
