import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Local fallbacks for guaranteed image display
import Shoe from "../assets/Shoe.jpg";
import Headphones from "../assets/Headphones.jpg";
import Laptop from "../assets/Laptop.jpg";
import Perfume from "../assets/Perfume.jpg";
import Sports from "../assets/Sports.jpg";
import Bagpack from "../assets/Bagpack.jpg";
import Fashion from "../assets/Fashion.jpg";
import watch from "../assets/watch.jpg";
import women1 from "../assets/women1.jpg";
import men1 from "../assets/men1.jpg";
import school1 from "../assets/school1.jpg";
import bag1 from "../assets/bag1.jpg";
import phone1 from "../assets/phone1.jpg";

const FALLBACK_CATEGORY_MAP = {
  women: women1,
  men: men1,
  school: school1,
  bag: bag1,
  phone: phone1,
  shoe: Shoe,
  footwear: Shoe,
  electronics: Laptop,
  laptop: Laptop,
  perfume: Perfume,
  beauty: Perfume,
  sports: Sports,
  bagpack: Bagpack,
  fashion: Fashion,
  watch: watch,
  accessories: watch,
  audio: Headphones,
  headphone: Headphones,
};

function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    loadingCart,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    clearCart,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");

  // Safely calculate unit price
  const getUnitPrice = (item) => {
    if (item.price !== undefined && item.price !== null) {
      if (typeof item.price === "string") {
        const num = Number(item.price.replace(/[^\d.]/g, ""));
        if (Number.isFinite(num)) return num;
      }
      const price = Number(item.price);
      return Number.isFinite(price) ? price : 0;
    }

    if (item.priceCents !== undefined && item.priceCents !== null) {
      const price = Number(item.priceCents);
      return Number.isFinite(price) ? (price / 100) * 90 : 0;
    }

    return 0;
  };

  // Smart image resolver that never leaves a blank box
  const resolveItemImage = (item) => {
    const img = item.thumbnail || item.image || item.imagePath || item.images?.[0];
    const cat = (item.category || "").toLowerCase();

    if (!img) {
      return FALLBACK_CATEGORY_MAP[cat] || Shoe;
    }

    if (typeof img !== "string") return img;

    // Direct web or base64 or blob URL
    if (
      img.startsWith("http://") ||
      img.startsWith("https://") ||
      img.startsWith("data:") ||
      img.startsWith("blob:")
    ) {
      return img;
    }

    // Vite asset path
    if (img.startsWith("/src/") || img.startsWith("/assets/")) {
      return img;
    }

    // Backend relative image path e.g. "/images/women/women1.jpg"
    if (img.includes("/images/")) {
      const lower = img.toLowerCase();
      if (lower.includes("women")) return women1;
      if (lower.includes("men")) return men1;
      if (lower.includes("school")) return school1;
      if (lower.includes("bag")) return bag1;
      if (lower.includes("phone")) return phone1;
      return `http://localhost:5000/${img.startsWith("/") ? img.slice(1) : img}`;
    }

    return img;
  };

  // Subtotal & Calculations
  const subtotal = (cart || []).reduce(
    (total, item) => total + getUnitPrice(item) * (item.quantity || 1),
    0
  );

  const totalItemsCount = (cart || []).reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const FREE_SHIPPING_THRESHOLD = 499;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0;
  const shippingFee = isFreeShipping ? 0 : 99;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const discountAmount = (subtotal * appliedDiscount) / 100;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError("");
    setPromoSuccess("");

    const code = promoCode.trim().toUpperCase();
    if (!code) return;

    if (code === "SHOPMATE50") {
      setAppliedDiscount(50);
      setPromoSuccess("🎉 50% discount applied successfully!");
    } else if (code === "SHOPMATE10") {
      setAppliedDiscount(10);
      setPromoSuccess("🎉 10% discount applied successfully!");
    } else {
      setPromoError("Invalid coupon code. Try SHOPMATE50 or SHOPMATE10");
    }
  };

  if (loadingCart) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-[#F9FAF8]">
        <div className="h-10 w-10 animate-spin rounded-full border-3 border-stone-200 border-t-[#68753D]" />
        <p className="mt-4 text-sm font-semibold text-stone-600">
          Loading your shopping bag...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAF8] text-stone-800 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Breadcrumb & Navigation */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500">
            <Link to="/" className="hover:text-[#68753D] transition">Home</Link>
            <span>/</span>
            <span className="font-semibold text-stone-900">Shopping Cart</span>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#68753D] hover:text-[#535F2F] transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {/* Page Title */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-200/80 pb-5">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              My Shopping Cart
            </h1>
            {totalItemsCount > 0 && (
              <span className="inline-flex items-center justify-center h-7 px-3 rounded-full bg-brand-50 border border-brand-200 text-xs font-bold text-[#68753D]">
                {totalItemsCount} {totalItemsCount === 1 ? "Item" : "Items"}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-stone-500">
            All orders eligible for verified safe delivery
          </p>
        </div>

        {/* EMPTY STATE */}
        {!cart || cart.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-3xl border border-stone-200 bg-white p-8 sm:p-14 text-center shadow-xs">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-50 border border-brand-200 text-[#68753D]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mb-2">
              Your Shopping Cart is Empty
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Looks like you haven't added any items to your bag yet. Explore our curated collections and grab limited-time deals!
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#68753D] hover:bg-[#535F2F] text-white font-bold text-sm px-8 py-3.5 transition shadow-sm active:scale-95"
            >
              <span>Start Shopping</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Quick Suggestions */}
            <div className="mt-12 pt-8 border-t border-stone-100">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-4">
                Popular Departments
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["Footwear", "Apparel", "Electronics", "Fragrances", "Sports Gear"].map((dept) => (
                  <Link
                    key={dept}
                    to="/categories"
                    className="px-3.5 py-1.5 rounded-full bg-stone-100 hover:bg-brand-50 hover:text-[#68753D] text-xs font-semibold text-stone-700 transition"
                  >
                    {dept} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ACTIVE CART LAYOUT */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Cart Items List (8 cols on lg) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              
              {/* Free Shipping Progress Indicator */}
              <div className="rounded-2xl border border-stone-200 bg-white p-4 sm:p-5 shadow-xs">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="flex items-center gap-1.5 text-stone-800">
                    🚚 <span>Delivery Status</span>
                  </span>
                  {isFreeShipping ? (
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      ✓ Free Express Shipping Unlocked!
                    </span>
                  ) : (
                    <span className="text-stone-600">
                      Add <strong className="text-[#68753D]">₹{amountToFreeShipping.toFixed(2)}</strong> more for FREE delivery
                    </span>
                  )}
                </div>

                {/* Progress bar line */}
                <div className="h-2 w-full rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      isFreeShipping ? "bg-emerald-600" : "bg-[#68753D]"
                    }`}
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Items Container */}
              <div className="space-y-4">
                {cart.map((item) => {
                  const unitPrice = getUnitPrice(item);
                  const itemTotal = unitPrice * (item.quantity || 1);
                  const resolvedImg = resolveItemImage(item);

                  return (
                    <div
                      key={item.id}
                      className="group flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 rounded-2xl border border-stone-200 bg-white p-4 sm:p-5 shadow-xs hover:border-stone-300 transition-all duration-200"
                    >
                      {/* Left: Product Thumbnail & Details */}
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        {/* Image Box */}
                        <div className="flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center rounded-xl bg-stone-50 border border-stone-100 p-2 overflow-hidden">
                          <img
                            src={resolvedImg}
                            alt={item.title || item.name || "Product"}
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              // If loading fails, gracefully fallback to Shoe
                              e.currentTarget.src = Shoe;
                            }}
                          />
                        </div>

                        {/* Title, Category & Price */}
                        <div className="flex-1 min-w-0 text-left">
                          <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide bg-stone-100 text-stone-600 mb-1">
                            {item.category || "General"}
                          </span>

                          <h3 className="text-sm sm:text-base font-bold text-stone-900 leading-snug line-clamp-2">
                            {item.title || item.name || "Unnamed Product"}
                          </h3>

                          <div className="mt-1 flex items-baseline gap-2">
                            <span className="text-xs sm:text-sm font-extrabold text-[#68753D]">
                              ₹{unitPrice.toFixed(2)}
                            </span>
                            <span className="text-[11px] text-stone-400">each</span>
                          </div>

                          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                            <span>✓ In Stock • Ready to ship</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Quantity Controls, Subtotal, & Remove */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                        
                        {/* Item Price Subtotal */}
                        <div className="text-left sm:text-right">
                          <p className="text-[10px] uppercase font-semibold text-stone-400 sm:block hidden">
                            Subtotal
                          </p>
                          <span className="text-base sm:text-lg font-extrabold text-stone-900">
                            ₹{itemTotal.toFixed(2)}
                          </span>
                        </div>

                        {/* Quantity Counter Pill */}
                        <div className="flex items-center rounded-xl border border-stone-200 bg-stone-50/80 p-0.5 shadow-2xs">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            disabled={(item.quantity || 1) <= 1}
                            aria-label="Decrease quantity"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-700 hover:bg-white hover:text-stone-900 disabled:opacity-30 disabled:hover:bg-transparent transition active:scale-95"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" />
                            </svg>
                          </button>

                          <span className="min-w-[32px] text-center text-xs font-extrabold text-stone-900">
                            {item.quantity || 1}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            aria-label="Increase quantity"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-700 hover:bg-white hover:text-stone-900 transition active:scale-95"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() => removeProduct(item.id)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 transition"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Cart Actions */}
              <div className="mt-2 flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={clearCart}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 text-xs font-semibold text-stone-600 hover:bg-stone-100 hover:text-rose-600 transition shadow-2xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>Clear Entire Cart</span>
                </button>

                <p className="text-xs text-stone-400">
                  Prices include all standard taxes
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Order Summary (4 cols on lg, Sticky) */}
            <div className="lg:col-span-4 sticky top-24 space-y-4">
              <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm">
                <h2 className="text-lg sm:text-xl font-extrabold text-stone-900 border-b border-stone-100 pb-4">
                  Order Summary
                </h2>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="mt-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-1.5">
                    Have a promo coupon?
                  </label>
                  <div className="flex items-center rounded-xl border border-stone-300 bg-stone-50 p-1 focus-within:border-[#68753D] focus-within:ring-2 focus-within:ring-[#68753D]/20 transition">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="e.g. SHOPMATE50"
                      className="flex-1 bg-transparent px-2.5 text-xs font-mono font-bold uppercase text-stone-800 placeholder:text-stone-400 outline-none"
                    />
                    <button
                      type="submit"
                      className="rounded-lg bg-stone-800 hover:bg-[#68753D] px-3.5 py-1.5 text-xs font-bold text-white transition active:scale-95"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="mt-1.5 text-xs text-rose-600 font-medium">
                      {promoError}
                    </p>
                  )}
                  {promoSuccess && (
                    <p className="mt-1.5 text-xs text-emerald-700 font-semibold">
                      {promoSuccess}
                    </p>
                  )}
                </form>

                {/* Line Items */}
                <div className="mt-5 space-y-3 border-t border-stone-100 pt-4 text-xs sm:text-sm text-stone-600">
                  <div className="flex items-center justify-between">
                    <span>Items Subtotal ({totalItemsCount})</span>
                    <span className="font-semibold text-stone-900">
                      ₹{subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <span>Shipping & Handling</span>
                      {isFreeShipping && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 font-bold">
                          Free
                        </span>
                      )}
                    </span>
                    <span className="font-semibold text-stone-900">
                      {isFreeShipping ? "FREE" : `₹${shippingFee.toFixed(2)}`}
                    </span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="flex items-center justify-between text-emerald-700 font-semibold">
                      <span>Coupon Discount ({appliedDiscount}%)</span>
                      <span>-₹{discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-stone-500">
                    <span>Estimated GST (Included)</span>
                    <span>18%</span>
                  </div>
                </div>

                {/* Final Total */}
                <div className="mt-6 pt-5 border-t border-stone-200">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-base font-bold text-stone-900">Total Payable</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#68753D]">
                      ₹{finalTotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 text-right">
                    Taxes and shipping calculated
                  </p>
                </div>

                {/* Checkout CTA Button */}
                <button
                  type="button"
                  onClick={() => navigate("/payment")}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#68753D] hover:bg-[#535F2F] text-white font-extrabold text-sm py-3.5 px-4 transition shadow-md active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Proceed to Checkout</span>
                </button>

                {/* Secondary Shopping Link */}
                <button
                  type="button"
                  onClick={() => navigate("/shop")}
                  className="mt-2.5 w-full inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-xs font-bold text-stone-700 py-3 px-4 transition"
                >
                  Continue Shopping
                </button>

                {/* Security and Trust Badges */}
                <div className="mt-6 pt-5 border-t border-stone-100 space-y-2.5 text-[11px] text-stone-500">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 text-sm">🔒</span>
                    <span>256-Bit SSL Encrypted & Protected Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500 text-sm">⚡</span>
                    <span>Express Dispatch within 24-48 Hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sky-600 text-sm">🔄</span>
                    <span>7-Day Replacement or Full Moneyback Guarantee</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;
