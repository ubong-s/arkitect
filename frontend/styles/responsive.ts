const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
  large: '1100px',
  hd: '1440px',
};

const mobile = `@media screen and (min-width: ${breakpoints.mobile})`;
const tablet = `@media screen and (min-width: ${breakpoints.tablet})`;
const desktop = `@media screen and (min-width: ${breakpoints.desktop})`;
const large = `@media screen and (min-width: ${breakpoints.large})`;
const hd = `@media screen and (min-width: ${breakpoints.hd})`;

const media = {
  mobile,
  tablet,
  desktop,
  large,
  hd,
};

export default media;
