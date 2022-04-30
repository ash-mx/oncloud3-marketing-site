import styled from "styled-components";

// Components
import { Container } from "../../../styles/layouts/Container";
import Card from "../../commons/disclosure/Card";

// Media Queries
import { device } from "../../../styles/layouts/devices";

// Data
import { flexibleHeading } from "../../../data/homepage/flexibleHeading.data";
import { flexibleCards } from "../../../data/homepage/flexibleCards.data";
import SectionHeader from "../../commons/sections/SectionHeader";

// Data

const HomepageFlexible = () => {
  return (
    <Container>
      <StyledFlexibleContainer>
        <SectionHeader
          subtitle={flexibleHeading.subtitle}
          title={flexibleHeading.title}
          body={flexibleHeading.body}
        />

        <StyledCardContainer>
          {flexibleCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              body={card.body}
              bg={card.bg}
              imageSrc={card.imageSrc}
              url={card.url}
              themeColor={card.themeColor}
            />
          ))}
        </StyledCardContainer>
      </StyledFlexibleContainer>
    </Container>
  );
};

const StyledFlexibleContainer = styled.div`
  background-image: url("/images/sections/flexible/bg.svg");
  background-repeat: no-repeat;
  background-size: 62%;
  background-position: bottom center;

  padding-bottom: 12.5rem;

  @media ${device.tablet} {
    background-size: 100%;
  }
`;

const StyledCardContainer = styled.div`
  /* Display */
  display: grid;
  grid-template-columns: repeat(2, minmax(18.75rem, 30.625rem));
  justify-content: center;

  gap: 1.5rem;

  /* Box Model */
  margin-bottom: 5.5rem;

  @media ${device.mobileL} {
    margin-bottom: 5rem;
  }

  /* Typography */
  /* Manipulations */
  /* Misc */

  @media ${device.desktop} {
    column-gap: unset;
    row-gap: unset;
    gap: 2.5rem;
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export default HomepageFlexible;
