import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// Components
import Button from "../forms/Button";
import BodyText from "../typography/BodyText";
import SocialLink from "./SocialLink";

// Data
import { footerSocials } from "../../../data/footer/footerSocials.data";

type Props = {
  isActive: boolean;
};

const MobileNav = ({ isActive }: Props) => {
  return (
    <StyledHamburgerNavContainer isActive={isActive}>
      <StyledLink>
        <Link href="#">
          <a>
            <BodyText bodyColor="white" bodySize="three">
              Products
            </BodyText>
          </a>
        </Link>
        <LinkIcon>
          <Image
            src="/images/icons/arrow-right.svg"
            height={24}
            width={24}
            alt="Arrow Right"
          />
        </LinkIcon>
      </StyledLink>

      <StyledLink>
        <Link href="#">
          <a>
            <BodyText bodyColor="white" bodySize="three">
              Resources
            </BodyText>
          </a>
        </Link>
        <LinkIcon>
          <Image
            src="/images/icons/arrow-right.svg"
            height={24}
            width={24}
            alt="Arrow Right"
          />
        </LinkIcon>
      </StyledLink>

      <StyledLink>
        <Link href="#">
          <a>
            <BodyText bodyColor="white" bodySize="three">
              Developers
            </BodyText>
          </a>
        </Link>
        <LinkIcon>
          <Image
            src="/images/icons/arrow-right.svg"
            height={24}
            width={24}
            alt="Arrow Right"
          />
        </LinkIcon>
      </StyledLink>

      <StyledLink>
        <Link href="#">
          <a>
            <BodyText bodyColor="white" bodySize="three">
              Pricing
            </BodyText>
          </a>
        </Link>
      </StyledLink>
      <CTAsContainer>
        <Button url="#" size="MD" btnType="gradientOne" display="default">
          Sign up
        </Button>
        <Button url="#" size="MD" btnType="stealth" display="default">
          Sign in
        </Button>
      </CTAsContainer>
      <SocialsContainer>
        {footerSocials.map((link) => (
          <SocialLink
            key={link.id}
            image={link.image}
            url={link.url}
            alt={link.image}
          />
        ))}
      </SocialsContainer>
    </StyledHamburgerNavContainer>
  );
};

type StyledProps = {
  isActive: boolean;
};

const StyledHamburgerNavContainer = styled.div<StyledProps>`
  /* Display */
  position: absolute;
  top: 4.8125rem;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 3;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  transform: ${(props) =>
    props.isActive ? "translateX(0)" : "translateX(100%)"};

  /* Box Model */

  /* Typography */
  color: var(--neutral-0);
  font-family: var(--font-medium);

  /* Manipulations */
  background-color: var(--neutral-1000);

  /* Misc */
  transition: all 0.25s ease;
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--neutral-900);

  a {
    text-decoration: none;
  }

  p {
    font-weight: 500;
    font-family: var(--font-medium);
  }
`;

const LinkIcon = styled.div``;

const CTAsContainer = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  border-bottom: 1px solid var(--neutral-900);

  a {
    margin-bottom: 1.5rem;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-top: 1.5rem;
`;

export default MobileNav;
