export const handleInputFontSize = (size: string) => {
  switch (size) {
    case "LG":
      return "1.125rem";
    case "MD":
      return "1rem";
    case "SM":
      return "0.875rem";

    default:
      return "1rem";
  }
};

export const handleInputPadding = (size: string) => {
  switch (size) {
    case "LG":
      return "1rem";
    case "MD":
      return "0.75rem 1rem";
    case "SM":
      return "0.5rem 1rem";

    default:
      return "1rem";
  }
};
