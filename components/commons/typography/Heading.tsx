import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { device } from "../../../styles/layouts/devices";

type Props = {
  children: ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headingColor: "white" | "lightGray";
};

const Heading = ({ as, headingColor, children }: Props) => {
  if (as === "h2") {
    return <StyledH2 headingColor={headingColor}>{children}</StyledH2>;
  }

  if (as === "h3") {
    return <StyledH3 headingColor={headingColor}>{children}</StyledH3>;
  }

  if (as === "h4") {
    return <StyledH4 headingColor={headingColor}>{children}</StyledH4>;
  }

  if (as === "h5") {
    return <StyledH5 headingColor={headingColor}>{children}</StyledH5>;
  }

  if (as === "h6") {
    return <StyledH6 headingColor={headingColor}>{children}</StyledH6>;
  }

  return (
    <>
      <StyledH1 headingColor={headingColor}>{children}</StyledH1>
    </>
  );
};

type StyledProps = {
  headingColor: "white" | "lightGray";
};

const baseStyles = css<StyledProps>`
  color: ${(props) =>
    props.headingColor === "white" ? "var(--neutral-0)" : "var(--neutral-00)"};
`;

const StyledH1 = styled.h1<StyledProps>`
  font-size: 4rem;
  line-height: 4.5rem;
  ${baseStyles};

  @media ${device.mobileL} {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`;

const StyledH2 = styled.h2<StyledProps>`
  font-size: 3.5rem;
  line-height: 4rem;
  ${baseStyles};

  @media ${device.mobileL} {
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

const StyledH3 = styled.h3<StyledProps>`
  font-size: 3rem;
  line-height: 3.5rem;
  ${baseStyles};

  @media ${device.mobileL} {
    font-size: 2.625rem;
    line-height: 3rem;
  }
`;

const StyledH4 = styled.h4<StyledProps>`
  font-size: 2.5rem;
  line-height: 3rem;
  ${baseStyles};
`;

const StyledH5 = styled.h5<StyledProps>`
  font-size: 2rem;
  line-height: 2.5rem;
  ${baseStyles};
`;

const StyledH6 = styled.h6<StyledProps>`
  font-size: 1.5rem;
  line-height: 2rem;
  ${baseStyles};
`;

export default Heading;
