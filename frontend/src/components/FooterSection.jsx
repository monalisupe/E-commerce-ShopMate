import { Link } from "react-router-dom";
import ShopmateLogo1 from "../assets/ShopmateLogo1.png";

function FooterSection() {
  return (
    <footer className="w-full bg-stone-900 text-stone-300 border-t border-stone-800">
      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand Info & Newsletter (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col">
            <Link to="/" className="inline-block mb-4">
              <img
                src={ShopmateLogo1}
                alt="ShopMate"
                className="h-10 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              ShopMate is your everyday destination for authentic lifestyle fashion, high-performance electronics, and curated essentials at unmatchable prices.
            </p>

            {/* Newsletter Subscription */}
            <div className="max-w-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                Stay in the Loop
              </span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to ShopMate VIP Deals!");
                }}
                className="flex items-center rounded-xl bg-stone-800 border border-stone-700 p-1 focus-within:border-[#68753D] transition"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-3 text-xs text-white placeholder:text-stone-500 outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[#68753D] px-3.5 py-2 text-xs font-bold text-white hover:bg-[#535F2F] transition active:scale-95 shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Shop & Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>
                <Link to="/shop" className="hover:text-amber-300 transition">All Products</Link>
              </li>
              <li>
                <Link to="/deals" className="hover:text-amber-300 transition">Featured Deals</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-amber-300 transition">Category Catalog</Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-amber-300 transition">Seasonal Offers</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-amber-300 transition">View Cart</Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>
                <span className="hover:text-amber-300 transition cursor-pointer">Help Center & FAQs</span>
              </li>
              <li>
                <span className="hover:text-amber-300 transition cursor-pointer">Track Your Order</span>
              </li>
              <li>
                <span className="hover:text-amber-300 transition cursor-pointer">Shipping & Delivery</span>
              </li>
              <li>
                <span className="hover:text-amber-300 transition cursor-pointer">Easy Returns Policy</span>
              </li>
              <li>
                <span className="hover:text-amber-300 transition cursor-pointer">Contact Us</span>
              </li>
            </ul>
          </div>

          {/* Trust & Guarantee */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Shop With Confidence
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <span className="text-amber-400 text-sm">🔒</span>
                <div>
                  <strong className="text-stone-200 block">Bank-Grade Security</strong>
                  <span>256-bit encrypted checkout</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-400 text-sm">✓</span>
                <div>
                  <strong className="text-stone-200 block">100% Guaranteed</strong>
                  <span>Direct source authenticity</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-sky-400 text-sm">⚡</span>
                <div>
                  <strong className="text-stone-200 block">Express Delivery</strong>
                  <span>Fast shipping across India</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 ShopMate E-Commerce. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-stone-400 cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;