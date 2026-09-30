
// import { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";

// function Categories() {
//   // Cart function
//   const { addToCart } = useCart();

//   // Stores categories received from API
//   const [categories, setCategories] = useState([]);

//   // Stores products received from API
//   const [products, setProducts] = useState([]);

//   // Stores selected product
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Stores selected category
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Fetch categories when page loads
//   // useEffect(() => {
//   //   fetch("https://api.escuelajs.co/api/v1/categories")
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setCategories(data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching categories:", error);
//   //     });
//   // }, []);

//   useEffect(() => {
//   fetch(
//     "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       const uniqueCategories = [
//         //1st value used as a key
//         //...converts data into array
//         ...new Map(
//           data.map((product) => [
//             product.category,{
//               name : product.category,
//               image : product.image,
//             },
//           ])
//         ).values(),
//       ];

//       setCategories(uniqueCategories);
//     })
//     .catch((error) => {
//       console.error("Error fetching categories:", error);
//     });
// }, []);

//   // Runs when user clicks a category
//   // const handleCategoryClick = (category) => {
//   //   setSelectedCategory(category);

//   //   // Clear previously selected product
//   //   setSelectedProduct(null);

//   //   // Clear old products
//   //   setProducts([]);

//   //   // Fetch products of selected category
//   //   fetch(
//   //     `https://api.escuelajs.co/api/v1/categories/${category.id}/products`
//   //   )
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         throw new Error("Failed to fetch category products");
//   //       }

//   //       return response.json();
//   //     })
//   //     .then((data) => {
//   //       console.log("Selected Category:", category);
//   //       console.log("Category Products:", data);

//   //       setProducts(data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching products:", error);
//   //     });
//   // };

//   const handleCategoryClick = (category) => {
//   setSelectedCategory(category);

//   // Clear previously selected product
//   setSelectedProduct(null);

//   // Clear old products
//   setProducts([]);

//   // Fetch all products from new API
//   fetch(
//     "https://api.escuelajs.co/api/v1/categories"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }

//       return response.json();
//     })
//     .then((data) => {
//       console.log("Selected Category:", category);
//       console.log("All Products:", data);

//       // Get products belonging to selected category
//       const categoryProducts = data.filter(
//         (product) => product.category === category.name
//       );

//       console.log("Category Products:", categoryProducts);

//       setProducts(categoryProducts);
//     })
//     .catch((error) => {
//       console.error("Error fetching products:", error);
//     });
// };

//   return (

//     //for bakground add this below bg-slate-200
//     <section className=" border-2 mx-auto w-full px-4 py-10">

//       {/* ================= HEADING ================= */}

//       <div className="mb-6 flex items-center justify-between">
//         <h2 className="text-xl font-bold text-gray-900">
//           Shop by Categories
//         </h2>

//         <button
//           onClick={() => window.location.href = "/categories"}
//           className="text-sm font-medium text-[#68753D] transition hover:text-[#4F5B2C]"
//         >
//           View All Categories →
//         </button>
//       </div>

//       {/* ================= CATEGORIES ================= */}

//       <div className="grid grid-cols-3 gap-6 overflow-x-auto pb-4">

//         {categories.map((category) => (
//           <div
//             key={category.name}
//             onClick={() => handleCategoryClick(category)}
//             className={
//               "group min-w-30 shrink-0 cursor-pointer rounded-lg p-2 text-center " +
//               (selectedCategory === category.id
//                 ? "bg-gray-300"
//                 : "hover:bg-gray-300")
//             }
//           >

//             {/* Category Image */}

//             {/*just add hover below line transition duration-300 group-hover:scale-105 group-hover:bg-#E7EBD8*/}

//             {/* <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-[#F2F4E9]">

//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="h-[750px] w-[720px] object-contain"
//               />

//             </div> */}

//             {/* Category Image */}

// <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-[#F2F4E9]">

//   <img
//     src={category.image}
//     alt={category.name}
//     className="h-full w-full object-contain"
//   />

// </div>

//             {/* Category Name */}

//             <p className="mt-3 text-sm font-semibold text-gray-800">
//               {category}
//             </p>

//           </div>
//         ))}

//       </div>

//       {/* ================= PRODUCTS ================= */}

//       {selectedCategory && !selectedProduct && (
//         <div className="mt-10">

//           <h2 className="mb-5 text-xl font-bold">
//             {selectedCategory.name} Products
//           </h2>

//           {products.length === 0 ? (
//             <p className="text-gray-500">
//               No products available in this category.
//             </p>
//           ) : (
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   onClick={() => setSelectedProduct(product)}
//                   className="cursor-pointer rounded-xl border p-5 transition hover:shadow-lg"
//                 >

//                   {/* Product Image */}

//                   <img
//                     src={
//                       product.images && product.images.length > 0
//                         ? product.images[0]
//                         : "https://placehold.co/400x300?text=No+Image"
//                     }
//                     alt={product.title}
//                     className="h-64 w-full object-contain"
//                   />

//                   {/* Product Name */}

//                   <h3 className="mt-4 font-bold">
//                     {product.title}
//                   </h3>

//                   {/* Price */}

//                   <p className="mt-2 font-semibold">
//                     ₹{product.price}
//                   </p>

//                 </div>
//               ))}

//             </div>
//           )}

//         </div>
//       )}

//       {/* ================= PRODUCT DETAILS ================= */}

//       {selectedProduct && (
//         <div className="mt-10 rounded-xl border p-8">

//           {/* Product Title */}

//           <h2 className="mb-6 text-3xl font-bold">
//             {selectedProduct.title}
//           </h2>

//           {/* Product Image */}

//           <img
//             src={
//               selectedProduct.images &&
//               selectedProduct.images.length > 0
//                 ? selectedProduct.images[0]
//                 : "https://placehold.co/500x400?text=No+Image"
//             }
//             alt={selectedProduct.title}
//             className="mb-6 h-46 w-full object-contain"
//           />

//           {/* Description */}

//           <p className="mb-5 text-gray-600">
//             {selectedProduct.description}
//           </p>

//           {/* Price */}

//           <p className="mb-5 text-2xl font-bold text-green-700">
//             ₹{selectedProduct.price}
//           </p>

//           {/* Category */}

//           <p className="mb-5 text-gray-500">
//             Category: {selectedCategory.name}
//           </p>

//           {/* ================= ADD TO CART ================= */}

//           <button
//             onClick={() => addToCart(selectedProduct)}
//             className="mr-5 rounded bg-slate-700 px-5 py-2 font-semibold text-white hover:bg-slate-800"
//           >
//             ADD TO CART
//           </button>

//           {/* ================= BACK BUTTON ================= */}

//           <button
//             onClick={() => setSelectedProduct(null)}
//             className="rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
//           >
//             ← Back to Products
//           </button>

//         </div>
//       )}

//     </section>
//   );
// }

// export default Categories;



{/*CATEGORIES */}


// import { useState, useEffect } from "react";

// function Categories() {
//   // Stores categories received from API
//   const [categories, setCategories] = useState([]);

//   // Stores products received from API
//   const [products, setProducts] = useState([]);

//   // Stores selected product
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Stores selected category
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Fetch categories when page loads
//   useEffect(() => {
//     fetch("https://api.escuelajs.co/api/v1/categories")
//       .then((response) => response.json())
//       .then((data) => {
//         setCategories(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }, []);

//   // Runs when user clicks a category
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);

