// import { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";

// function Products() {
//   const { addToCart } = useCart();

//   const [products, setProducts] = useState([]);

//   // Fetch products from Fake Store API
//   // useEffect(() => {
//   //   fetch("https://fakestoreapi.com/products")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setProducts(data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching products:", error);
//   //     });
//   // }, []);

//   // CHANGED: Fetch products from our local backend
// useEffect(() => {
//   fetch("http://localhost:5000/api/products")
//     .then((res) => res.json())
//     .then((data) => {
//       setProducts(data);
//     })
//     .catch((error) => {
//       console.error("Error fetching products:", error);
//     });
// }, []);

//   return (
//     <section className="mx-auto w-full px-4 py-10">

//       {/* Section Heading */}
//       <div className="mb-6 flex items-center justify-between">

//         <h2 className="text-xl font-bold text-gray-900">
//           Best Selling Products
//         </h2>

//         <button className="text-sm font-medium text-[#68753D] transition hover:text-[#4F5B2C]">
//           View All Products →
//         </button>

//       </div>

//       {/* Products */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

//         {products.map((product) => (

//           <div
//             key={product.id}
//             className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
//           >

//             {/* Product Image */}
//             <div className="relative flex h-48 items-center justify-center bg-[#FAFAFA] p-4">

//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
//               />

//               {/* Wishlist */}
//               <button
//                 className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition hover:text-red-500"
//               >
//                 ♡
//               </button>

//             </div>

//             {/* Product Details */}
//             <div className="p-4">

//               {/* Product Name */}
//               <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
//                 {product.title}
//               </h3>

//               {/* Rating */}
//               <div className="mt-2 text-xs">

//                 <span className="text-yellow-500">
//                   ★ {product.rating?.rate}
//                 </span>

//                 <span className="ml-1 text-gray-400">
//                   ({product.rating?.count})
//                 </span>

//               </div>

//               {/* Price */}
//               <div className="mt-2">

//                 <span className="font-bold text-gray-900">
//                   ₹{(product.price * 90).toFixed(2)}
//                 </span>

//               </div>

//               {/* Add To Cart */}
//               <button
//                 onClick={() =>
//                   addToCart({
//                     ...product,
//                     thumbnail: product.image,
//                     price: product.price * 90,
//                   })
//                 }
//                 //to adjust button here i add mt-auto ... original mt-4
//                 className="mt-auto w-full rounded-lg bg-[#68753D] py-2 font-semibold text-white transition hover:bg-[#4F5B2C]"
//               >
//               Add to Cart
//               </button>

//               {/* <button
//   onClick={() => addToCart(product)}
//   className="mt-auto w-full rounded bg-yellow-700 px-4 py-2 text-sm text-white hover:bg-gray-500"
// >
//   Add to Cart
// </button> */}

//             </div>

//           </div>

//         ))}

//       </div>

//     </section>
//   );
// }

// export default Products;

// import { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";

// function Products() {
//   const { addToCart } = useCart();

//   const [products, setProducts] = useState([]);

//   // ==================================================
//   // OLD: Fake Store API
//   // ==================================================
//   // We are not using this now because we want
//   // products to come from our own local backend.
//   //
//   // useEffect(() => {
//   //   fetch("https://fakestoreapi.com/products")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setProducts(data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching products:", error);
//   //     });
//   // }, []);

//   // ==================================================
//   // CHANGED: Fetch products from our local backend
//   // ==================================================
//   // BEFORE:
//   // https://fakestoreapi.com/products
//   //
//   // NOW:
//   // http://localhost:5000/api/products
//   //
//   // This means Products.jsx gets the products
//   // from our own local backend API.

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Products API Response:", data);

//         // CHANGED:
//         // Store the products received from our backend
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
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

//         {products.map((product) => (

//           <div
//             key={product.id}
//             className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
//           >

//             {/* ==================================================
//                 Product Image
//                 ================================================== */}

//             <div className="relative flex h-48 items-center justify-center bg-[#FAFAFA] p-4">

//               <img
//                 src={product.image}
//                 alt={product.title}
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

//               {/* Product Name */}
//               <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
//                 {product.title}
//               </h3>

//               {/* Rating */}
//               <div className="mt-2 text-xs">

//                 <span className="text-yellow-500">
//                   ★ {product.rating?.rate}
//                 </span>

//                 <span className="ml-1 text-gray-400">
//                   ({product.rating?.count})
//                 </span>

//               </div>

//               {/* Price */}
//               <div className="mt-2">

//                 <span className="font-bold text-gray-900">
//                   ₹{(product.price * 90).toFixed(2)}
//                 </span>

//               </div>

//               {/* ==================================================
//                   CHANGED: Add To Cart
//                   ==================================================
//                   We keep the image inside "thumbnail" because
//                   CartContext / Cart.jsx uses thumbnail.
//               */}

//               <button
//                 onClick={() =>
//                   addToCart({
//                     ...product,

//                     // CHANGED:
//                     // Fake Store uses "image".
//                     // Cart uses "thumbnail".
//                     thumbnail: product.image,

//                     // CHANGED:
//                     // Convert Fake Store price to INR.
//                     price: product.price * 90,
//                   })
//                 }
//                 className="mt-auto w-full rounded-lg bg-[#68753D] py-2 font-semibold text-white transition hover:bg-[#4F5B2C]"
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


