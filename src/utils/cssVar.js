//find out the global style
export const cssVar = (name, fallback = "") => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  return value || fallback;
};
