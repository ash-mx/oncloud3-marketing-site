import styled from "styled-components";

// Components
import Subtitle from "../typography/Subtitle";
import Heading from "../typography/Heading";
import BodyText from "../typography/BodyText";

// Media Queries
import { device } from "../../../styles/layouts/devices";

type Props = {
  subtitle: string;
  title: string;
  body: string;
};

const SectionHeader = ({ subtitle, title, body }: Props) => {
  return (
    <StyledHeadingContainer>
      <Subtitle size="three" color="gradientFive">
        {subtitle}
      </Subtitle>
      <Heading as="h2" headingColor="white">
        {title}
      </Heading>
      <BodyText bodySize="two" bodyColor="lightGray">
        {body}
      </BodyText>
    </StyledHeadingContainer>
  );
};

const StyledHeadingContainer = styled.div`
  text-align: center;
  max-width: 54.5rem;
  margin: 0 auto 4rem auto;

  p {
    &:first-of-type {
      margin-bottom: 1rem;

      @media ${device.laptopL} {
        margin-bottom: 0.5rem;
      }
    }
  }

  h2 {
    margin-bottom: 1.5rem;
  }
`;
export default SectionHeader;
