import Link from "next/link";
import styled from "styled-components";

type Props = {
  link: string;
  linkUrl: string;
};

const FooterLink = ({ link, linkUrl }: Props) => {
  return (
    <StyledLink>
      <Link href={linkUrl}>
        <a>{link}</a>
      </Link>
    </StyledLink>
  );
};

const StyledLink = styled.li`
  padding: 0;
  margin: 0 0 1rem 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--neutral-0);

  &:last-of-type {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    transition: color 0.25s ease;

    &:hover {
      color: var(--neutral-300);
    }
  }
`;

export default FooterLink;
