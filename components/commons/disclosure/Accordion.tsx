import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import BodyText from "../typography/BodyText";

type Props = {
  question: string;
  answer: string;
};

const Accordion = ({ question, answer }: Props) => {
  const [isClosed, setIsClosed] = useState(true);

  const handleClick = () => {
    setIsClosed(!isClosed);
  };

  return (
    <StyledAccordionContainer>
      <StyledTitleContainer onClick={handleClick}>
        <h3>{question}</h3>
        <StyledCloseButton isClosed={isClosed}>
          <Image
            src="/images/icons/plus.svg"
            alt="open / close"
            height={24}
            width={24}
          />
        </StyledCloseButton>
      </StyledTitleContainer>
      <BodyTextContainer isClosed={isClosed}>
        <BodyText bodySize="three" bodyColor="lightGray">
          {answer}
        </BodyText>
      </BodyTextContainer>
    </StyledAccordionContainer>
  );
};

type StyledProps = {
  isClosed: boolean;
};

const StyledAccordionContainer = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--neutral-900);
  border-radius: 8px;
  border: 1px solid var(--neutral-800);
  box-shadow: inset 0px 2px 0px rgba(255, 255, 255, 0.1);

  p {
    margin-top: 1rem;
  }
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-family: var(--font-medium);
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledCloseButton = styled.div<StyledProps>`
  padding: 0;
  border: none;
  background: none;
  transition: transform 0.25s ease;
  transform: ${(props) => (props.isClosed ? "rotate(0)" : "rotate(45deg)")};
`;

const BodyTextContainer = styled.div<StyledProps>`
  display: ${(props) => (props.isClosed ? "none" : "block")};
`;
export default Accordion;