//     // Clear previously selected product
//     setSelectedProduct(null);

//     // Clear old products
//     setProducts([]);

//     // Fetch products of selected category
//     fetch(
//       `https://api.escuelajs.co/api/v1/categories/${category.id}/products`
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch category products");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Selected Category:", category);
//         console.log("Category Products:", data);

//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   };

//   return (
//     // <section className=" grid-col-1 h-100 w-75 items-center justify-center bg-[#f0f3db]  rounded-lg border-blackmx-auto max-w-4xl px-4 py-10">
//     <section className="mx-auto w-full max-w-4xl rounded-lg bg-[#f0f3db] px-4 py-10 ">

//       {/* ================= HEADING ================= */}

//       <div className=" mb-6 flex items-center justify-between">
//         <h2 className="text-xl font-bold text-gray-900">
//           Shop by Categories
//         </h2>

//         <button 
//         onClick={()=>window.location.href="/categories"}
//         className="text-sm font-medium text-[#68753D] transition hover:text-[#4F5B2C]">
//           View All Categories →
//         </button>
//       </div>

//       {/* ================= CATEGORIES ================= */}

//       {/* <div className="grid grid-cols-3 gap-6 overflow-x-auto pb-4"> */}
//        <div className="grid grid-cols-3 gap-4 pb-4 break-words">


//         {categories.map((category) => (
//           <div
//             key={category.id}
//             onClick={() => handleCategoryClick(category)}
//             className={
//               "group min-w-30 shrink-0 cursor-pointer rounded-3xl p-2 text-center " +
//               (selectedCategory?.id === category.id
//                 ? "bg-[#d3d3d3]"
//                 : "hover:bg-gray-200")
//             }
//           >

//             {/* Category Image */}

