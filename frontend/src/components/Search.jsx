import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

function Search() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Fetch products
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

  // Search products
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Search Products
      </h1>

      <input
        type="text"
        placeholder="Search Products here..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-[#7B8B4A]"
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            className="rounded-xl border bg-white p-4 shadow-sm"
          >

            <div className="flex h-48 items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>

            <h2 className="mt-4 line-clamp-2 font-semibold text-gray-900">
              {product.title}
            </h2>

            <p className="mt-2 text-sm text-yellow-500">
              ★ {product.rating?.rate}
            </p>

            <p className="mt-2 text-lg font-bold text-green-600">
              ${product.price.toFixed(2)}
            </p>

            <button
              onClick={() =>
                addToCart({
                  ...product,
                  thumbnail: product.image,
                })
              }
              className="mt-4 w-full rounded-lg bg-[#68753D] px-4 py-2 font-semibold text-white hover:bg-[#4F5B2C]"
            >
              🛒 Add to Cart
            </button>

          </div>

        ))}

      </div>

      {searchText && filteredProducts.length === 0 && (
        <p className="mt-8 text-center text-gray-500">
          No products found.
        </p>
      )}

    </div>
  );
}

export default Search;