import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// Components
import { Container } from "../../../styles/layouts/Container";
import SectionHeader from "../sections/SectionHeader";
import BodyText from "../typography/BodyText";
import Button from "../forms/Button";
import SocialLink from "./SocialLink";
import FooterTitle from "./FooterTitle";

// Media Queries
import { device } from "../../../styles/layouts/devices";

// Data
import { footerHeading } from "../../../data/homepage/footerHeading.data";
import { footerSocials } from "../../../data/footer/footerSocials.data";
import { footerProductLinks } from "../../../data/footer/footerProductLinks.data";
import { footerResourcesLinks } from "../../../data/footer/footerResourcesLinks.data";
import { footerCompanyLinks } from "../../../data/footer/footerCompanyLinks.data";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <Container>
      <StyledFooterContainer>
        <SectionHeader
          subtitle={footerHeading.subtitle}
          title={footerHeading.title}
          body={footerHeading.bodyText}
        />

        <StyledCTAContainer>
          <Button size="MD" btnType="gradientOne" display="default">
            {footerHeading.btnText}
          </Button>
        </StyledCTAContainer>

        <StyledFooter>
          <hr />

          <StyledLinksContainer>
            <StyledLeftContainer>
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo/logo-footer.svg"
                    alt="OnCloud3 Logo"
                    height={38}
                    width={160}
                  />
                </a>
              </Link>
              <BodyText bodySize="four" bodyColor="lightGray">
                Blockchain development in minutes.
              </BodyText>
              <StyledSocialsContainer>
                {footerSocials.map((social) => (
                  <div key={social.id}>
                    <SocialLink
                      image={social.image}
                      alt={social.alt}
                      url={social.url}
                    />
                  </div>
                ))}
              </StyledSocialsContainer>
            </StyledLeftContainer>

            <div>
              <FooterTitle title="Product" />
              <ul>
                {footerProductLinks.map((link) => (
                  <FooterLink
                    key={link.id}
                    link={link.urlName}
                    linkUrl={link.url}
                  />
                ))}
              </ul>
            </div>

            <div>
              <FooterTitle title="Resources" />
              <ul>
                {footerResourcesLinks.map((link) => (
                  <FooterLink
                    key={link.id}
                    link={link.urlName}
                    linkUrl={link.url}
                  />
                ))}
              </ul>
            </div>

            <div>
              <FooterTitle title="Company" />
              <ul>
                {footerCompanyLinks.map((link) => (
                  <FooterLink
                    key={link.id}
                    link={link.urlName}
                    linkUrl={link.url}
                  />
                ))}
              </ul>
            </div>
          </StyledLinksContainer>

          <hr />

          <StyledFootNoteContainer>
            <div>
              <BodyText bodySize="four" bodyColor="lightGray">
                © 2022 OnCloud3 Pty Ltd
              </BodyText>
            </div>
            <div>
              <BodyText bodySize="four" bodyColor="white">
                <Link href="/privacy">
                  <a>Privacy policy</a>
                </Link>
              </BodyText>
              <BodyText bodySize="four" bodyColor="lightGray">
                •
              </BodyText>
              <BodyText bodySize="four" bodyColor="white">
                <Link href="terms">
                  <a>Terms of service</a>
                </Link>
              </BodyText>
            </div>
          </StyledFootNoteContainer>
        </StyledFooter>
      </StyledFooterContainer>
    </Container>
  );
};

const StyledFooterContainer = styled.section`
  background-image: url("/images/sections/footer/bg.svg");
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: bottom center;

  @media ${device.tablet} {
    background-size: 100%;
  }
  padding-top: 10rem;
`;

const StyledLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  ul {
    padding: 0;
    list-style-type: none;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);

    div {
      &:nth-of-type(1) {
        grid-column-start: 1;
        grid-column-end: 4;
        justify-self: center;
      }
    }
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;

    div {
      &:nth-of-type(1) {
        grid-column-start: unset;
        grid-column-end: unset;
        justify-self: unset;
        order: 4;
      }
    }
  }
`;

const StyledCTAContainer = styled.div`
  text-align: center;
`;

const StyledFooter = styled.footer`
  padding: 4rem 0;

  hr {
    border: none;
    border-bottom: 1px solid var(--neutral-800);

    &:first-of-type {
      margin-bottom: 4rem;
    }

    &:last-of-type {
      margin: 4rem 0 1.5rem 0;
    }
  }
`;

const StyledLeftContainer = styled.div`
  p {
    margin: 0.5rem 0 1.5rem 0;
  }
`;

const StyledSocialsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const StyledFootNoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      text-decoration: none;
      transition: color 0.25s ease;

      &:hover {
        color: var(--neutral-300);
      }
    }
  }

  @media ${device.mobileL} {
    flex-direction: column;

    div {
      &:first-of-type {
        margin-bottom: 1rem;
      }
    }
  }
`;

export default Footer;
