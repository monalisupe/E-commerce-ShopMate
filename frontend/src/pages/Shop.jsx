import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import watch from "../assets/watch.jpg";
import Laptop from "../assets/Laptop.jpg";
import Bagpack from "../assets/Bagpack.jpg";
import Beauty from "../assets/Beauty.jpg";
import Bluetooth from "../assets/Bluetooth.jpg";
import Fashion from "../assets/Fashion.jpg";
import Headphones from "../assets/Headphones.jpg";
import Shoe from "../assets/Shoe.jpg";
import Sports from "../assets/Sports.jpg";
import Perfume from "../assets/Perfume.jpg";
import Plant from "../assets/Plant.jpg";
import Accessories from "../assets/Accessories.jpg";
import { useCart } from "../context/CartContext";

const PRODUCTS = [
  {
    id: 1,
    name: "Chronograph Water-Resistant Classic Watch",
    category: "Accessories",
    image: watch,
    price: 3999,
    oldPrice: 5499,
    rating: 4.8,
    reviews: 156,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Ultra-Slim Performance Laptop (14-inch FHD)",
    category: "Electronics",
    image: Laptop,
    price: 48990,
    oldPrice: 62500,
    rating: 4.9,
    reviews: 254,
    badge: "Top Tech",
  },
  {
    id: 3,
    name: "Aura Signature Luxury Eau De Parfum (100ml)",
    category: "Beauty",
    image: Perfume,
    price: 2499,
    oldPrice: 3999,
    rating: 4.7,
    reviews: 89,
    badge: "Exclusive",
  },
  {
    id: 4,
    name: "Handcrafted Bohemian Artisan Jewelry Set",
    category: "Accessories",
    image: Accessories,
    price: 1299,
    oldPrice: 1899,
    rating: 4.5,
    reviews: 42,
    badge: "Trending",
  },
  {
    id: 5,
    name: "Weatherproof Urban Ergonomic Travel Backpack",
    category: "Bags",
    image: Bagpack,
    price: 1899,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 130,
    badge: "Deal",
  },
  {
    id: 6,
    name: "Professional Makeup Palette & Glow Kit",
    category: "Beauty",
    image: Beauty,
    price: 2199,
    oldPrice: 3299,
    rating: 4.6,
    reviews: 95,
    badge: "Popular",
  },
  {
    id: 7,
    name: "True Wireless Magnetic Neckband Earbuds",
    category: "Electronics",
    image: Bluetooth,
    price: 1499,
    oldPrice: 2299,
    rating: 4.7,
    reviews: 156,
    badge: "Fast Selling",
  },
  {
    id: 8,
    name: "Modern Seasonal Tailored Minimalist Overcoat",
    category: "Fashion",
    image: Fashion,
    price: 3499,
    oldPrice: 4999,
    rating: 4.9,
    reviews: 320,
    badge: "Hot Season",
  },
  {
    id: 9,
    name: "Breathable Sport Cushion Running Shoes",
    category: "Footwear",
    image: Shoe,
    price: 2799,
    oldPrice: 3999,
    rating: 4.8,
    reviews: 186,
    badge: "Special Offer",
  },
  {
    id: 10,
    name: "Championship Multi-Sport Tournament Ball Kit",
    category: "Sports",
    image: Sports,
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
    reviews: 74,
    badge: "Essentials",
  },
  {
    id: 11,
    name: "Studio-Grade ANC Over-Ear Headphones",
    category: "Electronics",
    image: Headphones,
    price: 4999,
    oldPrice: 6999,
    rating: 4.9,
    reviews: 210,
    badge: "Premium Audio",
  },
  {
    id: 12,
    name: "Air-Purifying Botanical Indoor Potted Plant",
    category: "Home & Garden",
    image: Plant,
    price: 599,
    oldPrice: 899,
    rating: 4.5,
    reviews: 68,
    badge: "Eco Living",
  },
];

const CATEGORIES = [
  "All",
  "Electronics",
  "Fashion",
  "Footwear",
  "Beauty",
  "Bags",
  "Accessories",
  "Sports",
  "Home & Garden",
];

