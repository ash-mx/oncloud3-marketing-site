import styled from "styled-components";

type Props = {
  title: string;
};

const FooterTitle = ({ title }: Props) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
    </>
  );
};

const StyledTitle = styled.p`
  color: var(--neutral-300);
  font-family: var(--font-medium);
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
`;

export default FooterTitle;
