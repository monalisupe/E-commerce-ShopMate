

// import {  useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";

// function Deals() {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const {addToCart} = useCart();

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data.products);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   return (
//     <div className="mx-auto max-w-7xl px-4 py-10">

//       <h1 className="mb-6 text-3xl font-bold">
//         Deals
//       </h1>

//       {/* ================= PRODUCTS ================= */}

//       {!selectedProduct && (
//         <div className="grid grid-cols-3 gap-6">

//           {products.map((product) => (
//             <div
//               key={product.id}
//               onClick={() => setSelectedProduct(product)}
//               className="cursor-pointer rounded-lg border p-4 text-center hover:shadow-lg"
//             >

//               {/* Product Image */}
//               <div className="mb-4 rounded-lg bg-gray-200 p-4 hover:bg-slate-200">

//                 <img
//                   src={product.thumbnail}
//                   alt={product.title}
//                   className="mx-auto h-43 w-full object-contain"
//                 />

//               </div>

//               {/* Product Name */}
//               <h2 className="font-semibold">
//                 {product.title}
//               </h2>

//               {/* Price */}
//               <p className="text-green-700">
//                 ${product.price}
//               </p>

//               {/* Rating */}
//               <p>
//                 ⭐ {product.rating}
//               </p>

//               {/* Discount */}
//               <p className="text-red-600">
//                 🔥 {product.discountPercentage}% OFF
//               </p>

//               {/*Add to cart button */}
//               {/* here e - event click (mouse clicked event )  */}
//               {/* here e - event click (mouse clicked event )  */}

//               {/* <button
//               onClick={(e) =>

//                 {e.stopPropagation();
//                 addToCart(product);}
//               }
//               className="rounded bg-yellow-700 px-5 py-2 text-white hover:bg-gray-500"
//               >
//               Add to cart
//               </button> */}

//               {/* Add to cart button */}
// <button
//   onClick={(e) => {
//     e.stopPropagation();
//     addToCart(product);
//   }}
//   className="rounded bg-yellow-700 px-5 py-2 text-white hover:bg-gray-500"
// >
//   Add to cart
// </button>

//             </div>
//           ))}

//         </div>
//       )}

//       {/* ================= PRODUCT DETAILS ================= */}

//       {selectedProduct && (
//         <div className="rounded-lg border p-8">

//           <h1 className="mb-6 text-5xl font-bold">
//             {selectedProduct.title}
//           </h1>

//           <img
//             src={selectedProduct.thumbnail}
//             alt={selectedProduct.title}
//             className="mb-6 h-80 w-full rounded-lg bg-gray-100 object-contain p-6"
//           />

//           <p className="mb-4 text-gray-600">
//             {selectedProduct.description}
//           </p>

//           <p className="mb-3 text-2xl font-bold text-green-700">
//             ${selectedProduct.price}
//           </p>

//           <p className="mb-3">
//             ⭐ {selectedProduct.rating}
//           </p>

//           <p className="mb-6 text-red-600">
//             🔥 {selectedProduct.discountPercentage}% OFF
//           </p>

//           {/*add to cart*/}

//           <button
//               onClick={() => addToCart(selectedProduct)}
//                className="rounded bg-yellow-700 px-5 py-2 text-white hover:bg-gray-500"
//           >
//           Add to cart
//           </button>

//           <button
//             onClick={() => setSelectedProduct(null)}
//             className="rounded bg-yellow-700 px-5 py-2 text-white hover:bg-gray-500"
//           >
//             ← Back to Deals
//           </button>

//         </div>
//       )}

//     </div>
//   );
// }


// export default Deals;

import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

function Deals() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">

      <h1 className="mb-6 text-3xl font-bold">
        Deals
      </h1>

      {/* ================= PRODUCTS ================= */}

      {!selectedProduct && (
        <div className="grid grid-cols-3 gap-6">

          {products.map((product) => (
            <div
              key={product.id}

              // THIS IS NOT CHANGED
              // Clicking the product/card opens its details
              onClick={() => setSelectedProduct(product)}

              className="cursor-pointer rounded-lg border p-4 text-center hover:shadow-lg"
            >

              {/* Product Image */}
              <div className="mb-4 rounded-lg bg-gray-200 p-4 hover:bg-slate-200">

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="mx-auto h-43 w-full object-contain"
                />

              </div>

              {/* Product Name */}
              <h2 className="font-semibold">
                {product.title}
              </h2>

              {/* Price */}
              <p className="text-green-700">
                ${product.price}
              </p>

              {/* Rating */}
              <p>
                ⭐ {product.rating}
              </p>

              {/* Discount */}
              <p className="text-red-600">
                🔥 {product.discountPercentage}% OFF
              </p>

              {/* ================================================= */}
              {/* ADD TO CART BUTTON - CHANGED */}
              {/* ================================================= */}

              <button
                onClick={(e) => {
                  // CHANGED:
                  // Stops the button click from reaching
                  // the parent product card.
                  e.stopPropagation();

                  // CHANGED:
                  // Add the CURRENT product to the cart.
                  // Previously you were using selectedProduct.
                  addToCart(product);
                }}
                className="rounded bg-yellow-700 px-5 py-2 text-white hover:bg-gray-500"
              >
                Add to cart
              </button>

            </div>
          ))}

        </div>
      )}

      {/* ================= PRODUCT DETAILS ================= */}

      {selectedProduct && (
        <div className="rounded-lg border p-8">

          <h1 className="mb-6 text-5xl font-bold">
            {selectedProduct.title}
          </h1>

          <img
            src={selectedProduct.thumbnail}
            alt={selectedProduct.title}
            className="mb-6 h-80 w-full rounded-lg bg-gray-100 object-contain p-6"
          />

          <p className="mb-4 text-gray-600">
            {selectedProduct.description}
          </p>

          <p className="mb-3 text-2xl font-bold text-green-700">
            ${selectedProduct.price}
          </p>

          <p className="mb-3">
            ⭐ {selectedProduct.rating}
          </p>

          <p className="mb-6 text-red-600">
            🔥 {selectedProduct.discountPercentage}% OFF
          </p>

          {/* Add to cart from DETAILS page */}

          <button
            // NOT CHANGED
            // Here selectedProduct is correct because
            // we are already inside its details.
            onClick={() => addToCart(selectedProduct)}
            className="rounded bg-yellow-700 px-5 py-2 text-white hover:bg-gray-500"
          >
            Add to cart
          </button>

          <button
            onClick={() => setSelectedProduct(null)}
            className="rounded bg-yellow-700 px-5 py-2 text-white hover:bg-gray-500"
          >
            ← Back to Deals
          </button>

        </div>
      )}

    </div>
  );
}

export default Deals;