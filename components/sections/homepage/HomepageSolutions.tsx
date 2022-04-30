import styled from "styled-components";

// Components
import { Container } from "../../../styles/layouts/Container";
import Card from "../../commons/disclosure/Card";
import Button from "../../commons/forms/Button";

// Media Queries
import { device } from "../../../styles/layouts/devices";

// Data
import { solutionsHeaing } from "../../../data/homepage/solutionsHeading.data";
import { solutionsCards } from "../../../data/homepage/solutionsCards.data";
import { solutionsFooter } from "../../../data/homepage/solutionsFooter.data";
import SectionHeader from "../../commons/sections/SectionHeader";

const HomepageSolutions = () => {
  return (
    <Container>
      <StyledSolutionsSection>
        <SectionHeader
          subtitle={solutionsHeaing.subtitle}
          title={solutionsHeaing.title}
          body={solutionsHeaing.body}
        />

        <StyledCardContainer>
          {solutionsCards.map((card) => (
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

        <StyledFooterContainer>
          <Button size="MD" btnType="gradientOne" display="default">
            {solutionsFooter.btnText}
          </Button>
        </StyledFooterContainer>
      </StyledSolutionsSection>
    </Container>
  );
};

const StyledSolutionsSection = styled.section`
  background-image: url("/images/sections/solution/solutions-bg.svg");
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: bottom center;

  @media ${device.tablet} {
    background-size: 100%;
  }
`;

const StyledCardContainer = styled.div`
  /* Display */
  display: grid;
  grid-template-columns: repeat(3, minmax(18.75rem, 26.25rem));
  justify-content: center;
  /* gap: 6rem; */
  column-gap: 6.5rem;
  row-gap: 2.5rem;

  /* Box Model */
  margin-bottom: 5.5rem;

  /* Typography */
  /* Manipulations */
  /* Misc */

  @media ${device.desktop} {
    column-gap: unset;
    row-gap: unset;
    gap: 2.5rem;
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media ${device.mobileL} {
    grid-template-columns: minmax(17.5rem, 22.5rem);
    column-gap: unset;
    row-gap: 2.5rem;
  }
`;

const StyledFooterContainer = styled.div`
  text-align: center;
  max-width: 31.25rem;
  margin: 0 auto 12.5rem auto;

  @media ${device.tablet} {
    margin: 0 auto 5rem auto;
  }
`;

export default HomepageSolutions;
