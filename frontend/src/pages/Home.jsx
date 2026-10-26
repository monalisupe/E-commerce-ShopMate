
import HeroSection from "../components/HeroSection";
import ValueProps from "../components/ValueProps";
import FeatureSection from "../components/FeatureSection";
import Categories from "./Categories";
import Products from "../components/Products";
import OfferBanner from "../components/OfferBanner";
import FooterSection from "../components/FooterSection";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAF8] text-stone-800">
      {/* 1. Hero Highlights & Carousel */}
      <HeroSection />

      {/* 2. Trust Badges & Value Propositions */}
      <ValueProps />

      {/* 3. Handpicked Department Highlights & Varieties */}
      <FeatureSection />

      {/* 4. Special Countdown Offer Banner */}
      <OfferBanner />

      {/* 5. Shop by Department Categories */}
      <div className="bg-white/60 border-y border-stone-200/60 py-4 my-2">
        <Categories />
      </div>

      {/* 6. Best Selling Customer Favorites */}
      <Products />

      {/* 7. Comprehensive Modern Footer */}
      <FooterSection />
    </div>
  );
}

export default Home;

