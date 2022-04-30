import Link from "next/link";
import Image from "next/image";

type Props = {
  image: string;
  alt: string;
  url: string;
};

const SocialLink = ({ image, alt, url }: Props) => {
  return (
    <Link href={url}>
      <a target="_blank" rel="noopener noreferrer">
        <Image
          src={`/images/socials/${image}.svg`}
          height={24}
          width={24}
          alt={alt}
        />
      </a>
    </Link>
  );
};
export default SocialLink;