//new runnable code starts from here
// import { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";

// function Products() {
//   const { addToCart } = useCart();

//   const [products, setProducts] = useState([]);

//   // ==================================================
//   // OLD: Fake Store API
//   // ==================================================
//   // We are not using Fake Store API now.
//   // Our products are coming from our local backend.
//   //
//   // useEffect(() => {
//   //   fetch("https://fakestoreapi.com/products")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setProducts(data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching products:", error);
//   //     });
//   // }, []);

//   // ==================================================
//   // CHANGED: Fetch products from our LOCAL backend
//   // ==================================================

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Products API Response:", data);

//         // CHANGED:
//         // Store the 29 products returned by our local API
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
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

//         {products.map((product) => (

//           <div
//             key={product.id}
//             className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
//           >

//             {/* ==================================================
//                 Product Image
//                 ================================================== */}

//             <div className="relative flex h-48 items-center justify-center bg-[#FAFAFA] p-4">

//               {/* CHANGED:
//                   Our local API gives imagePath.
//                   Example:
//                   /images/men/men1.jpg

//                   So we add localhost:5000 before it.
//               */}

//               <img
//                 src={`http://localhost:5000${product.imagePath}`}
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

//               {/* ==================================================
//                   CHANGED: Product Name
//                   ==================================================
//                   Local API uses:
//                   name
//               */}

//               <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
//                 {product.name}
//               </h3>

//               {/* ==================================================
//                   CHANGED: Review
//                   ==================================================
//                   Local API uses:
//                   review: "128+"
//               */}

//               <div className="mt-2 text-xs">

//                 <span className="text-yellow-500">
//                   ★ {product.review}
//                 </span>

//               </div>

//               {/* ==================================================
//                   CHANGED: Price
//                   ==================================================
//                   Local API already gives:
//                   "₹24.99"

//                   So we DON'T multiply by 90.
//               */}

//               <div className="mt-2">

//                 <span className="font-bold text-gray-900">
//                   {product.price}
//                 </span>

//               </div>

//               {/* ==================================================
//                   Old Price
//                   ==================================================
//                   Your local API already provides oldPrice.
//               */}

//               <div className="mt-1">

//                 <span className="text-sm text-gray-400 line-through">
//                   {product.oldPrice}
//                 </span>

//               </div>

//               {/* ==================================================
//                   CHANGED: Add To Cart
//                   ==================================================
//                   CartContext uses thumbnail for product image.

//                   Our API gives imagePath, so we convert it into
//                   the complete local image URL.
//               */}

//               <button
//                 onClick={() =>
//                   addToCart({
//                     ...product,

//                     thumbnail: `http://localhost:5000${product.imagePath}`,
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

// import { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";

// function Products() {
//   const { addToCart } = useCart();

//   const [products, setProducts] = useState([]);

//   // ==================================================
//   // CHANGED: Fetch Best Selling Products from mock.shop
//   // ==================================================
//   // We are NOT using DummyJSON anymore.
//   //
//   // mock.shop is Shopify's public mock Storefront API.
//   // It does not require an API key or access token.
//   // ==================================================

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://mock.shop/api", {
//           method: "POST",

//           // mock.shop requires JSON for GraphQL requests
//           headers: {
//             "Content-Type": "application/json",
//           },

//           // GraphQL query
//           body: JSON.stringify({
//             query: `
//               {
//                 products(first: 8) {
//                   nodes {
//                     id
//                     title
//                     description
//                     featuredImage {
//                       url
//                       altText
//                     }
//                     priceRange {
//                       minVariantPrice {
//                         amount
//                         currencyCode
//                       }
//                     }
//                   }
//                 }
//               }
//             `,
//           }),
//         });

//         const result = await response.json();

//         console.log("Best Selling API Response:", result);

//         // Check if API returned products
//         if (result.data?.products?.nodes) {
//           setProducts(result.data.products.nodes);
//         }
//       } catch (error) {
//         console.error("Error fetching Best Selling products:", error);
//       }
//     };

//     fetchProducts();
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

//         {products.map((product) => (

//           <div
//             key={product.id}
//             className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
//           >

//             {/* ==================================================
//                 Product Image
//                 ================================================== */}

//             <div className="relative flex h-48 items-center justify-center bg-[#FAFAFA] p-4">

//               <img
//                 src={product.featuredImage?.url}
//                 alt={product.featuredImage?.altText || product.title}
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

//               {/* Product Name */}
//               <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
//                 {product.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-2 line-clamp-2 text-xs text-gray-500">
//                 {product.description}
//               </p>

//               {/* Price */}
//               <div className="mt-3">

//                 <span className="font-bold text-gray-900">
//                   ₹
//                   {(
//                     parseFloat(
//                       product.priceRange.minVariantPrice.amount
//                     ) * 90
//                   ).toFixed(2)}
//                 </span>

//               </div>

//               {/* ==================================================
//                   Add To Cart
//                   ================================================== */}

//               <button
//                 onClick={() =>
//                   addToCart({
//                     id: product.id,
//                     title: product.title,

//                     // Convert mock.shop image to Cart thumbnail
//                     thumbnail: product.featuredImage?.url,

//                     // Convert USD amount to INR
//                     price:
//                       parseFloat(
//                         product.priceRange.minVariantPrice.amount
//                       ) * 90,
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
