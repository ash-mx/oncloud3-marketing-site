// Components
import MainHead from "../components/globals/MainHead";
import HomepageChains from "../components/sections/homepage/HomepageChains";
import HomepageFlexible from "../components/sections/homepage/HomepageFlexible";
import HomepageHero from "../components/sections/homepage/HomepageHero";
import HomepageProducts from "../components/sections/homepage/HomepageProducts";
import HomepageSolutions from "../components/sections/homepage/HomepageSolutions";
import HomepageSupport from "../components/sections/homepage/HomepageSupport";

const Home = () => {
  return (
    <>
      <MainHead title="Homepage" />
      <HomepageHero />
      <HomepageProducts />
      <HomepageChains />
      <HomepageSolutions />
      <HomepageFlexible />
      <HomepageSupport />
    </>
  );
};

export default Home;
