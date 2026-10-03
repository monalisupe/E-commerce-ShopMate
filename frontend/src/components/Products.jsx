
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

function Products() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);

  // ==================================================
  // CHANGED: Best Selling Products API
  // ==================================================
  // We are NOT using DummyJSON.
  // We are using the Free Ecommerce Products API.
  //
  // This API contains multiple categories:
  // Electronics & Gadgets
  // Fashion & Apparel
  // Beauty & Personal Care
  // Home & Kitchen
  // Health & Fitness
  //
  // API gives us 50 products.
  // ==================================================

  useEffect(() => {
    fetch(
      "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Best Selling API Response:", data);

        // Store API products
        setProducts(data);
      })
      .catch((error) => {
        console.error(
          "Error fetching Best Selling products:",
          error
        );
      });
  }, []);

  return (
    <section className="mx-auto w-full px-4 py-10">

      {/* ==================================================
          Section Heading
          ================================================== */}

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold text-gray-900">
          Best Selling Products
        </h2>

        <button className="text-sm font-medium text-[#68753D] transition hover:text-[#4F5B2C]">
          View All Products →
        </button>

      </div>

      {/* ==================================================
          Products
          ================================================== */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {/* CHANGED:
            slice(0, 8) shows only 8 products on homepage.
            We still receive all 50 products from the API.
        */}

        {products.slice(0, 8).map((product) => (

          <div
            key={product.id}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            {/* ==================================================
                Product Image
                ================================================== */}

            <div className="relative flex h-48 items-center justify-center bg-[#FAFAFA] p-4">

              {/* CHANGED:
                  API directly provides image URL.
              */}

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />

              {/* Wishlist */}
              <button
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition hover:text-red-500"
              >
                ♡
              </button>

            </div>

            {/* ==================================================
                Product Details
                ================================================== */}

            <div className="p-4">

              {/* CHANGED:
                  API uses "name"
              */}

              <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
                {product.name}
              </h3>

              {/* ==================================================
                  Rating
                  ================================================== */}

              {/* CHANGED:
                  API gives:
                  rating.stars
                  rating.count
              */}

              <div className="mt-2 text-xs">

                <span className="text-yellow-500">
                  ★ {product.rating?.stars}
                </span>

                <span className="ml-1 text-gray-400">
                  ({product.rating?.count})
                </span>

              </div>

              {/* ==================================================
                  Price
                  ================================================== */}

              {/* CHANGED:
                  API gives priceCents in USD cents.
                  Example:
                  2000 = $20

                  We convert USD → INR using 90.
              */}

              <div className="mt-2">

                <span className="font-bold text-gray-900">
                  ₹{((product.priceCents / 100) * 90).toFixed(2)}
                </span>

              </div>

              {/* ==================================================
                  Category
                  ================================================== */}

              <p className="mt-1 text-xs text-gray-500">
                {product.category}
              </p>

              {/* ==================================================
                  Add To Cart
                  ================================================== */}

              <button
                onClick={() =>
                  addToCart({
                    ...product,

                    // CartContext expects a thumbnail
                    thumbnail: product.image,

                    // Convert priceCents → INR
                    price: (product.priceCents / 100) * 90,
                  })
                }
                className="mt-4 w-full rounded-lg bg-[#68753D] py-2 font-semibold text-white transition hover:bg-[#4F5B2C]"
              >
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Products;
