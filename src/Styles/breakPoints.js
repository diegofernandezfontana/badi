const size = {
  mobile: "360px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px"
};

const breakPoints = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

export default breakPoints;