function Shop() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchFilter, setSearchFilter] = useState("");
  const [wishlist, setWishlist] = useState({});
  const [addedToast, setAddedToast] = useState(null);

  // Filter and Sort Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.category.toLowerCase().includes(searchFilter.toLowerCase());
      return matchCategory && matchSearch;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.id - b.id; // default featured
    });
  }, [selectedCategory, searchFilter, sortBy]);

  const handleAddToCart = (product, e) => {
    if (e) e.stopPropagation();
    addToCart({
      ...product,
      title: product.name,
      thumbnail: product.image,
      image: product.image,
      price: product.price,
    });
    setAddedToast(product.id);
    setTimeout(() => setAddedToast(null), 2000);
  };

  const toggleWishlist = (id, e) => {
    if (e) e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-[#F9FAF8] text-stone-800 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Breadcrumb Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500">
            <Link to="/" className="hover:text-[#68753D] transition">Home</Link>
            <span>/</span>
            <span className="font-semibold text-stone-900">Shop Catalog</span>
          </div>

          <p className="text-xs sm:text-sm text-stone-500 hidden sm:block">
            Showing <strong className="text-stone-900">{filteredProducts.length}</strong> Products
          </p>
        </div>

        {/* Page Title & Search Bar */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200/80 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#68753D]">
              Explore Complete Collection
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
              Shop All Products
            </h1>
          </div>

          {/* Search Box & Sort Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative min-w-[220px]">
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search catalog..."
                className="w-full h-10 pl-9 pr-3 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-[#68753D] focus:ring-2 focus:ring-[#68753D]/20 transition shadow-2xs"
              />
              <svg className="w-4 h-4 text-stone-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-10 px-3 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm font-semibold text-stone-700 outline-none hover:bg-stone-50 focus:border-[#68753D] transition shadow-2xs cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated (Stars)</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills (Touch friendly scrollable on mobile) */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition shrink-0 shadow-2xs active:scale-95 cursor-pointer ${
                  isSelected
                    ? "bg-[#68753D] text-white shadow-xs"
                    : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Empty Search Results */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-stone-200 bg-white p-12 text-center shadow-xs max-w-lg mx-auto my-12">
            <span className="text-4xl mb-3 block">🔍</span>
            <h3 className="text-lg font-bold text-stone-900 mb-1">
              No products found
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-6">
              No products matched "{searchFilter}" in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSearchFilter("");
                setSelectedCategory("All");
              }}
              className="px-5 py-2.5 rounded-xl bg-[#68753D] text-white font-bold text-xs hover:bg-[#535F2F] transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Product Grid (Responsive: 1 col on mobile, 2 on tablet, 3-4 on desktop) */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = !!wishlist[product.id];
              const discountPercent = Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              );

              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300"
                >
                  {/* Top Image Box */}
                  <div>
                    <div className="relative flex h-52 sm:h-56 items-center justify-center bg-stone-50 p-4 overflow-hidden border-b border-stone-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-108"
                        loading="lazy"
                      />

                      {/* Badge / Discount Tag */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                        {product.badge && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#68753D] text-white shadow-xs">
                            {product.badge}
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-400 text-stone-900 shadow-xs">
                          {discountPercent}% OFF
                        </span>
                      </div>

                      {/* Wishlist Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleWishlist(product.id, e)}
                        aria-label="Add to wishlist"
                        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-xs shadow-xs text-stone-500 hover:text-red-500 hover:scale-110 transition active:scale-90"
                      >
                        {isWishlisted ? (
                          <span className="text-red-500 text-sm">❤️</span>
                        ) : (
                          <span className="text-sm">🤍</span>
                        )}
                      </button>
                    </div>

                    {/* Details Body */}
                    <div className="p-4 sm:p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1">
                        {product.category}
                      </p>

                      <h3 className="line-clamp-2 text-sm sm:text-base font-bold text-stone-900 group-hover:text-[#68753D] transition leading-snug">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="mt-2 flex items-center gap-1.5 text-xs">
                        <span className="text-amber-500 font-bold">
                          ★ {product.rating}
                        </span>
                        <span className="text-stone-400">
                          ({product.reviews})
                        </span>
                      </div>

                      {/* Price Section */}
                      <div className="mt-2.5 flex items-baseline gap-2">
                        <span className="text-lg font-extrabold text-[#68753D]">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-stone-400 line-through">
                          ₹{product.oldPrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button (Bottom pinned for perfect alignment) */}
                  <div className="p-4 sm:p-5 pt-0">
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(product, e)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#68753D] py-2.5 px-4 font-bold text-xs sm:text-sm text-white transition hover:bg-[#535F2F] shadow-xs active:scale-95 cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      {addedToast === product.id ? "Added to Cart ✓" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}

export default Shop;
