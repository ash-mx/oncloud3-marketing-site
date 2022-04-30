const sizes = {
  mobileS: "320px",
  mobileM: "390px",
  mobileL: "500px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1200px",
  desktop: "1440px",
  desktopL: "2560px",
};

export const device = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
  desktopL: `(max-width: ${sizes.desktopL})`,
};
