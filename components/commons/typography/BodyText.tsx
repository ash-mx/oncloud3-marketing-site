import { ReactNode } from "react";
import styled from "styled-components";
import { device } from "../../../styles/layouts/devices";
import {
  handleBodyTextFontSize,
  handleBodyTextLineHeight,
  handleColor,
} from "../../../utils/style-handlers/typographyStyleHandler";

type Props = {
  children: ReactNode;
  bodySize: "one" | "two" | "three" | "four" | "five";
  bodyColor: "white" | "lightGray" | "Gray" | "darkGray";
};

const BodyText = ({ children, bodySize, bodyColor }: Props) => {
  return (
    <>
      <StyledBody bodySize={bodySize} bodyColor={bodyColor}>
        {children}
      </StyledBody>
    </>
  );
};

type StyledProps = {
  bodySize: "one" | "two" | "three" | "four" | "five";
  bodyColor: "white" | "lightGray" | "Gray" | "darkGray";
};

const StyledBody = styled.p<StyledProps>`
  /* Display */
  /* Box Model */
  margin: 0;
  /* Typography */
  font-size: ${(props) => handleBodyTextFontSize(props.bodySize)};
  line-height: ${(props) => handleBodyTextLineHeight(props.bodySize)};
  /* Manipulation */
  color: ${(props) => handleColor(props.bodyColor)};
  /* Misc */
`;

export default BodyText;
