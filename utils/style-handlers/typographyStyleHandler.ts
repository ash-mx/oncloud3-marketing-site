// Typography - Globals
export const handleColor = (color: string) => {
  switch (color) {
    case "white":
      return "var(--neutral-0)";
    case "black":
      return "var(--neutral-1000)";
    case "lightGray":
      return "var(--neutral-300)";
    case "gray":
      return "var(--neutral-400)";
    case "darkGray":
      return "var(--neutral-600)";
    case "primaryOne":
      return "var(--primary-one)";
    case "primaryTwo":
      return "var(--primary-two)";
    case "gradientOne":
      return "var(--gradient-one)";
    case "gradientTwo":
      return "var(--gradient-two)";
    case "gradientThree":
      return "var(--gradient-three)";
    case "gradientFour":
      return "var(--gradient-four)";
    case "gradientFive":
      return "var(--gradient-five)";

    default:
      return "var(--neutral-0)";
  }
};

// Subtitle - Font Size - XXXL -> LG
export const handleFontSize = (size: string) => {
  switch (size) {
    case "one":
      return "1.25rem";
    case "two":
      return "1.125rem";
    case "three":
      return "1rem";
    case "four":
      return "0.875rem";
    case "five":
      return "0.75rem";

    default:
      return "1rem";
  }
};

// Subtitle - Line Height - XXXL -> LG
export const handleLineHeight = (size: string) => {
  switch (size) {
    case "one":
      return "2rem";
    case "two":
      return "1.5rem";
    case "three":
      return "1.5rem";
    case "four":
      return "1.5rem";
    case "five":
      return "1rem";

    default:
      return "1.5rem";
  }
};

// Subtitle - Letter Spacing - XXXL -> LG
export const handleLetterSpacing = (size: string) => {
  switch (size) {
    case "one":
      return "0.375rem";
    case "two":
      return "0.375rem";
    case "three":
      return "0.375rem";
    case "four":
      return "0.375rem";
    case "five":
      return "0.25rem";

    default:
      return "0.375rem";
  }
};

// Subtitle - Font Size - MD -> SM
export const handleFontSizeMDtoSM = (size: string) => {
  switch (size) {
    case "one":
      return "1rem";
    case "two":
      return "0.875rem";
    case "three":
      return "0.875rem";
    case "four":
      return "0.75rem";
    case "five":
      return "0.75rem";

    default:
      return "0.875rem";
  }
};

// Subtitle - Line Height - MD -> SM
export const handleLineHeightMDtoSM = (size: string) => {
  switch (size) {
    case "one":
      return "1.5rem";
    case "two":
      return "1.5rem";
    case "three":
      return "1.5rem";
    case "four":
      return "1rem";
    case "five":
      return "1rem";

    default:
      return "1.5rem";
  }
};

// Subtitle - Letter Spacing - MD -> SM
export const handleLetterSpacingMDtoSM = (size: string) => {
  switch (size) {
    case "one":
      return "0.375rem";
    case "two":
      return "0.375rem";
    case "three":
      return "0.375rem";
    case "four":
      return "0.25rem";
    case "five":
      return "0.25rem";

    default:
      return "0.375rem";
  }
};

// Subtitle - Font Size - XS
export const handleFontSizeXS = (size: string) => {
  switch (size) {
    case "one":
      return "0.75rem";
    case "two":
      return "0.75rem";
    case "three":
      return "0.75rem";
    case "four":
      return "0.75rem";
    case "five":
      return "0.75rem";

    default:
      return "0.75rem";
  }
};

// Subtitle - Line Height - XS
export const handleLineHeightXS = (size: string) => {
  switch (size) {
    case "one":
      return "1rem";
    case "two":
      return "1rem";
    case "three":
      return "1rem";
    case "four":
      return "1rem";
    case "five":
      return "1rem";

    default:
      return "1rem";
  }
};

