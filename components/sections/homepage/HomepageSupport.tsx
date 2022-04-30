import styled from "styled-components";

// Components
import { Container } from "../../../styles/layouts/Container";
import SectionHeader from "../../commons/sections/SectionHeader";
import Card from "../../commons/disclosure/Card";

// Media Queries
import { device } from "../../../styles/layouts/devices";

// Data
import { supportHeading } from "../../../data/homepage/supportHeading.data";
import { faqsCards } from "../../../data/homepage/FAQsCards.data";
import { faqs } from "../../../data/homepage/FAQs.data";
import Accordion from "../../commons/disclosure/Accordion";

const HomepageSupport = () => {
  return (
    <Container>
      <StyledSupportContainer>
        <SectionHeader
          subtitle={supportHeading.subtitle}
          title={supportHeading.title}
          body={supportHeading.body}
        />

        <StyledFAQsContainer>
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </StyledFAQsContainer>

        <StyledCardContainer>
          {faqsCards.map((card) => (
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
      </StyledSupportContainer>
    </Container>
  );
};

const StyledSupportContainer = styled.div`
  background-image: url("/images/sections/support/bg.svg");
  background-repeat: no-repeat;
  background-size: 75%;
  background-position: bottom center;

  @media ${device.tablet} {
    background-size: 100%;
  }
`;

const StyledFAQsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(15.625rem, 62.75rem);
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media ${device.laptopL} {
    grid-template-columns: 1fr;
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
    gap: 1.5rem;
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
export default HomepageSupport;
