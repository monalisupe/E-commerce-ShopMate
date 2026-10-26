
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Fallback category images from local assets if external API is unreachable
import Fashion from "../assets/Fashion.jpg";
import Shoe from "../assets/Shoe.jpg";
import Sports from "../assets/Sports.jpg";
import Laptop from "../assets/Laptop.jpg";
import Perfume from "../assets/Perfume.jpg";
import Plant from "../assets/Plant.jpg";

const DEFAULT_CATEGORIES = [
  { name: "Apparel & Fashion", image: Fashion },
  { name: "Footwear & Shoes", image: Shoe },
  { name: "Sports & Fitness", image: Sports },
  { name: "Electronics & Tech", image: Laptop },
  { name: "Perfumes & Scents", image: Perfume },
  { name: "Home & Botanical", image: Plant },
];

function Categories() {
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addedToast, setAddedToast] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
      .then((response) => {
        if (!response.ok) throw new Error("API failed");
        return response.json();
      })
      .then((data) => {
        const uniqueCategories = [
          ...new Map(
            data.map((product) => [
              product.category,
              {
                name: product.category,
                image: product.image,
              },
            ])
          ).values(),
        ];
        if (uniqueCategories.length > 0) {
          setCategories(uniqueCategories);
        }
      })
      .catch((error) => {
        console.warn("Using fallback categories:", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
    setProducts([]);
    setLoading(true);

    fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        const categoryProducts = data.filter(
          (product) => product.category === category.name
        );
        setProducts(categoryProducts);
      })
      .catch((error) => {
        console.warn("Using fallback category products:", error);
        // Fallback demo product if external API fails
        setProducts([
          {
            id: `${category.name}-demo-1`,
            name: `${category.name} Premium Edition`,
            image: category.image,
            priceCents: 2499,
            description: `Top-rated selection in ${category.name}. Handcrafted with exceptional materials for lasting durability.`,
          },
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAddToCart = (product, e) => {
    if (e) e.stopPropagation();
    const priceVal = product.priceCents
      ? (product.priceCents / 100) * 90
      : product.price || 999;

    addToCart({
      ...product,
      title: product.name,
      thumbnail: product.image,
      image: product.image,
      price: priceVal,
    });
    setAddedToast(product.id);
    setTimeout(() => setAddedToast(null), 2000);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#68753D]">
            Browse Catalog
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
            Shop by Categories
          </h2>
        </div>

        <Link
          to="/shop"
          className="text-xs sm:text-sm font-semibold text-[#68753D] hover:text-[#535F2F] transition flex items-center gap-1"
        >
          View All Departments
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Categories Grid (Fully Responsive: 2 cols on mobile, 3 on small tablet, 4 on tablet, 6 on desktop) */}
      <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 pb-2">
        {categories.map((category) => {
          const isSelected = selectedCategory?.name === category.name;
          return (
            <div
              key={category.name}
              onClick={() => handleCategoryClick(category)}
              className={`group flex flex-col items-center cursor-pointer rounded-2xl border p-3 sm:p-4 text-center transition-all duration-300 bg-white hover:-translate-y-1 hover:shadow-md ${
                isSelected
                  ? "border-[#68753D] ring-2 ring-[#68753D]/30 bg-stone-50 shadow-xs"
                  : "border-stone-200"
              }`}
            >
              {/* Image Box */}
              <div className="flex h-28 sm:h-36 w-full items-center justify-center overflow-hidden rounded-xl bg-stone-50 p-2 border border-stone-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-108"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <p className="mt-2.5 text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#68753D] line-clamp-1 transition">
                {category.name}
              </p>
              <span className="text-[11px] text-stone-400 mt-0.5">Explore →</span>
            </div>
          );
        })}
      </div>

      {/* Products under Selected Category */}
      {selectedCategory && !selectedProduct && (
        <div className="mt-8 p-5 sm:p-8 rounded-3xl border border-stone-200 bg-white shadow-sm animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Category
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                {selectedCategory.name}
              </h3>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs sm:text-sm font-semibold text-stone-500 hover:text-stone-900 transition"
            >
              Close Category ✕
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-3 border-stone-200 border-t-[#68753D]"></div>
            </div>
          ) : products.length === 0 ? (
            <p className="text-sm text-stone-500 py-6 text-center">
              No products available in this category currently.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {products.map((product) => {
                const priceInINR = product.priceCents
                  ? ((product.priceCents / 100) * 90).toFixed(2)
                  : "999.00";

                return (
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
                      </div>

                      <h4 className="mt-3 font-bold text-stone-900 text-sm line-clamp-2 group-hover:text-[#68753D] transition">
                        {product.name}
                      </h4>

                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-base font-extrabold text-[#68753D]">
                          ₹{priceInINR}
                        </span>
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
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Selected Product Details (Responsive, No Overflow) */}
      {selectedProduct && (
        <div className="mt-8 p-6 sm:p-8 rounded-3xl border border-stone-200 bg-white shadow-sm max-w-3xl mx-auto animate-fadeIn">
          <button
            onClick={() => setSelectedProduct(null)}
            className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 transition"
          >
            ← Back to {selectedCategory?.name || "Products"}
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="flex h-56 sm:h-72 items-center justify-center rounded-2xl bg-stone-50 p-4 border border-stone-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-full w-auto object-contain"
              />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#68753D]">
                {selectedCategory?.name}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1 mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                {selectedProduct.description || "High-quality guaranteed product crafted with precision for exceptional performance."}
              </p>

              <div className="text-2xl font-extrabold text-[#68753D] mb-5">
                ₹{selectedProduct.priceCents ? ((selectedProduct.priceCents / 100) * 90).toFixed(2) : "999.00"}
              </div>

              <button
                type="button"
                onClick={(e) => handleAddToCart(selectedProduct, e)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#68753D] text-white font-bold text-sm hover:bg-[#535F2F] transition shadow-xs active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {addedToast === selectedProduct.id ? "Added to Cart ✓" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Categories;