// Subtitle - Letter Spacing - XS
export const handleLetterSpacingXS = (size: string) => {
  switch (size) {
    case "one":
      return "0.375rem";
    case "two":
      return "0.375rem";
    case "three":
      return "0.375rem";
    case "four":
      return "0.375rem";
    case "five":
      return "0.25rem";

    default:
      return "0.375rem";
  }
};

// Display - Globals

// Display - Font Size - XXXL -> XL
export const handleDisplayFontSize = (showAs: string) => {
  switch (showAs) {
    case "one":
      return "7.5rem";
    case "two":
      return "6.5rem";
    case "three":
      return "5.5rem";

    default:
      return "5.5rem";
  }
};

// Display - Line Height - XXXL -> XL
export const handleDisplayLineHeight = (showAs: string) => {
  switch (showAs) {
    case "one":
      return "8rem";
    case "two":
      return "7rem";
    case "three":
      return "6rem";

    default:
      return "6rem";
  }
};

// Display - Font Size - LG
export const handleDisplayFontSizeLG = (showAs: string) => {
  switch (showAs) {
    case "one":
      return "6rem";
    case "two":
      return "5rem";
    case "three":
      return "4rem";

    default:
      return "5rem";
  }
};

// Display - Line Height - LG
export const handleDisplayLineHeightLG = (showAs: string) => {
  switch (showAs) {
    case "one":
      return "6.5rem";
    case "two":
      return "5.5rem";
    case "three":
      return "4.5rem";

    default:
      return "5.5rem";
  }
};

// Display - Font Size - MD
export const handleDisplayFontSizeMD = (showAs: string) => {
  switch (showAs) {
    case "one":
      return "4rem";
    case "two":
      return "3.5rem";
    case "three":
      return "3rem";

    default:
      return "3.5rem";
  }
};

// Display - Line Height - MD
export const handleDisplayLineHeightMD = (showAs: string) => {
  switch (showAs) {
    case "one":
      return "4.5rem";
    case "two":
      return "4rem";
    case "three":
      return "3.5rem";

    default:
      return "4rem";
  }
};

// Display - Font Size - SM
export const handleDisplayFontSizeSM = (showAs: string) => {
  switch (showAs) {
    case "one":
      return "3.5rem";
    case "two":
      return "3rem";
    case "three":
      return "2.5rem";

    default:
      return "3rem";
  }
};

// Display - Line Height - SM
export const handleDisplayLineHeightSM = (showAs: string) => {
  switch (showAs) {
    case "one":
      return "4rem";
    case "two":
      return "3.5rem";
    case "three":
      return "3rem";

    default:
      return "3.5rem";
  }
};

// Display - Font Size - XS
export const handleDisplayFontSizeXS = (showAs: string) => {
  switch (showAs) {
    case "one":
      return "2.5rem";
    case "two":
      return "2rem";
    case "three":
      return "1.5rem";

    default:
      return "2rem";
  }
};

// Display - Line Height - XS
export const handleDisplayLineHeightXS = (showAs: string) => {
  switch (showAs) {
    case "one":
      return "3rem";
    case "two":
      return "2.5rem";
    case "three":
      return "2rem";

    default:
      return "2.5rem";
  }
};

// BodyText - Font Size - XXXL - LG
export const handleBodyTextFontSize = (bodySize: string) => {
  switch (bodySize) {
    case "one":
      return "1.25rem";
    case "two":
      return "1.125rem";
    case "three":
      return "1rem";
    case "four":
      return "0.875rem";
    case "five":
      return "0.75rem";

    default:
      return "1rem";
  }
};

// BodyText - Line Height - XXXL - LG
export const handleBodyTextLineHeight = (bodySize: string) => {
  switch (bodySize) {
    case "one":
      return "2rem";
    case "two":
      return "1.5rem";
    case "three":
      return "1.5rem";
    case "four":
      return "1.5rem";
    case "five":
      return "1rem";

    default:
      return "1.5rem";
  }
};
