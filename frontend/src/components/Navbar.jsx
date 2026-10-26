
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShopmateLogo1 from "../assets/ShopmateLogo1.png";
import { useCart } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const totalCartCount = (cart || []).reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory) {
      navigate(selectedCategory);
    } else if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/shop");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200">
      {/* Top micro announcement bar */}
      <div className="bg-[#535F2F] text-white text-[11px] sm:text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="flex items-center gap-1.5 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>⚡ Flash Sale Live: Up to 50% Off | Free Delivery on orders over ₹499</span>
          </p>
          <div className="hidden md:flex items-center gap-4 text-white/90">
            <span className="hover:text-white cursor-pointer transition">Help Center</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition">Track Order</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Location */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link to="/" className="flex items-center transition hover:opacity-90">
              <img
                src={ShopmateLogo1}
                alt="ShopMate Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            {/* Delivering To Pill - Hidden on small mobile */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100/90 border border-stone-200 text-stone-700 hover:bg-stone-200/70 transition cursor-pointer">
              <svg className="w-4 h-4 text-[#68753D] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="text-left leading-tight">
                <p className="text-[10px] uppercase font-semibold text-stone-400">Deliver to</p>
                <p className="text-xs font-bold text-stone-800 truncate max-w-[100px]">Select Location</p>
              </div>
            </div>
          </div>

          {/* Search Bar - Desktop & Tablet */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-2xl items-center mx-2"
          >
            <div className="flex w-full items-center rounded-xl border border-stone-300 bg-stone-50/80 shadow-xs focus-within:border-[#68753D] focus-within:ring-2 focus-within:ring-[#68753D]/20 transition overflow-hidden">
              {/* Category Dropdown */}
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  if (e.target.value) navigate(e.target.value);
                }}
                className="h-10 border-r border-stone-200 bg-stone-100/80 px-3 text-xs font-semibold text-stone-700 outline-none cursor-pointer hover:bg-stone-200/60 transition"
              >
                <option value="">All Categories</option>
                <option value="/shop">Shop All</option>
                <option value="/deals">Deals & Offers</option>
                <option value="/categories">Categories</option>
              </select>

              {/* Input */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, essentials..."
                className="h-10 flex-1 bg-transparent px-3 text-sm text-stone-800 placeholder:text-stone-400 outline-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                aria-label="Search"
                className="flex h-10 w-11 items-center justify-center bg-[#68753D] text-white hover:bg-[#535F2F] transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Language Selector - Desktop */}
            <div className="hidden lg:block">
              <select className="h-9 rounded-lg border border-stone-200 bg-stone-50 px-2 text-xs font-medium text-stone-700 outline-none hover:bg-stone-100 transition cursor-pointer">
                <option>EN (English)</option>
                <option>HI (Hindi)</option>
                <option>MR (Marathi)</option>
              </select>
            </div>

            {/* Sign In Button */}
            <button
              onClick={() => navigate("/payment")}
              className="hidden sm:inline-flex items-center justify-center h-9 px-3.5 rounded-lg border border-[#68753D] text-xs font-semibold text-[#68753D] hover:bg-[#68753D] hover:text-white transition shadow-xs"
            >
              Sign In
            </button>

            {/* Returns & Orders */}
            <Link
              to="/deals"
              className="hidden lg:inline-flex flex-col text-left px-2 py-1 rounded-md text-stone-700 hover:text-[#68753D] transition"
            >
              <span className="text-[10px] text-stone-400 leading-none">Returns</span>
              <span className="text-xs font-bold leading-tight">& Orders</span>
            </Link>

            {/* Cart Link with Badge */}
            <Link
              to="/cart"
              className="relative flex items-center gap-1.5 h-9 sm:h-10 px-3 sm:px-4 rounded-xl bg-[#68753D] text-white font-semibold text-xs sm:text-sm hover:bg-[#535F2F] transition shadow-xs active:scale-95"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="hidden xs:inline">Cart</span>
              {totalCartCount > 0 && (
                <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-amber-400 px-1 text-[11px] font-bold text-stone-900 shadow-xs">
                  {totalCartCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-100 transition"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (< md screens) */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-2.5 flex md:hidden w-full items-center"
        >
          <div className="flex w-full items-center rounded-xl border border-stone-300 bg-stone-50/90 shadow-xs focus-within:border-[#68753D] focus-within:ring-2 focus-within:ring-[#68753D]/20 transition overflow-hidden">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, brands, deals..."
              className="h-9 flex-1 bg-transparent px-3 text-xs text-stone-800 placeholder:text-stone-400 outline-none"
            />
            <button
              type="submit"
              className="flex h-9 w-10 items-center justify-center bg-[#68753D] text-white hover:bg-[#535F2F] transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <nav className="mt-3 pt-3 border-t border-stone-200 md:hidden flex flex-col gap-2 pb-2 animate-fadeIn">
            <div className="flex items-center justify-between py-1.5 px-2 text-xs text-stone-600 bg-stone-50 rounded-lg">
              <span className="flex items-center gap-1.5 font-medium">
                📍 Deliver to: <strong>Select Location</strong>
              </span>
              <select className="bg-transparent text-xs text-stone-700 font-semibold outline-none">
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-100 text-xs font-semibold text-stone-800 hover:bg-[#68753D] hover:text-white transition"
              >
                🏠 Home
              </Link>
              <Link
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-100 text-xs font-semibold text-stone-800 hover:bg-[#68753D] hover:text-white transition"
              >
                🛍️ Shop All
              </Link>
              <Link
                to="/deals"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-100 text-xs font-semibold text-stone-800 hover:bg-[#68753D] hover:text-white transition"
              >
                🔥 Deals & Offers
              </Link>
              <Link
                to="/categories"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-100 text-xs font-semibold text-stone-800 hover:bg-[#68753D] hover:text-white transition"
              >
                📂 Categories
              </Link>
            </div>

            <div className="pt-2 mt-1 border-t border-stone-100 flex items-center justify-between">
              <Link
                to="/payment"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-[#68753D] hover:underline"
              >
                Account / Sign In →
              </Link>
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-stone-700 hover:underline"
              >
                View Cart ({totalCartCount}) →
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;