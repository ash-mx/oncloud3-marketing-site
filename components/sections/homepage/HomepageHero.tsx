import styled from "styled-components";

// Components
import { Container } from "../../../styles/layouts/Container";
import Subtitle from "../../commons/typography/Subtitle";
import Display from "../../commons/typography/Display";
import BodyText from "../../commons/typography/BodyText";
import Input from "../../commons/forms/Input";
import Button from "../../commons/forms/Button";

// Hooks
import { useResize } from "../../../hooks/useResize";

// Data
import { hero } from "../../../data/homepage/hero.data";

// Media Queries
import { device } from "../../../styles/layouts/devices";
import { FormEvent } from "react";

const HomepageHero = () => {
  const { isDesktop } = useResize();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <StyledHomepageHero>
        <Subtitle size="one" color="gradientFive">
          {hero.subtitle}
        </Subtitle>
        <Display showAs="one" textColor="white">
          {hero.title}
        </Display>
        <BodyText bodySize={isDesktop ? "one" : "three"} bodyColor="lightGray">
          {hero.body}
        </BodyText>
        <WaitlistContainer>
          <form onSubmit={handleSubmit}>
            <Input
              inputSize="LG"
              inputType="email"
              iconLeft={true}
              iconImg="email"
              inputPlaceholder="Email address"
            />
            <Button size="LG" btnType="gradientOne" display="default">
              Join Waitlist
            </Button>
          </form>
        </WaitlistContainer>
      </StyledHomepageHero>
    </Container>
  );
};

const StyledHomepageHero = styled.section`
  /* Display */

  /* Box Model */
  padding: 10.5rem 0 12.5rem 0;
  max-width: 78.5rem;
  margin: 0 auto;

  /* Typography */
  text-align: center;

  /* Manipulations */
  background-image: url("/images/sections/heroes/BG.svg");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;

  p {
    &:first-of-type {
      margin: 0 0 1.5rem 0;
    }
  }

  h1 {
    margin: 0 0 1.5rem 0;
  }

  p {
    &:last-of-type {
      max-width: 54.375rem;
      margin: 0 auto;
    }
  }

  @media ${device.tablet} {
    margin: 0 0 1rem 0;
    padding: 7rem 0 5rem 0;
  }

  @media ${device.mobileS} {
    margin: 0 0 0.5rem 0;
  }
`;

const WaitlistContainer = styled.div`
  /* Display */

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  /* Box Model */
  margin-top: 3.5rem;

  /* Typography */

  /* Manipulations */

  /* Misc */

  @media ${device.mobileL} {
    form {
      flex-direction: column;
    }
  }

  input {
    min-width: 20rem;

    @media ${device.tablet} {
      min-width: unset;
      width: 100%;
    }
  }
`;

export default HomepageHero;
