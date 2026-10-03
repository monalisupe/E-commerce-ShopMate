
import watch from "../assets/watch.jpg";
import Laptop from "../assets/Laptop.jpg";
import Bagpack from "../assets/Bagpack.jpg";
import Beauty from "../assets/Beauty.jpg";
import Bluetooth from "../assets/Bluetooth.jpg";
import Fashion from "../assets/Fashion.jpg";
import Headphones from "../assets/Headphones.jpg";
import Shoe from "../assets/Shoe.jpg";
import Sports from "../assets/Sports.jpg";
import Perfume from "../assets/Perfume.jpg";
import Plant from "../assets/Plant.jpg";
import Accessories from "../assets/Accessories.jpg";

import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Watch",
    image: watch,
    price: 50,
    oldPrice: "$85.56",
    review: "56",
  },
  {
    id: 2,
    name: "Laptop",
    image: Laptop,
    price: 256.45,
    oldPrice: "$354.06",
    review: "254+",
  },
  {
    id: 3,
    name: "Perfume",
    image: Perfume,
    price: 75,
    oldPrice: "$85.56",
    review: "89",
  },
  {
    id: 4,
    name: "Accessories",
    image: Accessories,
    price: 25.45,
    oldPrice: "$89.56",
    review: "10",
  },
  {
    id: 5,
    name: "Bag",
    image: Bagpack,
    price: 80.45,
    oldPrice: "$97.56",
    review: "30",
  },
  {
    id: 6,
    name: "Beauty",
    image: Beauty,
    price: 77.25,
    oldPrice: "$125.66",
    review: "30",
  },
  {
    id: 7,
    name: "Bluetooth",
    image: Bluetooth,
    price: 450.65,
    oldPrice: "$750.56",
    review: "56",
  },
  {
    id: 8,
    name: "Fashion",
    image: Fashion,
    price: 890.56,
    oldPrice: "$452",
    review: "1000",
  },
  {
    id: 9,
    name: "Shoes",
    image: Shoe,
    price: 556,
    oldPrice: "$895.56",
    review: "56",
  },
  {
    id: 10,
    name: "Sports",
    image: Sports,
    price: 850,
    oldPrice: "$1000.56",
    review: "56",
  },
  {
    id: 11,
    name: "Headphones",
    image: Headphones,
    price: 50,
    oldPrice: "$85.56",
    review: "56",
  },
  {
    id: 12,
    name: "Plant",
    image: Plant,
    price: 21,
    oldPrice: "$25",
    review: "20",
  },
];

function Shop() {
  // Get addToCart function from CartContext
  const { addToCart } = useCart();

  return (
    <section className="w-full px-4 py-10">

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {products.map((product) => (

          /* Whole Product Card Container */
          <div
            key={product.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-sm w-full"
          >

            {/* Product Image Container */}
            <div className="flex h-24 items-center justify-center rounded-lg bg-gray-100">

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain"
              />

            </div>

            {/* Product Name */}
            <h2 className="mt-2 text-sm font-bold text-black">
              {product.name}
            </h2>

            {/* Current Price */}
            <p className="mt-2 text-sm font-bold text-[#7B8B4A]">
              ${product.price.toFixed(2)}
            </p>

            {/* Old Price */}
            <p className="text-xs text-gray-400 line-through">
              {product.oldPrice}
            </p>

            {/* Reviews */}
            <p className="text-sm text-yellow-500">
              ⭐ {product.review}
            </p>

            {/* Shop Now Button */}
            <button
              onClick={() => addToCart(product)}
              className="mt-3 rounded bg-yellow-700 px-4 py-2 text-sm text-white hover:bg-gray-500"
            >
              Shop now
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Shop;
