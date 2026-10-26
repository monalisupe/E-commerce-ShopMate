
import { useRef } from "react";
import { Link } from "react-router-dom";
import Bagpack from "../assets/Bagpack.jpg";
import Shoe from "../assets/Shoe.jpg";
import Sports from "../assets/Sports.jpg";
import Laptop from "../assets/Laptop.jpg";
import Perfume from "../assets/Perfume.jpg";
import Plant from "../assets/Plant.jpg";
import Headphones from "../assets/Headphones.jpg";
import Fashion from "../assets/Fashion.jpg";

function HeroSection() {
  const scrollContainerRef = useRef(null);

  // Cards Data with polished copy, badges, and discounts
  const cards = [
    {
      id: "shoe",
      image: Shoe,
      badge: "Limited Offer",
      title: "Exclusive Footwear Offers",
      subtitle: "Comfort Meets High Street Fashion",
      discount: "Up to 40% Off",
      category: "Footwear",
      link: "/categories",
    },
    {
      id: "sports",
      image: Sports,
      badge: "Free Delivery",
      title: "Athletic & Sports Gear",
      subtitle: "Free Delivery on All Equipment",
      discount: "Starting ₹499",
      category: "Sports",
      link: "/categories",
    },
    {
      id: "laptop",
      image: Laptop,
      badge: "Tech Fest",
      title: "Next-Gen Laptops & Tech",
      subtitle: "Power, Performance & Portability",
      discount: "Up to 10% Off",
      category: "Electronics",
      link: "/deals",
    },
    {
      id: "plant",
      image: Plant,
      badge: "Eco Living",
      title: "Multiple Varieties in Stock",
      subtitle: "Natural Air-Purifying Indoor Plants",
      discount: "From ₹299",
      category: "Home & Garden",
      link: "/shop",
    },
    {
      id: "perfume",
      image: Perfume,
      badge: "Bespoke",
      title: "Customization Available",
      subtitle: "Signature Artisanal Fragrances",
      discount: "Free Engraving",
      category: "Beauty",
      link: "/categories",
    },
    {
      id: "fashion",
      image: Fashion,
      badge: "Hot Season",
      title: "Modern Wardrobe Essentials",
      subtitle: "Fresh Trends for Men & Women",
      discount: "Flat 50% Off",
      category: "Fashion",
      link: "/deals",
    },
    {
      id: "backpack",
      image: Bagpack,
      badge: "Daily Steal",
      title: "Great Deals of the Day",
      subtitle: "Ergonomic & Weatherproof Packs",
      discount: "Special ₹899",
      category: "Bags",
      link: "/shop",
    },
    {
      id: "headphones",
      image: Headphones,
      badge: "Sound Pro",
      title: "Studio-Grade Audio",
      subtitle: "Deep Bass & Active Noise Cancelling",
      discount: "50% Off Today",
      category: "Audio",
      link: "/offers",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      {/* Header with Title and Scroll Arrows */}
      <div className="flex items-end justify-between mb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#68753D]">
            Curated For You
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
            Trending Offers & Collections
          </h2>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 shadow-xs hover:bg-stone-50 hover:border-stone-300 transition active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 shadow-xs hover:bg-stone-50 hover:border-stone-300 transition active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Container with Touch-friendly Horizontal Snap Scroll */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative h-[460px] sm:h-[490px] md:h-[520px] w-[80vw] max-w-[310px] sm:w-[280px] md:w-[300px] lg:w-[calc(20%-13px)] shrink-0 overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 snap-start bg-stone-900 cursor-pointer"
          >
            {/* Background Image with gentle hover scale */}
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />

            {/* Multi-layer Gradient Vignettes for Perfect Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Top Floating Badge & Discount Tag */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-xs">
                {card.badge}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-400 text-stone-950 shadow-xs">
                {card.discount}
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end text-left">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300 mb-1">
                {card.category}
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight drop-shadow-md mb-1.5 group-hover:text-amber-200 transition-colors">
                {card.title}
              </h3>

              <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed mb-4">
                {card.subtitle}
              </p>

              <Link
                to={card.link}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 text-xs font-bold text-white hover:bg-white hover:text-stone-900 transition-all duration-200 shadow-sm group-hover:bg-[#68753D] group-hover:border-[#68753D]"
              >
                <span>Explore Collection</span>
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;