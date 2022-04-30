// Style Handlers
export const handleFontSize = (size: string) => {
  switch (size) {
    case "LG":
      return "1.125rem";
    case "MD":
      return "1rem";
    case "SM":
      return "0.875rem";
    case "XS":
      return "0.75rem";

    default:
      return "1rem";
  }
};

export const handleLineHeight = (size: string) => {
  switch (size) {
    case "LG":
      return "1.5rem";
    case "MD":
      return "1.5rem";
    case "SM":
      return "1.5rem";
    case "XS":
      return "1rem";

    default:
      return "1.5rem";
  }
};

export const handlePadding = (size: string) => {
  switch (size) {
    case "LG":
      return "1rem 2rem";
    case "MD":
      return "0.75rem 2rem";
    case "SM":
      return "0.5rem 1.5rem";
    case "XS":
      return "0.5rem 1rem";

    default:
      return "0.75rem 2rem";
  }
};

export const handleBGColor = (btnType: string) => {
  switch (btnType) {
    case "primaryOne":
      return "var(--primary-one)";
    case "primaryTwo":
      return "var(--primary-two)";
    case "secondary":
      return "var(--neutral-0)";
    case "secondaryBorder":
      return "var(--neutral-1000)";
    case "stealth":
      return "var(--neutral-1000)";
    case "gradientOne":
      return "var(--neutral-1000)";
    case "gradientTwo":
      return "var(--neutral-1000)";
    case "gradientThree":
      return "var(--neutral-1000)";

    default:
      return "var(--neutral-1000)";
  }
};

export const handleBorderColor = (btnType: string) => {
  switch (btnType) {
    case "primaryOne":
      return "var(--primary-one)";
    case "primaryTwo":
      return "var(--primary-two)";
    case "secondary":
      return "var(--neutral-0)";
    case "secondaryBorder":
      return "var(--neutral-0)";
    case "stealth":
      return "transparent";
    case "gradientOne":
      return "var(--gradient-one)";
    case "gradientTwo":
      return "var(--gradient-two)";
    case "gradientThree":
      return "var(--gradient-three)";

    default:
      return "var(--neutral-1000)";
  }
};

export const handleDisplay = (display: string) => {
  switch (display) {
    case "default":
      return "inline-flex";
    case "block":
      return "block";
    case "inline-flex":
      return "inline-flex";

    default:
      return "inline-flex";
  }
};

export const handleDisplayMobile = (display: string) => {
  switch (display) {
    case "default":
      return "block";
    case "block":
      return "block";
    case "inline-flex":
      return "inline-flex";

    default:
      return "inline-flex";
  }
};
