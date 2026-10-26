
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

// Import local assets for guaranteed display even when backend is offline
import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import men4 from "../assets/men4.jpg";
import men5 from "../assets/men5.jpg";
import men6 from "../assets/men6.jpg";

import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";
import women4 from "../assets/women4.jpg";
import women5 from "../assets/women5.jpg";
import women6 from "../assets/women6.jpg";

import school1 from "../assets/school1.jpg";
import school2 from "../assets/school2.jpg";
import school3 from "../assets/school3.jpg";
import school4 from "../assets/school4.jpg";
import school5 from "../assets/school5.jpg";
import school6 from "../assets/school6.jpg";

import bag1 from "../assets/bag1.jpg";
import bag2 from "../assets/bag2.jpg";
import bag3 from "../assets/bag3.jpg";
import bag4 from "../assets/bag4.jpg";
import bag5 from "../assets/bag5.jpg";
import bag6 from "../assets/bag6.jpg";

import phone1 from "../assets/phone1.jpg";
import phone2 from "../assets/phone2.jpg";
import phone3 from "../assets/phone3.jpg";
import phone4 from "../assets/phone4.jpg";
import phone5 from "../assets/phone5.jpg";

const FALLBACK_PRODUCTS = [
  // Men
  { id: "m1", name: "Premium Woolen Hoodie", price: "₹1,899", oldPrice: "₹2,799", review: "128", category: "Men", description: "Ultra-comfortable casual hoodie crafted from breathable fleece cotton for all-day comfort.", image: men1 },
  { id: "m2", name: "Classic Slim Casual Shirt", price: "₹1,249", oldPrice: "₹1,999", review: "97", category: "Men", description: "Timeless cotton tailored casual shirt ideal for layering or smart-casual outings.", image: men2 },
  { id: "m3", name: "Men's Formal Blazer", price: "₹3,999", oldPrice: "₹5,499", review: "63", category: "Men", description: "Modern tailored formal blazer with notched lapels, perfect for evening wear.", image: men3 },
  { id: "m4", name: "Athletic Performance Tracksuit", price: "₹2,199", oldPrice: "₹3,299", review: "142", category: "Men", description: "Stretchable moisture-wicking athletic fit designed for running and training.", image: men4 },
  { id: "m5", name: "Designer Wedding Sherwani", price: "₹4,599", oldPrice: "₹6,999", review: "110", category: "Men", description: "Intricately embroidered celebratory wear with premium regal accents.", image: men5 },
  { id: "m6", name: "Short Kurta in Pure Cotton", price: "₹1,499", oldPrice: "₹2,199", review: "205", category: "Men", description: "Breathable handloom short kurta for casual ethnic styling.", image: men6 },

  // Women
  { id: "w1", name: "Elegant Floral Summer Dress", price: "₹1,699", oldPrice: "₹2,499", review: "189", category: "Women", description: "Lightweight and flowy chiffon floral dress for sunny days and brunches.", image: women1 },
  { id: "w2", name: "Cropped Denim Jacket", price: "₹2,299", oldPrice: "₹3,199", review: "76", category: "Women", description: "Vibrant washed vintage denim jacket that pairs effortlessly with any outfit.", image: women2 },
  { id: "w3", name: "Chic Office Blouse", price: "₹1,399", oldPrice: "₹1,999", review: "94", category: "Women", description: "Soft silk-blend professional blouse tailored for all-day workspace comfort.", image: women3 },
  { id: "w4", name: "Warm Wool Blend Coat", price: "₹3,499", oldPrice: "₹4,999", review: "231", category: "Women", description: "Cozy trench coat featuring double-breasted closure and side slash pockets.", image: women4 },
  { id: "w5", name: "Casual Knit Pullover", price: "₹1,599", oldPrice: "₹2,299", review: "88", category: "Women", description: "Relaxed fit chunky knit sweater with ribbed cuffs and hemline.", image: women5 },
  { id: "w6", name: "Traditional Embroidered Anarkali", price: "₹3,299", oldPrice: "₹4,899", review: "164", category: "Women", description: "Graceful festive wear adorned with zari detailing and matching dupatta.", image: women6 },

  // School
  { id: "s1", name: "Ergonomic School Backpack", price: "₹1,199", oldPrice: "₹1,799", review: "312", category: "School", description: "Orthopedic padded shoulder straps with multi-compartment book organizers.", image: school1 },
  { id: "s2", name: "Insulated Lunch Bag Set", price: "₹699", oldPrice: "₹999", review: "145", category: "School", description: "Thermal leakproof food storage kit with stainless steel cutlery slots.", image: school2 },
  { id: "s3", name: "Stainless Steel Water Bottle", price: "₹549", oldPrice: "₹849", review: "220", category: "School", description: "BPA-free vacuum insulated flask keeping drinks cold for 24 hours.", image: school3 },
  { id: "s4", name: "Geometry & Math Instrument Kit", price: "₹399", oldPrice: "₹599", review: "89", category: "School", description: "Precision compass, dividers, and ruler set in a sturdy metallic case.", image: school4 },
  { id: "s5", name: "Hardcover Ruled Notebook Set", price: "₹499", oldPrice: "₹749", review: "178", category: "School", description: "Eco-friendly premium 100 GSM non-bleed paper notebooks (Pack of 4).", image: school5 },
  { id: "s6", name: "Double Decker Pencil Organizer", price: "₹349", oldPrice: "₹499", review: "95", category: "School", description: "Spacious zipped stationery pouch with dedicated elastic pen loops.", image: school6 },

  // Bag
  { id: "b1", name: "Leather Laptop Briefcase", price: "₹2,899", oldPrice: "₹4,199", review: "172", category: "Bag", description: "Handcrafted full-grain leather bag with padded 15.6-inch laptop sleeve.", image: bag1 },
  { id: "b2", name: "Urban Crossbody Sling Bag", price: "₹999", oldPrice: "₹1,499", review: "260", category: "Bag", description: "Water-resistant compact everyday carry sling with anti-theft zipper.", image: bag2 },
  { id: "b3", name: "Canvas Weekend Duffle Bag", price: "₹1,999", oldPrice: "₹2,999", review: "115", category: "Bag", description: "Rugged heavy-duty canvas bag with dedicated shoe compartment.", image: bag3 },
  { id: "b4", name: "Designer Chic Handbag", price: "₹2,499", oldPrice: "₹3,799", review: "198", category: "Bag", description: "Structured tote handbag with gold-tone hardware and detachable strap.", image: bag4 },
  { id: "b5", name: "Minimalist Commuter Backpack", price: "₹1,799", oldPrice: "₹2,599", review: "305", category: "Bag", description: "Sleek aerodynamic waterproof tech backpack with integrated USB charging port.", image: bag5 },
  { id: "b6", name: "Expandable Travel Carry-on", price: "₹3,499", oldPrice: "₹5,299", review: "84", category: "Bag", description: "Flight-approved compact suitcase with 360-degree silent spinner wheels.", image: bag6 },

  // Phone
  { id: "p1", name: "Shockproof Armor Phone Case", price: "₹499", oldPrice: "₹799", review: "410", category: "Phone", description: "Military drop-tested hybrid protective cover with raised camera bezels.", image: phone1 },
  { id: "p2", name: "MagSafe Fast Wireless Charger", price: "₹1,299", oldPrice: "₹1,999", review: "185", category: "Phone", description: "15W magnetic rapid charging pad with intelligent heat management.", image: phone2 },
  { id: "p3", name: "Tempered Glass Screen Protector", price: "₹299", oldPrice: "₹499", review: "520", category: "Phone", description: "9H edge-to-edge shatterproof crystal clear oleophobic glass (Pack of 2).", image: phone3 },
  { id: "p4", name: "Adjustable Aluminum Phone Stand", price: "₹599", oldPrice: "₹899", review: "138", category: "Phone", description: "Foldable desktop phone & tablet holder with anti-slip silicone cushions.", image: phone4 },
  { id: "p5", name: "Braided 60W USB-C Fast Cable", price: "₹399", oldPrice: "₹699", review: "290", category: "Phone", description: "Ultra-durable nylon braided 2-meter quick sync and charge cable.", image: phone5 },
];

function FeatureSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [apiProducts, setApiProducts] = useState(FALLBACK_PRODUCTS);
  const [addedToast, setAddedToast] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Map backend products with fallback images if needed
          const mapped = data.map((item, idx) => {
            const fallbackItem = FALLBACK_PRODUCTS[idx % FALLBACK_PRODUCTS.length];
            return {
              ...item,
              image: item.imagePath ? `http://localhost:5000${item.imagePath}` : fallbackItem.image,
            };
          });
          setApiProducts(mapped);
        }
      })
      .catch(() => {
        // Silently use rich FALLBACK_PRODUCTS
      });
  }, []);

  const categories = [
    { key: "Men", title: "Men's Fashion", subtitle: "Casuals, blazers & formals", count: "6+ Items" },
    { key: "Women", title: "Women's Fashion", subtitle: "Dresses, coats & chic wear", count: "6+ Items" },
    { key: "School", title: "School Essentials", subtitle: "Bags, bottles & kits", count: "6+ Items" },
    { key: "Bag", title: "Stylish Bags", subtitle: "Backpacks, slings & luggage", count: "6+ Items" },
    { key: "Phone", title: "Phone Accessories", subtitle: "Cases, chargers & stands", count: "5+ Items" },
  ];

  const handleAddToCart = (product, e) => {
    if (e) e.stopPropagation();
    addToCart({
      ...product,
      title: product.name,
      thumbnail: product.image,
      image: product.image,
      price: typeof product.price === "string" ? Number(product.price.replace(/[^\d.]/g, "")) : product.price,
    });
    setAddedToast(product.id);
    setTimeout(() => setAddedToast(null), 2000);
  };

  // ----------------------------------------------------
  // Product Detail View
  // ----------------------------------------------------
  if (selectedProduct) {
    return (
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <button
          onClick={() => setSelectedProduct(null)}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm font-semibold text-stone-700 hover:bg-stone-50 transition shadow-xs"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to {selectedCategory?.category || "Products"}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 rounded-3xl border border-stone-200 bg-white shadow-sm">
          {/* Image Container */}
          <div className="flex items-center justify-center rounded-2xl bg-stone-50 p-6 border border-stone-100 overflow-hidden">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="max-h-[380px] w-auto object-contain transition duration-500 hover:scale-105"
            />
          </div>

          {/* Details Column */}
          <div className="flex flex-col justify-center">
            <span className="inline-block w-fit px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-bold text-[#68753D] uppercase tracking-wide mb-3">
              {selectedProduct.category} Collection
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight mb-3">
              {selectedProduct.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-amber-400 text-sm">
                {"★★★★★"}
              </div>
              <span className="text-xs font-semibold text-stone-600">
                ({selectedProduct.review} verified ratings)
              </span>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-3xl font-extrabold text-[#68753D]">
                {selectedProduct.price}
              </span>
              {selectedProduct.oldPrice && (
                <span className="text-lg text-stone-400 line-through">
                  {selectedProduct.oldPrice}
                </span>
              )}
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
                Special Deal
              </span>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={(e) => handleAddToCart(selectedProduct, e)}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#68753D] hover:bg-[#535F2F] text-white font-bold text-sm shadow-sm transition active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {addedToast === selectedProduct.id ? "Added to Cart ✓" : "Add to Cart"}
              </button>

              <button
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-stone-300 text-stone-700 font-semibold text-sm hover:bg-stone-50 transition"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ----------------------------------------------------
  // Main Category Grid View
  // ----------------------------------------------------
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#68753D]">
            Curated Categories
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
            Explore Handpicked Varieties
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500">
          Click any department to reveal featured collections
        </p>
      </div>

      {/* 5-Column Category Grid (Responsive 2 cols on mobile, 3 on tablet, 5 on desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
        {categories.map((cat) => {
          const catProducts = apiProducts.filter((p) => p.category === cat.key);
          const firstProduct = catProducts[0];
          const isSelected = selectedCategory?.category === cat.key;

          return (
            <div
              key={cat.key}
              onClick={() => {
                if (isSelected) {
                  setSelectedCategory(null);
                } else {
                  setSelectedCategory({
                    category: cat.key,
                    title: cat.title,
                    products: catProducts,
                  });
                }
              }}
              className={`group cursor-pointer rounded-2xl border p-3.5 sm:p-4 text-center transition-all duration-300 bg-white hover:-translate-y-1 hover:shadow-md ${
                isSelected
                  ? "border-[#68753D] ring-2 ring-[#68753D]/30 shadow-md bg-stone-50"
                  : "border-stone-200"
              }`}
            >
              {/* Category Image Box */}
              <div className="relative mx-auto flex h-36 sm:h-44 md:h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-stone-50 p-2 border border-stone-100">
                {firstProduct?.image && (
                  <img
                    src={firstProduct.image}
                    alt={cat.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-xs text-stone-700 shadow-xs">
                  {cat.count}
                </span>
              </div>

              {/* Category Name & Action */}
              <h3 className="mt-3 font-bold text-stone-900 text-sm sm:text-base group-hover:text-[#68753D] transition">
                {cat.title}
              </h3>
              <p className="text-[11px] text-stone-500 truncate mt-0.5">
                {cat.subtitle}
              </p>

              <div className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-[#68753D]">
                <span>{isSelected ? "Hide Varieties ↑" : "View Varieties →"}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ----------------------------------------------------
          Selected Category Products Accordion / Expansion
          ---------------------------------------------------- */}
      {selectedCategory && (
        <div className="mt-8 p-5 sm:p-8 rounded-3xl border border-stone-200 bg-white shadow-sm animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Viewing Collection
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                {selectedCategory.title} ({selectedCategory.products.length} Products)
              </h3>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs sm:text-sm font-semibold text-stone-500 hover:text-stone-900 transition"
            >
              Close Collection ✕
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {selectedCategory.products.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group flex flex-col justify-between cursor-pointer rounded-2xl border border-stone-200 bg-white p-3.5 sm:p-4 hover:border-stone-300 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="relative flex h-48 sm:h-52 items-center justify-center rounded-xl bg-stone-50 p-3 overflow-hidden border border-stone-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-400 text-stone-950">
                      ★ 4.8
                    </span>
                  </div>

                  <h4 className="mt-3 font-bold text-stone-900 text-sm line-clamp-1 group-hover:text-[#68753D] transition">
                    {product.name}
                  </h4>

                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-base font-extrabold text-[#68753D]">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-xs text-stone-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleAddToCart(product, e)}
                  className="mt-3.5 w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-50 border border-brand-200 text-[#68753D] font-bold text-xs hover:bg-[#68753D] hover:text-white transition shadow-2xs active:scale-95"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  {addedToast === product.id ? "Added ✓" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default FeatureSection;