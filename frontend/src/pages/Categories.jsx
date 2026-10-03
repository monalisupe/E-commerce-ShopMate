
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

function Categories() {
  // Stores categories received from API
  const [categories, setCategories] = useState([]);

  // Stores products received from API
  const [products, setProducts] = useState([]);

  // Stores the product clicked by the user
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Stores the category clicked by the user
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {addToCart} =useCart();

  // =========================================================
  // Fetch categories from product API
  // =========================================================
  useEffect(() => {
    fetch(
      "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
    )
      .then((response) => response.json())
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

        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // =========================================================
  // Category click
  // =========================================================
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    // Clear selected product
    setSelectedProduct(null);

    // Clear old products
    setProducts([]);

    fetch(
      "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        const categoryProducts = data.filter(
          (product) => product.category === category.name
        );

        setProducts(categoryProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  return (
    // =========================================================
    // FIX 1: Full-width main container
    // =========================================================
    <section className="w-full px-6 py-10">

      {/* Section Heading */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          Shop by Categories
        </h2>

        <button className="text-sm font-medium text-[#68753D] transition hover:text-[#4F5B2C]">
          View All Categories →
        </button>
      </div>

      {/* ================= CATEGORIES ================= */}

      {/* =====================================================
          FIX 2:
          grid-cols-4 = 4 categories in one row
          w-full = full available width
      ===================================================== */}
      <div className="grid w-full grid-cols-4 gap-6 pb-4">

        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            className={
              "group w-full cursor-pointer rounded-lg p-2 text-center " +
              (selectedCategory?.name === category.name
                ? "bg-gray-300"
                : "hover:bg-gray-300")
            }
          >

            {/* =================================================
                FIX 3:
                Bigger category image box
                rounded-2xl instead of rounded-full
            ================================================= */}
            <div className="mx-auto flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F2F4E9] transition duration-300 group-hover:scale-105 group-hover:bg-[#E7EBD8]">

              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-contain"
              />

            </div>

            {/* Category Name */}
            <p className="mt-3 text-sm font-semibold text-gray-800">
              {category.name}
            </p>

          </div>
        ))}

      </div>

      {/* ================= PRODUCTS ================= */}

      {selectedCategory && !selectedProduct && (
        <div className="mt-10">

          <h2 className="mb-5 text-xl font-bold">
            {selectedCategory.name} Products
          </h2>

          {products.length === 0 ? (
            <p className="text-gray-500">
              No products available in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                 // Fixed product-card height.
                //This prevents different product images/text
                //from making cards grow unexpectedly.
                  className="h-auto cursor-pointer rounded-xl border p-5 transition hover:shadow-lg"
                >

                  {/* FIX 5:
                      Fixed product image height.
                  */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-contain"
                  />

                  <h3 className="mt-4 font-bold">
                    {product.name}
                  </h3>

                  <p className="mt-2 font-semibold">
                    ₹{(product.priceCents / 100).toFixed(2)}
                  </p>

                  {/*ADD TO CART BUTTON */}
                  {/* <button
                  onClick={()=> selectedProduct(product)}
                  className="mt-auto w-full rounded-lg bg-[#68753D] py-2 font-semibold text-white transition hover:bg-[#4F5B2C]"
                  >
                    Add to cart
                  </button> */}

                  {/* ADD TO CART - MAIN PRODUCT */}
<button
  onClick={(e) => {
    e.stopPropagation();

    addToCart({
      ...product,
      title: product.name,
      thumbnail: product.image,
      price: product.priceCents / 100,
    });
  }}
  className="mt-3 rounded bg-yellow-700 px-4 py-2 text-white hover:bg-yellow-800"
>
  Add to Cart
</button>

                </div>
              ))}

            </div>
          )}

        </div>
      )}

      {/* ================= PRODUCT DETAILS ================= */}

      {selectedProduct && (
        // =====================================================
        // FIX 6:
        // Fixed width for selected product details.
        // w-[350px] prevents it from stretching across
        // the entire Categories section.
        // =====================================================
        <div className="mx-auto mt-10 w-[750px] rounded-xl border p-5">

          {/* Product Name */}
          <h2 className="mb-4 text-2xl font-bold">
            {selectedProduct.name}
          </h2>

          {/* =================================================
              FIX 7:
              Smaller fixed image area so details don't
              become unnecessarily large.
          ================================================= */}
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="mb-4 h-40 w-full object-contain"
          />

          {/* Product Description */}
          <p className="mb-4 text-gray-600">
            {selectedProduct.description}
          </p>

          {/* Product Price */}
          <p className="mb-4 text-xl font-bold text-green-700">
            ₹{(selectedProduct.priceCents / 100).toFixed(2)}
          </p>

          {/* Product Category */}
          <p className="mb-4 text-gray-500">
            Category: {selectedCategory.name}
          </p>

          {/* Back Button */}
          <button
            onClick={() => setSelectedProduct(null)}
            className="rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
          >
            ← Back to Products
          </button>

        </div>
      )}

    </section>
  );
}

export default Categories;