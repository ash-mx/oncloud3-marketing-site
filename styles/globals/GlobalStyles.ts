import { createGlobalStyle } from "styled-components";
import Reset from "./reset.styles";
import Base from "./base.styles";

const GlobalStyles = createGlobalStyle`
  ${Reset};
  ${Base};
`;

export default GlobalStyles;
