
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Categories from "./Categories";
import Products from "../components/Products";
import OfferBanner from "../components/OfferBanner";
// import watch2 from "../assets/watch2.png"

function Home() {
  return (
    <>
      {/* 🔥 CHANGED: Moved all homepage sections here */}
      <HeroSection />
      <FeatureSection />
      <Categories />
      <Products />
      <OfferBanner />
    </>
  );
}

export default Home;

