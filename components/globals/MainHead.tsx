import Head from "next/head";

type Props = {
  title: string;
};

const MainHead = ({ title }: Props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="theme-color" content="#03040D"></meta>
      <meta
        name="description"
        content="OnCloud3 gives you all the features you need for production ready Web3 Dapps: Web3 Auth, Smart Contracts, Token Creation, NFT Generator, IPFS Hosting and more. With low config and low Code."
      />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <meta property="og:url" content="https://oncloud3.io/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="OnCloud3 | Deploy Web3 Dapps in Minutes."
      />
      <meta property="og:image" content="/images/social/og.jpg" />
      <meta property="og:description" content="Deploy Web3 Dapps in Minutes." />
      <meta property="og:site_name" content="OnCloud3" />
      <meta property="og:locale" content="en_AU" />
      <meta property="article:author" content="OnCloud3" />
      <meta
        name="facebook-domain-verification"
        content="svs64rsxbpe1y8u9o9x67fct5zw5sc"
      />

      <title>OnCloud3 The Uncomplicated Web3 Solution | {title}</title>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
  );
};
export default MainHead;
