import styled from "styled-components";

// Components
import { Container } from "../../../styles/layouts/Container";
import Button from "../../commons/forms/Button";
import BodyText from "../../commons/typography/BodyText";
import Card from "../../commons/disclosure/Card";

// Media Queries
import { device } from "../../../styles/layouts/devices";

// Data
import { productsHeading } from "../../../data/homepage/productsHeading.data";
import { productsCards } from "../../../data/homepage/productsCards.data";
import { productsFooter } from "../../../data/homepage/productsFooter.data";
import SectionHeader from "../../commons/sections/SectionHeader";

const HomepageProducts = () => {
  return (
    <Container>
      <SectionHeader
        subtitle={productsHeading.subtitle}
        title={productsHeading.title}
        body={productsHeading.body}
      />

      <StyledCardContainer>
        {productsCards.map((card) => (
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
          {productsFooter.btnText}
        </Button>
        <BodyText bodySize="three" bodyColor="lightGray">
          {productsFooter.bodyText}
        </BodyText>
      </StyledFooterContainer>
    </Container>
  );
};

const StyledCardContainer = styled.div`
  /* Display */
  display: grid;
  grid-template-columns: repeat(3, minmax(18.75rem, 22.5rem));
  justify-content: center;
  /* gap: 6rem; */
  column-gap: 9.375rem;
  row-gap: 5rem;

  /* Box Model */
  margin-bottom: 5.5rem;

  /* Typography */
  /* Manipulations */
  /* Misc */

  @media ${device.desktop} {
    column-gap: unset;
    row-gap: unset;
    gap: 5rem;
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 1fr);
    gap: unset;
    column-gap: 2rem;
    row-gap: 5rem;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 5rem;
  }

  @media ${device.mobileL} {
    grid-template-columns: minmax(17.5rem, 22.5rem);
    column-gap: unset;
    row-gap: 5rem;
  }
`;

const StyledFooterContainer = styled.div`
  button {
    margin-bottom: 1.5rem;
  }

  text-align: center;
  max-width: 31.25rem;
  margin: 0 auto 12.5rem auto;

  @media ${device.tablet} {
    margin: 0 auto 5rem auto;
  }
`;

export default HomepageProducts;
