import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

function Products() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <section className="mx-auto w-full px-4 py-10">

      {/* Section Heading */}
      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold text-gray-900">
          Best Selling Products
        </h2>

        <button className="text-sm font-medium text-[#68753D] transition hover:text-[#4F5B2C]">
          View All Products →
        </button>

      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {products.map((product) => (

          <div
            key={product.id}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            {/* Product Image */}
            <div className="relative flex h-48 items-center justify-center bg-[#FAFAFA] p-4">

              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />

              {/* Wishlist */}
              <button
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition hover:text-red-500"
              >
                ♡
              </button>

            </div>

            {/* Product Details */}
            <div className="p-4">

              {/* Product Name */}
              <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="mt-2 text-xs">

                <span className="text-yellow-500">
                  ★ {product.rating?.rate}
                </span>

                <span className="ml-1 text-gray-400">
                  ({product.rating?.count})
                </span>

              </div>

              {/* Price */}
              <div className="mt-2">

                <span className="font-bold text-gray-900">
                  ₹{(product.price * 90).toFixed(2)}
                </span>

              </div>

              {/* Add To Cart */}
              <button
                onClick={() =>
                  addToCart({
                    ...product,
                    thumbnail: product.image,
                    price: product.price * 90,
                  })
                }
                //to adjust button here i add mt-auto ... original mt-4
                className="mt-auto w-full rounded-lg bg-[#68753D] py-2 font-semibold text-white transition hover:bg-[#4F5B2C]"
              >
              Add to Cart
              </button>

              {/* <button
  onClick={() => addToCart(product)}
  className="mt-auto w-full rounded bg-yellow-700 px-4 py-2 text-sm text-white hover:bg-gray-500"
>
  Add to Cart
</button> */}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Products;