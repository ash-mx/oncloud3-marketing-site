import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import GlobalStyles from "../styles/globals/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
