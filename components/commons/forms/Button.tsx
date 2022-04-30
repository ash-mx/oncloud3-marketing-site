import Link from "next/link";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { device } from "../../../styles/layouts/devices";

// Helpers
import {
  handleFontSize,
  handleLineHeight,
  handlePadding,
  handleBGColor,
  handleBorderColor,
  handleDisplay,
  handleDisplayMobile,
} from "../../../utils/style-handlers/btnStyleHandlers";

type Props = {
  children?: ReactNode | JSX.Element | JSX.Element[] | string;
  url?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
  size: "LG" | "MD" | "SM" | "XS";
  btnType:
    | "primaryOne"
    | "primaryTwo"
    | "secondary"
    | "secondaryBorder"
    | "stealth"
    | "gradientOne"
    | "gradientTwo"
    | "gradientThree";
  display: "default" | "block" | "inline-flex";
  navBtn?: boolean;
};

const Button = ({
  children,
  url,
  size,
  btnType,
  iconRight,
  iconLeft,
  display = "default",
  navBtn = false,
}: Props) => {
  if (url) {
    return (
      <Link href={url}>
        <StyledLink
          size={size}
          btnType={btnType}
          iconRight={iconRight}
          iconLeft={iconLeft}
          display={display}
          navBtn={navBtn}
        >
          {children}
        </StyledLink>
      </Link>
    );
  }

  return (
    <>
      <StyledButton
        size={size}
        btnType={btnType}
        iconRight={iconRight}
        iconLeft={iconLeft}
        display={display}
        navBtn={navBtn}
      >
        {children}
      </StyledButton>
    </>
  );
};

type StyledProps = {
  size: "LG" | "MD" | "SM" | "XS";
  btnType:
    | "primaryOne"
    | "primaryTwo"
    | "secondary"
    | "secondaryBorder"
    | "stealth"
    | "gradientOne"
    | "gradientTwo"
    | "gradientThree";
  display: "default" | "block" | "inline-flex";
  navBtn?: boolean;
  iconRight?: boolean;
  iconLeft?: boolean;
};

const btn = css<StyledProps>`
  /* display */
  display: ${(props) => handleDisplay(props.display)};

  /* position */
  position: relative;

  /* box model */
  border: 2px solid transparent;
  border-radius: 3px;
  padding: ${(props) => handlePadding(props.size)};

  /* typography */
  font-family: var(--font-medium);
  font-size: ${(props) => handleFontSize(props.size)};
  line-height: ${(props) => handleLineHeight(props.size)};
  text-decoration: none;

  /* manipulation */
  background-color: ${(props) => handleBGColor(props.btnType)};
  background-clip: padding-box;
  color: ${(props) =>
    props.btnType === "secondary" ? "var(--neutral-1000)" : "var(--neutral-0)"};

  /* misc */
  transition: all 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: ${(props) => handleBorderColor(props.btnType)};
  }

  &:hover {
    cursor: pointer;
    background-color: var(--neutral-800);
    color: var(--neutral-0);
  }

  @media ${device.mobileL} {
    display: ${(props) => handleDisplayMobile(props.display)};
    width: ${(props) => (props.navBtn ? "auto" : "100%")};
  }
`;

const StyledLink = styled.a<StyledProps>`
  ${btn};
`;

const StyledButton = styled.button<StyledProps>`
  ${btn};
`;

export default Button;
