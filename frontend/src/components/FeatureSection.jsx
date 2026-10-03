
import { useState, useEffect } from "react";

// CHANGED: Import CartContext
import { useCart } from "../context/CartContext";

function FeatureSection() {
  // Selected category (holds { category, products })
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Selected individual product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Backend products
  const [apiProducts, setApiProducts] = useState([]);

  // CHANGED: Get addToCart from CartContext
  const { addToCart } = useCart();

  // ==================================================
  // Fetch products from backend
  // ==================================================

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setApiProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // ==================================================
  // Categories
  // ==================================================

  const categories = ["Men", "Women", "School", "Bag", "Phone"];

  // ==================================================
  // Product Details
  // ==================================================

  if (selectedProduct) {
    return (
      <section className="w-full px-4 py-6">

        <div className="rounded-xl border p-6">

          {/* Product Name */}
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            {selectedProduct.name}
          </h1>

          {/* Product Image */}
          <img
            src={`http://localhost:5000${selectedProduct.imagePath}`}
            alt={selectedProduct.name}
            className="mb-6 h-80 w-full rounded-lg bg-gray-100 object-contain p-6"
          />

          {/* Price */}
          <p className="mb-3 text-2xl text-green-700">
            {selectedProduct.price}
          </p>

          {/* Old Price */}
          <p className="mb-3 text-2xl text-red-700 line-through">
            {selectedProduct.oldPrice}
          </p>

          {/* Review */}
          <p className="mb-2 text-yellow-600">
            ⭐ {selectedProduct.review}
          </p>

          {/* Description */}
          <p className="mb-4 text-gray-600">
            {selectedProduct.description}
          </p>

          {/* CHANGED: Add to Cart button */}
          <button
            onClick={() => addToCart(selectedProduct)}
            className="mr-3 rounded-lg bg-yellow-700 px-5 py-2 text-white hover:bg-gray-600"
          >
            Add to Cart
          </button>

          {/* Back Button */}
          <button
            onClick={() => setSelectedProduct(null)}
            className="mt-5 rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
          >
            ← Back to {selectedCategory?.category}
          </button>

        </div>

      </section>
    );
  }

  return (
    <section className="w-full px-4 py-6">

      {/* ==================================================
          Category Grid
          CHANGED: Category grid is ALWAYS visible
          ================================================== */}

      <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 lg:grid-cols-5">

        {categories.map((category) => {

          const categoryProducts = apiProducts.filter(
            (product) => product.category === category
          );

          const firstProduct = categoryProducts[0];

          return (
            <div
              key={category}
              onClick={() =>
                setSelectedCategory({
                  category,
                  products: categoryProducts,
                })
              }
              className="cursor-pointer rounded-xl border p-4 transition hover:shadow-lg"
            >

              {/* Category Image */}
              {firstProduct && (
                <img
                  src={`http://localhost:5000${firstProduct.imagePath}`}
                  alt={category}
                  className="h-[250px] w-full object-contain"
                />
              )}

              {/* Category Name */}
              <h2 className="mt-3 text-center font-semibold">
                {category === "Men" && "Men's Fashion"}
                {category === "Women" && "Women's Fashion"}
                {category === "School" && "School Essentials"}
                {category === "Bag" && "Stylish Bag"}
                {category === "Phone" && "Phone Accessories"}
              </h2>

              <p className="mt-2 text-center text-sm text-gray-500">
                View varieties →
              </p>

            </div>
          );
        })}

      </div>


      {/* ==================================================
          Selected Category Products
          CHANGED: Products appear BELOW categories
          ================================================== */}

      {selectedCategory && (

        <div className="mt-8 rounded-xl border p-6">

          {/* Selected Category Name */}
          <h2 className="mb-5 text-3xl font-bold">
            {selectedCategory.category}
          </h2>


          {/* Product Grid */}

          {selectedCategory.products.length === 0 ? (

            <p className="text-gray-500">
              No products found in this category.
            </p>

          ) : (

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

              {selectedCategory.products.map((product) => (

                <div
                  key={product.id}
                  className="rounded-xl border p-3 transition hover:shadow-lg"
                >

                  {/* Product Image
                      CHANGED: Clicking image opens details */}
                  <img
                    onClick={() => setSelectedProduct(product)}
                    src={`http://localhost:5000${product.imagePath}`}
                    alt={product.name}
                    className="h-56 w-full cursor-pointer object-contain"
                  />


                  {/* Product Name */}

                  <h3 className="mt-2 font-semibold">
                    {product.name}
                  </h3>


                  {/* Current Price */}

                  <p className="mt-1 font-bold text-green-700">
                    {product.price}
                  </p>


                  {/* Old Price */}

                  <p className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </p>


                  {/* Review */}

                  <p className="text-sm text-yellow-600">
                    ⭐ {product.review}
                  </p>


                  {/* CHANGED: Add to Cart */}

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full rounded-lg bg-yellow-700 px-4 py-2 text-sm text-white hover:bg-gray-600"
                  >
                    Add to Cart
                  </button>

                </div>

              ))}

            </div>

          )}


          {/* Back to Categories */}

          <button
            onClick={() => setSelectedCategory(null)}
            className="mt-6 rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
          >
            ← Back to Categories
          </button>

        </div>

      )}

    </section>
  );
}

export default FeatureSection;