//             <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-[#F2F4E9] transition duration-300 group-hover:scale-105 group-hover:bg-[#E7EBD8]">

//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="h-full w-full object-contain"
//               />

//             </div>

//             {/* Category Name */}

//             <p className="mt-3 text-sm font-semibold text-gray-800">
//               {category.name}
//             </p>

//           </div>
//         ))}

//       </div>

//       {/* ================= PRODUCTS ================= */}

//       {selectedCategory && !selectedProduct && (
//         <div className="mt-10 h-100 w-75 break-words ">

//           <h2 className="text-black mb-5 text-xl font-bold">
//             {selectedCategory.name} Products
//           </h2>

//           {products.length === 0 ? (
//             <p className="text-gray-500">
//               No products available in this category.
//             </p>
//           ) : (
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   onClick={() => setSelectedProduct(product)}
//                   className="cursor-pointer rounded-xl border p-5 transition hover:shadow-lg"
//                 >

//                   {/* Product Image */}

//                   <img
//                     src={
//                       product.images && product.images.length > 0
//                         ? product.images[0]
//                         : "https://placehold.co/400x300?text=No+Image"
//                     }
//                     alt={product.title}
//                     className="h-48 w-full object-contain"
//                   />

//                   {/* Product Name */}

//                   <h3 className="mt-4 font-bold">
//                     {product.title}
//                   </h3>

//                   {/* Price */}

//                   <p className="mt-2 font-semibold">
//                     ₹{product.price}
//                   </p>

//                 </div>
//               ))}

//             </div>
//           )}

//         </div>
//       )}

//       {/* ================= PRODUCT DETAILS ================= */}

//       {selectedProduct && (
//         <div className=" mt-10 rounded-xl border p-8 break-words">

//           <h2 className="mb-6 text-3xl font-bold">
//             {selectedProduct.title}
//           </h2>

//           {/* Product Image */}

//           <img
//             src={
//               selectedProduct.images &&
//               selectedProduct.images.length > 0
//                 ? selectedProduct.images[0]
//                 : "https://placehold.co/500x400?text=No+Image"
//             }
//             alt={selectedProduct.title}
//             className="mb-6 h-80 w-full object-contain"
//           />

//           {/* Description */}

//           <p className="mb-5 text-gray-600">
//             {selectedProduct.description}
//           </p>

//           {/* Price */}

//           <p className="mb-5 text-2xl font-bold text-green-700">
//             ₹{selectedProduct.price}
//           </p>

//           {/* Category */}

//           <p className="mb-5 text-gray-500">
//             Category: {selectedCategory.name}
//           </p>

//           {/* Back Button */}

//           <button
//             onClick={() => setSelectedProduct(null)}
//             className="rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
//           >
//             ← Back to Products
//           </button>

//           {/* Write a Review */}

// <div className="mb-6">
//   <label className="mb-2 block font-semibold text-gray-800">
//     Write a Review
//   </label>

//   <textarea
//     placeholder="Write your review about this product..."
//     rows="4"
//     className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#68753D]"
//   ></textarea>

//   <button
//     className="mt-3 rounded-lg bg-[#303e04] px-5 py-2 font-semibold text-white hover:bg-[#4e5b29]"
//   >
//     Submit Review
//   </button>
// </div>

//         </div>
//       )}

//     </section>
//   );
// }

// export default Categories;

// import { useState, useEffect } from "react";

// function Categories() {
//   // Stores categories received from API
//   const [categories, setCategories] = useState([]);

//   // Stores products received from API
//   const [products, setProducts] = useState([]);

//   // Stores the product clicked by the user
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Stores the category clicked by the user
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // =========================================================
//   // CHANGE 1: Fetch products API instead of old Categories API
//   // WHY: Our new API gives products, not separate categories.
//   // =========================================================
//   useEffect(() => {
//     fetch(
//       "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
//     )
//       .then((response) => response.json())
//       .then((data) => {

//         // =====================================================
//         // CHANGE 2: Create unique category objects
//         // WHY: The API gives category names inside products.
//         // We also take the product image as category image.
//         // Map removes duplicate category names.
//         // =====================================================
//         const uniqueCategories = [
//           ...new Map(
//             data.map((product) => [
//               product.category,
//               {
//                 name: product.category,
//                 image: product.image,
//               },
//             ])
//           ).values(),
//         ];

//         setCategories(uniqueCategories);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }, []);

//   // =========================================================
//   // CHANGE 3: When category is clicked
//   // WHY: New API doesn't have /categories/id/products.
//   // So we fetch all products and filter them by category.
//   // =========================================================
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);

//     // Clear previously selected product
//     setSelectedProduct(null);

