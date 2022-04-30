import { ReactNode } from "react";
import styled from "styled-components";
import { device } from "../../../styles/layouts/devices";
import {
  handleColor,
  handleDisplayFontSize,
  handleDisplayFontSizeLG,
  handleDisplayFontSizeMD,
  handleDisplayFontSizeSM,
  handleDisplayFontSizeXS,
  handleDisplayLineHeight,
  handleDisplayLineHeightLG,
  handleDisplayLineHeightMD,
  handleDisplayLineHeightSM,
  handleDisplayLineHeightXS,
} from "../../../utils/style-handlers/typographyStyleHandler";

type Props = {
  children: ReactNode;
  showAs: "one" | "two" | "three";
  textColor:
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

const Display = ({ textColor, showAs, children }: Props) => {
  return (
    <>
      <StyledDisplay textColor={textColor} showAs={showAs}>
        {children}
      </StyledDisplay>
    </>
  );
};

type StyledProps = {
  showAs: "one" | "two" | "three";
  textColor:
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

const StyledDisplay = styled.h1<StyledProps>`
  /* Display */
  /* Box Model */
  margin: 0;
  /* Typography */
  font-family: var(--font-bold);
  font-size: ${(props) => handleDisplayFontSize(props.showAs)};
  line-height: ${(props) => handleDisplayLineHeight(props.showAs)};
  /* Manipulations */
  background: ${(props) => handleColor(props.textColor)};
  color: ${(props) => handleColor(props.textColor)};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Misc */

  @media ${device.laptop} {
    /* Typography */
    font-size: ${(props) => handleDisplayFontSizeLG(props.showAs)};
    line-height: ${(props) => handleDisplayLineHeightLG(props.showAs)};
  }

  @media ${device.tablet} {
    /* Typography */
    font-size: ${(props) => handleDisplayFontSizeMD(props.showAs)};
    line-height: ${(props) => handleDisplayLineHeightMD(props.showAs)};
  }

  @media ${device.mobileL} {
    /* Typography */
    font-size: ${(props) => handleDisplayFontSizeSM(props.showAs)};
    line-height: ${(props) => handleDisplayLineHeightSM(props.showAs)};
  }

  @media ${device.mobileS} {
    /* Typography */
    font-size: ${(props) => handleDisplayFontSizeXS(props.showAs)};
    line-height: ${(props) => handleDisplayLineHeightXS(props.showAs)};
  }
`;

export default Display;
