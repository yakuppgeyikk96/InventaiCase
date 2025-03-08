export const getSizeClass = (component: string, size: "sm" | "md" | "lg") => {
  if (!size || size === "md") return "";

  return `${component}-${size}`;
};

export const getAlignmentClass = (
  alignment?: "start" | "center" | "end"
): string => {
  switch (alignment) {
    case "start":
      return "";
    case "center":
      return "justify-content-center";
    case "end":
      return "justify-content-end";
    default:
      return "justify-content-center";
  }
};
