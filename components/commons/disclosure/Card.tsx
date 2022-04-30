import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  title: string;
  body: string;
  bg: boolean;
  imageSrc: string;
  themeColor: string;
  url: string;
};

const Card = ({ title, body, bg, themeColor, imageSrc, url }: Props) => {
  return (
    <StyledCardContainer bg={bg}>
      <StyledCardImage>
        <div>
          <Image
            src="/images/components/card/cover.png"
            alt="Cover"
            height={64}
            width={64}
          />
        </div>
        <div>
          <Image
            src={`/images/components/card/${imageSrc}.svg`}
            alt={title}
            height={64}
            width={64}
          />
        </div>
      </StyledCardImage>

      <StyledCardContent>
        <p>{title}</p>
        <p>{body}</p>
      </StyledCardContent>

      <StyledCTA themeColor={themeColor}>
        {url === "#" && <p>Coming Soon</p>}
        {url !== "#" && (
          <Link href={url}>
            <a>Learn More</a>
          </Link>
        )}
      </StyledCTA>
    </StyledCardContainer>
  );
};

type StyledProps = {
  bg: boolean;
};

type CTAProps = {
  themeColor: string;
};

const StyledCardContainer = styled.div<StyledProps>`
  padding: ${(props) => (props.bg ? "1.5rem" : "0")};
  background-color: ${(props) => (props.bg ? "var(--neutral-900)" : "none")};
  border-radius: 8px;
  border: ${(props) => (props.bg ? "1px solid var(--neutral-800)" : "none")};
  box-shadow: ${(props) =>
    props.bg ? "inset 0px 2px 0px rgba(255, 255, 255, 0.1)" : "none"};
`;

const StyledCardImage = styled.div`
  /* Display */
  position: relative;

  /* Box Model */
  aspect-ratio: 1 / 1;
  height: 4rem;
  border: 1px solid var(--neutral-800);
  margin-bottom: 1.5rem;

  /* Manipulations */
  box-shadow: inset 0px 2px 0px rgba(255, 255, 255, 0.1);

  /* Misc */
  border-radius: 8px;
  background-color: var(--neutral-900);

  div {
    /* Display */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    /* Box Model */
    aspect-ratio: 1 / 1;
    height: 4rem;
    width: 4rem;
  }
`;

const StyledCardContent = styled.div`
  p {
    &:first-of-type {
      font-family: var(--font-medium);
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: var(--neutral-0);
      margin: 0 0 0.5rem 0;
    }

    &:last-of-type {
      font-family: var(--font-regular);
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--neutral-300);
      margin: 0 0 1rem 0;
    }
  }
`;

const StyledCTA = styled.div<CTAProps>`
  a {
    font-family: var(--font-medium);
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
    background: ${(props) => `var(${props.themeColor})`};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${(props) => `var(${props.themeColor})`};
  }

  p {
    font-family: var(--font-medium);
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
    background: ${(props) => `var(${props.themeColor})`};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${(props) => `var(${props.themeColor})`};
  }
`;

export default Card;