//     // Clear old products
//     setProducts([]);

//     fetch(
//       "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         return response.json();
//       })
//       .then((data) => {

//         // =====================================================
//         // CHANGE 4: Filter products using category name
//         // WHY: New API stores category as product.category
//         // =====================================================
//         const categoryProducts = data.filter(
//           (product) => product.category === category.name
//         );

//         setProducts(categoryProducts);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   };

//   return (
//     <section className="w-full px-4 py-10">

//       {/* Section Heading */}
//       <div className="mb-6 flex items-center justify-between">
//         <h2 className="text-xl font-bold text-gray-900">
//           Shop by Categories
//         </h2>

//         <button className="text-sm font-medium text-[#68753D] transition hover:text-[#4F5B2C]">
//           View All Categories →
//         </button>
//       </div>

//       {/* ================= CATEGORIES ================= */}

// {/* 4 categories in each row + full width */}
//       <div className="grid w-full grid-cols-4 gap-6 pb-4">
//         {categories.map((category) => (
//           <div

//             //CHANGE 5:category is now an object, so use category.name
//             //WHY: category itself is no longer just a string
//             key={category.name}

//             onClick={() => handleCategoryClick(category)}

//             className={
//               "group min-w-30 shrink-0 cursor-pointer rounded-lg p-2 text-center " +

//               /* CHANGE 6:
//                  Compare category names instead of category.id
//                  WHY: New API categories don't have category IDs
//               */
//               (selectedCategory?.name === category.name
//                 ? "bg-gray-300"
//                 : "hover:bg-gray-300")
//             }
//           >

//             {/* Category Image */}

//             {/* CHANGE 7:
//                 Use category.image
//                 WHY: We took the first product image for each category
//                 im removing that hover effect group-hover:bg-[#E7EBD8]
//             */}
//             <div className="mx-auto flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F2F4E9] transition duration-300 group-hover:scale-105 ">

//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="h-full w-full object-contain"
//               />

//             </div>

//             {/* Category Name */}

//             {/* CHANGE 8:
//                 Use category.name
//                 WHY: category is now an object
//             */}
//             <p className="mt-3 text-sm font-semibold text-gray-800">
//               {category.name}
//             </p>

//           </div>
//         ))}

//       </div>

//       {/* ================= PRODUCTS ================= */}

//       {selectedCategory && !selectedProduct && (
//         <div className="mt-10">

//           <h2 className="mb-5 text-xl font-bold">
//             {selectedCategory.name} Products
//           </h2>

//           {products.length === 0 ? (
//             <p className="text-gray-500">
//               No products available in this category.
//             </p>
//           ) : (
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   onClick={() => setSelectedProduct(product)}
//                   className="cursor-pointer rounded-xl border p-5 transition hover:shadow-lg"
//                 >

//                   {/* =================================================
//                       CHANGE 9: New API uses product.image
//                       instead of product.images[0]
//                       ================================================= */}
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-46 w-full object-contain"
//                   />

//                   {/* CHANGE 10: New API uses product.name */}
//                   <h3 className="mt-4 font-bold">
//                     {product.name}
//                   </h3>

//                   {/* CHANGE 11: New API uses priceCents
//                       Convert cents to rupees-style display */}
//                   <p className="mt-2 font-semibold">
//                     ₹{(product.priceCents / 100).toFixed(2)}
//                   </p>

//                 </div>
//               ))}

//             </div>
//           )}

//         </div>
//       )}

//       {/* ================= PRODUCT DETAILS ================= */}

//       {selectedProduct && (
//         <div className="mt-10 rounded-xl border p-8 w-full max-w-md">

//           {/* CHANGE 12: product.title → product.name */}
//           <h2 className="mb-6 text-3xl font-bold">
//             {selectedProduct.name}
//           </h2>

//           {/* CHANGE 13: product.images[0] → product.image */}
//           <img
//             src={selectedProduct.image}
//             alt={selectedProduct.name}
//             className="mb-6 h-48 w-full object-contain"
//           />

//           <p className="mb-5 text-gray-600">
//             {selectedProduct.description}
//           </p>

//           {/* CHANGE 14: product.price → product.priceCents */}
//           <p className="mb-5 text-2xl font-bold text-green-700">
//             ₹{(selectedProduct.priceCents / 100).toFixed(2)}
//           </p>

//           <p className="mb-5 text-gray-500">
//             Category: {selectedCategory.name}
//           </p>

//           <button
//             onClick={() => setSelectedProduct(null)}
//             className="rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
//           >
//             ← Back to Products
//           </button>

//         </div>
//       )}

//     </section>
//   );
// }

// export default Categories;

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