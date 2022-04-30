import styled from "styled-components";

// Components
import { Container } from "../../../styles/layouts/Container";
import Button from "../../commons/forms/Button";

// Media Queries
import { device } from "../../../styles/layouts/devices";

// Hooks
import { useResize } from "../../../hooks/useResize";

// Data
import { chainsHeading } from "../../../data/homepage/chainsHeading.data";
import { chainsFooter } from "../../../data/homepage/chainsFooter.data";
import Image from "next/image";
import SectionHeader from "../../commons/sections/SectionHeader";

const HomepageChains = () => {
  const { isDesktop } = useResize();

  return (
    <Container>
      <SectionHeader
        subtitle={chainsHeading.subtitle}
        title={chainsHeading.title}
        body={chainsHeading.body}
      />

      <StyledImageContainer>
        {isDesktop && (
          <Image
            src="/images/sections/chains/Chains-Desktop.png"
            alt="chains"
            height={412}
            width={760}
          />
        )}

        {!isDesktop && (
          <Image
            src="/images/sections/chains/Chains-Mobile.png"
            alt="chains"
            height={634}
            width={400}
          />
        )}
      </StyledImageContainer>

      <StyledFooterContainer>
        <Button size="MD" btnType="gradientOne" display="default">
          {chainsFooter.btnText}
        </Button>
      </StyledFooterContainer>
    </Container>
  );
};

const StyledImageContainer = styled.div`
  text-align: center;

  @media ${device.mobileL} {
    margin-bottom: 5rem;
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
export default HomepageChains;
