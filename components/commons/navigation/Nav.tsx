import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// Components
import { Container } from "../../../styles/layouts/Container";
import Button from "../forms/Button";
import MobileNav from "./MobileNav";

// Custom Hooks
import { useResize } from "../../../hooks/useResize";

// Media Queries
import { device } from "../../../styles/layouts/devices";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const { isDesktop } = useResize();

  const handleMobileNav = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <StyledNav>
        <Container>
          <MobileNav isActive={isActive} />
          <StyledLogo>
            <Link href="/">
              <a>
                {isDesktop && (
                  <Image
                    src="/images/logo/logo-word.svg"
                    height={40}
                    width={168}
                    alt="OnCloud3 Logo"
                  />
                )}

                {!isDesktop && (
                  <Image
                    src="/images/logo/logo-mark.svg"
                    height={40}
                    width={30}
                    alt="OnCloud3 Logo"
                  />
                )}
              </a>
            </Link>
          </StyledLogo>
          <StyledLinks>
            <StyledNavButton>
              Products
              <Image
                src="/images/icons/chevron-down.svg"
                height={16}
                width={16}
                alt="dropdown"
              />
            </StyledNavButton>
            <StyledNavButton>
              Resources
              <Image
                src="/images/icons/chevron-down.svg"
                height={16}
                width={16}
                alt="dropdown"
              />
            </StyledNavButton>
            <StyledNavButton>
              Developers
              <Image
                src="/images/icons/chevron-down.svg"
                height={16}
                width={16}
                alt="dropdown"
              />
            </StyledNavButton>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </StyledLinks>
          <StyledCTAs>
            <Button
              url="#"
              size="SM"
              btnType="stealth"
              display="default"
              navBtn={true}
            >
              Log in
            </Button>
            <Button
              url="#"
              size={isDesktop ? "SM" : "XS"}
              btnType="gradientOne"
              display="default"
              navBtn={true}
            >
              Sign up
            </Button>

            <HamburgerContainer>
              <div></div>
              <div>
                <HamburgerButton onClick={handleMobileNav}>
                  <Image
                    src="/images/icons/hamburger.svg"
                    height={24}
                    width={24}
                    alt="Hamburger"
                  />
                </HamburgerButton>
              </div>
            </HamburgerContainer>
          </StyledCTAs>
        </Container>
      </StyledNav>
    </Container>
  );
};

const StyledNav = styled.nav`
  /* Display */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;

  /* Box Model */
  -webkit-box-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--neutral-900);

  /* Typography */
  color: var(--neutral-0);
  font-family: var(--font-medium);

  /* UI */
  background-color: rgb(3, 4, 13, 0.7);
  backdrop-filter: blur(0.75rem);

  /* Misc */
  transition: all 0.25s ease;

  section {
    &:first-of-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
const StyledLogo = styled.div``;

const StyledLinks = styled.div`
  a {
    text-decoration: none;
    font-family: var(--font-medium);
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

const StyledCTAs = styled.div`
  display: flex;
  align-items: center;

  a {
    &:first-of-type {
      margin-right: 0.5rem;

      @media ${device.tablet} {
        display: none;
      }
    }
  }
`;

const StyledNavButton = styled.button`
  /* Display */
  display: inline-flex;
  align-items: center;
  margin-right: 4rem;

  /* Typography */
  font-family: var(--font-medium);
  font-size: 1rem;
  line-height: 1.5rem;

  /* UI */
  background: none;
  border: none;
  color: var(--neutral-0);
  padding: 0;

  &:hover {
    cursor: pointer;
  }

  span {
    margin-left: 0.375rem !important;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

const HamburgerContainer = styled.div`
  display: none;

  div {
    &:first-of-type {
      margin: 0 1rem;
      background-color: var(--neutral-800);
      width: 1px;
      height: 32px;
    }
  }

  @media ${device.laptop} {
    display: flex;
    align-items: center;
  }
`;

const HamburgerButton = styled.button`
  background: transparent;
  padding: 0;
  border: none;
`;

export default Nav;
