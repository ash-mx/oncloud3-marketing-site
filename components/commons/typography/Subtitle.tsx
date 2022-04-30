import { ReactNode } from "react";
import styled from "styled-components";

// Media Queries
import { device } from "../../../styles/layouts/devices";

// Helpers
import {
  handleFontSize,
  handleLineHeight,
  handleLetterSpacing,
  handleColor,
  handleFontSizeMDtoSM,
  handleLineHeightMDtoSM,
  handleLetterSpacingMDtoSM,
  handleFontSizeXS,
  handleLineHeightXS,
  handleLetterSpacingXS,
} from "../../../utils/style-handlers/typographyStyleHandler";

type Props = {
  children: ReactNode;
  size: "one" | "two" | "three" | "four" | "five";
  color:
    | "white"
    | "black"
    | "primaryOne"
    | "primaryTwo"
    | "gradientOne"
    | "gradientTwo"
    | "gradientThree"
    | "gradientFour"
    | "gradientFive";
};

const Subtitle = ({ children, size, color }: Props) => {
  return (
    <>
      <StyledSubtitle size={size} color={color}>
        {children}
      </StyledSubtitle>
    </>
  );
};

type StyledProps = {
  size: "one" | "two" | "three" | "four" | "five";
  color:
    | "white"
    | "black"
    | "primaryOne"
    | "primaryTwo"
    | "gradientOne"
    | "gradientTwo"
    | "gradientThree"
    | "gradientFour"
    | "gradientFive";
};

const StyledSubtitle = styled.p<StyledProps>`
  /* Box Model */
  margin: 0;

  /* Typography */
  font-family: var(--font-medium);
  font-size: ${(props) => handleFontSize(props.size)};
  line-height: ${(props) => handleLineHeight(props.size)};
  letter-spacing: ${(props) => handleLetterSpacing(props.size)};

  /* Manipulations */
  background: ${(props) => handleColor(props.color)};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${(props) => handleColor(props.color)};
  text-transform: uppercase;

  @media ${device.tablet} {
    /* Typography */
    font-family: var(--font-medium);
    font-size: ${(props) => handleFontSizeMDtoSM(props.size)};
    line-height: ${(props) => handleLineHeightMDtoSM(props.size)};
    letter-spacing: ${(props) => handleLetterSpacingMDtoSM(props.size)};
  }

  @media ${device.mobileS} {
    /* Typography */
    font-family: var(--font-medium);
    font-size: ${(props) => handleFontSizeXS(props.size)};
    line-height: ${(props) => handleLineHeightXS(props.size)};
    letter-spacing: ${(props) => handleLetterSpacingXS(props.size)};
  }
`;

export default Subtitle;
