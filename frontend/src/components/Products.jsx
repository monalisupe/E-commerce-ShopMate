
// import { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";

// function Products() {
//   const { addToCart } = useCart();

//   const [products, setProducts] = useState([]);

//   // ==================================================
//   // CHANGED: Best Selling Products API
//   // ==================================================
//   // We are NOT using DummyJSON.
//   // We are using the Free Ecommerce Products API.
//   //
//   // This API contains multiple categories:
//   // Electronics & Gadgets
//   // Fashion & Apparel
//   // Beauty & Personal Care
//   // Home & Kitchen
//   // Health & Fitness
//   //
//   // API gives us 50 products.
//   // ==================================================

//   useEffect(() => {
//     fetch(
//       "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Best Selling API Response:", data);

//         // Store API products
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error(
//           "Error fetching Best Selling products:",
//           error
//         );
//       });
//   }, []);

//   return (
//     <section className="mx-auto w-full px-4 py-10">

//       {/* ==================================================
//           Section Heading
//           ================================================== */}

//       <div className="mb-6 flex items-center justify-between">

//         <h2 className="text-xl font-bold text-gray-900">
//           Best Selling Products
//         </h2>

//         <button className="text-sm font-medium text-[#68753D] transition hover:text-[#4F5B2C]">
//           View All Products →
//         </button>

//       </div>

//       {/* ==================================================
//           Products
//           ================================================== */}

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

//         {/* CHANGED:
//             slice(0, 8) shows only 8 products on homepage.
//             We still receive all 50 products from the API.
//         */}

//         {products.slice(0, 8).map((product) => (

//           <div
//             key={product.id}
//             className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
//           >

//             {/* ==================================================
//                 Product Image
//                 ================================================== */}

//             <div className="relative flex h-48 items-center justify-center bg-[#FAFAFA] p-4">

//               {/* CHANGED:
//                   API directly provides image URL.
//               */}

//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
//               />

//               {/* Wishlist */}
//               <button
//                 className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition hover:text-red-500"
//               >
//                 ♡
//               </button>

//             </div>

//             {/* ==================================================
//                 Product Details
//                 ================================================== */}

//             <div className="p-4">

//               {/* CHANGED:
//                   API uses "name"
//               */}

//               <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
//                 {product.name}
//               </h3>

//               {/* ==================================================
//                   Rating
//                   ================================================== */}

//               {/* CHANGED:
//                   API gives:
//                   rating.stars
//                   rating.count
//               */}

//               <div className="mt-2 text-xs">

//                 <span className="text-yellow-500">
//                   ★ {product.rating?.stars}
//                 </span>

//                 <span className="ml-1 text-gray-400">
//                   ({product.rating?.count})
//                 </span>

//               </div>

//               {/* ==================================================
//                   Price
//                   ================================================== */}

//               {/* CHANGED:
//                   API gives priceCents in USD cents.
//                   Example:
//                   2000 = $20

//                   We convert USD → INR using 90.
//               */}

//               <div className="mt-2">

//                 <span className="font-bold text-gray-900">
//                   ₹{((product.priceCents / 100) * 90).toFixed(2)}
//                 </span>

//               </div>

//               {/* ==================================================
//                   Category
//                   ================================================== */}

//               <p className="mt-1 text-xs text-gray-500">
//                 {product.category}
//               </p>

//               {/* ==================================================
//                   Add To Cart
//                   ================================================== */}

//               <button
//                 onClick={() =>
//                   addToCart({
//                     ...product,

//                     // CartContext expects a thumbnail
//                     thumbnail: product.image,

//                     // Convert priceCents → INR
//                     price: (product.priceCents / 100) * 90,
//                   })
//                 }
//                 className="mt-4 w-full rounded-lg bg-[#68753D] py-2 font-semibold text-white transition hover:bg-[#4F5B2C]"
//               >
//                 Add to Cart
//               </button>

//             </div>

//           </div>

//         ))}

//       </div>

//     </section>
//   );
// }

// export default Products;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Local asset fallbacks so section is never blank
import Shoe from "../assets/Shoe.jpg";
import Headphones from "../assets/Headphones.jpg";
import Laptop from "../assets/Laptop.jpg";
import Perfume from "../assets/Perfume.jpg";
import Sports from "../assets/Sports.jpg";
import Bagpack from "../assets/Bagpack.jpg";
import Fashion from "../assets/Fashion.jpg";
import watch from "../assets/watch.jpg";

const FALLBACK_BEST_SELLERS = [
  { id: "bs-1", name: "Pro Ultra Air Cushion Running Shoes", category: "Footwear", priceCents: 4999, rating: { stars: 4.9, count: 324 }, image: Shoe },
  { id: "bs-2", name: "Wireless ANC Over-Ear Studio Headphones", category: "Audio", priceCents: 6999, rating: { stars: 4.8, count: 512 }, image: Headphones },
  { id: "bs-3", name: "Slim Ultra-Book 14-inch FHD Display", category: "Electronics", priceCents: 54990, rating: { stars: 4.7, count: 189 }, image: Laptop },
  { id: "bs-4", name: "Aura Signature Luxury Eau De Parfum 100ml", category: "Fragrance", priceCents: 2999, rating: { stars: 4.9, count: 240 }, image: Perfume },
  { id: "bs-5", name: "Official Championship Sports Ball Bundle", category: "Sports", priceCents: 1599, rating: { stars: 4.6, count: 98 }, image: Sports },
  { id: "bs-6", name: "Weatherproof Urban Ergonomic Travel Backpack", category: "Bags", priceCents: 2199, rating: { stars: 4.8, count: 415 }, image: Bagpack },
  { id: "bs-7", name: "Seasonal Tailored Minimalist Coat", category: "Fashion", priceCents: 3799, rating: { stars: 4.7, count: 167 }, image: Fashion },
  { id: "bs-8", name: "Chronograph Water-Resistant Classic Watch", category: "Accessories", priceCents: 4299, rating: { stars: 4.9, count: 380 }, image: watch },
];

function Products() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState(FALLBACK_BEST_SELLERS);
  const [wishlist, setWishlist] = useState({});
  const [addedToast, setAddedToast] = useState(null);

  const BACKEND_URL = "http://localhost:5000";

  useEffect(() => {
    fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.warn("Using fallback best sellers:", error);
      });
  }, []);

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToCart = (product, calculatedPrice, finalImage) => {
    addToCart({
      ...product,
      title: product.name || product.title || "Product",
      thumbnail: finalImage,
      image: finalImage,
      price: calculatedPrice,
    });
    setAddedToast(product.id);
    setTimeout(() => setAddedToast(null), 2000);
  };

  return (
    <section className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      {/* Section Heading */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#68753D]">
            Top Customer Favorites
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
            Best Selling Products
          </h2>
        </div>

        <Link
          to="/shop"
          className="text-xs sm:text-sm font-semibold text-[#68753D] hover:text-[#535F2F] transition flex items-center gap-1"
        >
          Explore All Products
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Products Grid (Aligned Equal-Height Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {products.slice(0, 8).map((product) => {
          const imageUrl = product.imagePath
            ? `${BACKEND_URL}${product.imagePath}`
            : product.image || product.thumbnail || Shoe;

          let price = 999;
          if (product.priceCents !== undefined && product.priceCents !== null) {
            price = (Number(product.priceCents) / 100) * 90;
          } else if (product.price !== undefined && product.price !== null) {
            const numericPrice = Number(String(product.price).replace(/[₹$,]/g, "").trim());
            if (Number.isFinite(numericPrice)) price = numericPrice;
          }

          const originalPrice = (price * 1.35).toFixed(2);
          const isWishlisted = !!wishlist[product.id];

          return (
            <div
              key={product.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300"
            >
              {/* Product Top Image Box */}
              <div>
                <div className="relative flex h-52 sm:h-56 items-center justify-center bg-stone-50 p-4 overflow-hidden border-b border-stone-100">
                  <img
                    src={imageUrl}
                    alt={product.name || product.title || "Product"}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = Shoe;
                    }}
                  />

                  {/* Discount Badge */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-stone-900 shadow-xs">
                    Save 25%
                  </span>

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

                {/* Details */}
                <div className="p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1">
                    {product.category || "General"}
                  </p>

                  <h3 className="line-clamp-2 text-sm sm:text-base font-bold text-stone-900 group-hover:text-[#68753D] transition">
                    {product.name || product.title || "Product"}
                  </h3>

                  {/* Rating Stars */}
                  <div className="mt-2 flex items-center gap-1.5 text-xs">
                    <span className="text-amber-500 font-bold">
                      ★ {product.rating?.stars ?? "4.8"}
                    </span>
                    <span className="text-stone-400">
                      ({product.rating?.count ?? "120+"})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-[#68753D]">
                      ₹{price.toFixed(2)}
                    </span>
                    <span className="text-xs text-stone-400 line-through">
                      ₹{originalPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Add to Cart Footer (Pinned to bottom for perfect grid alignment) */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  type="button"
                  onClick={() => handleAddToCart(product, price, imageUrl)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#68753D] py-2.5 px-4 font-bold text-xs sm:text-sm text-white transition hover:bg-[#535F2F] shadow-xs active:scale-95"
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
    </section>
  );
}

export default Products;
