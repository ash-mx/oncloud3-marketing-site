import Image from "next/image";
import { useState } from "react";
import styled, { css } from "styled-components";
import { device } from "../../../styles/layouts/devices";

// Helpers
import {
  handleInputFontSize,
  handleInputPadding,
} from "../../../utils/style-handlers/inputStyleHandlers";

type Props = {
  iconLeft?: boolean;
  iconImg?: string;
  inputType: string;
  inputSize: "LG" | "MD" | "SM";
  inputPlaceholder?: string;
};

const Input = ({
  iconLeft,
  inputType = "text",
  iconImg,
  inputSize,
  inputPlaceholder,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  if (iconLeft) {
    return (
      <StyledInputIcon
        inputSize={inputSize}
        style={{ borderColor: isFocused ? "#525464" : "#292a31" }}
      >
        <Image
          src={`/images/components/icons/${iconImg}.svg`}
          alt="Input Icon"
          height={24}
          width={24}
        />
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </StyledInputIcon>
    );
  }

  return (
    <StyledInput
      type={inputType}
      inputSize={inputSize}
      placeholder={inputPlaceholder}
    />
  );
};

type StyledProps = {
  inputSize: "LG" | "MD" | "SM";
};

const baseInput = css<StyledProps>`
  /* Display */

  /* Box Model */
  padding: ${(props) => handleInputPadding(props.inputSize)};

  /* Typography */
  font-family: var(--font-regular);
  font-size: ${(props) => handleInputFontSize(props.inputSize)};
  line-height: 1.5rem;

  /* Manipulations */
  background-color: var(--neutral-900);
  color: var(--neutral-0);
  outline: none;

  /* Misc */
  transition: all 0.25s ease;
  ::placeholder {
    color: var(--neutral-500);
  }

  @media ${device.mobileL} {
    display: block;
    width: 100%;
  }
`;

const StyledInput = styled.input<StyledProps>`
  ${baseInput};
  border: 2px solid var(--neutral-700);
  border-radius: 4px;

  :focus {
    border-color: var(--neutral-400);
  }
`;

const StyledInputIcon = styled.div<StyledProps>`
  /* Display */
  display: flex;
  align-items: center;

  /* Box Model */
  border: 2px solid var(--neutral-700);
  border-radius: 4px;
  padding-left: 1rem;

  /* Manipulations */
  background-color: var(--neutral-900);

  /* Misc */
  transition: all 0.25s ease;

  @media ${device.mobileL} {
    width: 100%;
  }

  input {
    ${baseInput};
    outline: none;
    border: none;
  }
`;

export default Input;
