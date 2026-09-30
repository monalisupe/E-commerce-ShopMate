// function FeautureSection(){
//    const features=[
//     {
//       icon:"🚚",
//       title:"Shipping",
//       description:"On orders over $50"
//     },

//     {
//        icon:"▣",
//        title:"Secure Payment",
//        description:"100% secure payment"
//     },

//     {
//         icon:"↻",
//         title:"Easy Return",
//         description:"30 days return policy"
//     },

//     {
//         icon:"♧",
//         title:"24/7 support",
//         description:"Dedicated support"
//     },

//    ];

//    return (
//     <section className="mx-auto max-w-4xl px-4 py-4">
//         <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
//             {features.map((feature)=>(
//                 <div 
//                   key={feature.title}
//                   className="flex items-center gap-4 px-6 py-5" // Fixed "item-centre" to "items-center" and added width management
//                 >

//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0F3E5] text-lg"> 
//                   {/* Changed "items-centre" to "items-center" and "justify-o" to "justify-center" for proper centering */}
//                   {/* Added fixed width (w-11) and height (h-11) for consistent sizing */}
//                   {/* Used shrink-0 to prevent icon container from shrinking */}
//                     {feature.icon}
//                 </div>

//                 <div className="min-w-0 flex-1"> {/* Added min-w-0 and flex-1 for text width management */}
//                     <h3 className="text-sm font-semibold text-gray-900">
//                         {feature.title}
//                     </h3>

//                     <p className="mt-1 text-xs text-gray-500">
//                         {feature.description}
//                     </p>

                

//                 </div>

//                 </div>

//             ))}

//         </div>
//     </section>
//    )

// }

// export default FeautureSection; // Fixed component name export typo (was "FeautureSection" with 'a' instead of 'e')

// import { useState } from "react";


// import men1 from "../assets/men1.jpg";
// import men2 from "../assets/men2.jpg";
// import men3 from "../assets/men3.jpg";
// import men4 from "../assets/men4.jpg";
// import men5 from "../assets/men5.jpg";
// import men6 from "../assets/men6.jpg";

// import women1 from "../assets/women1.jpg";
// import women2 from "../assets/women2.jpg";
// import women3 from "../assets/women3.jpg";
// import women4 from "../assets/women4.jpg";
// import women5 from "../assets/women5.jpg";
// import women6 from "../assets/women6.jpg";

// import school1 from "../assets/school1.jpg";
// import school2 from "../assets/school2.jpg";
// import school3 from "../assets/school3.jpg";
// import school4 from "../assets/school4.jpg";
// import school5 from "../assets/school5.jpg";
// import school6 from "../assets/school6.jpg";

// import bag1 from "../assets/bag1.jpg";
// import bag2 from "../assets/bag2.jpg";
// import bag3 from "../assets/bag3.jpg";
// import bag4 from "../assets/bag4.jpg";
// import bag5 from "../assets/bag5.jpg";
// import bag6 from "../assets/bag6.jpg";

// function FeatureSection(){

//     const [selectedProduct , setSelectedProduct] = useState(null);

//     const products = [
//   {
//     id: 1,
//     name: "Men's Fashion",
//     price: 499,
//     description:
//       "Explore our stylish men's fashion collection designed for comfort and everyday wear. This collection combines a modern look with comfortable materials, making it suitable for casual outings, college, travel, and daily use. Choose from different styles and designs to match your personal look.",
//     images: [men1, men2, men3, men4, men5, men6],
//   },

//   {
//     id: 2,
//     name: "Women's Fashion",
//     price: 599,
//     description:
//       "Discover our beautiful women's fashion collection created for a comfortable and stylish everyday look. The collection includes versatile designs that can be worn for casual occasions, outings, shopping, college, and special moments. Choose your favorite style and enjoy a perfect combination of comfort and fashion.",
//     images: [women1, women2, women3, women4, women5, women6],
//   },

//   {
//     id: 3,
//     name: "School Essentials",
//     price: 399,
//     description:
//       "Our school essentials collection is designed for students who need practical, comfortable, and useful products for everyday school life. These products are suitable for carrying books, notebooks, stationery, and other daily essentials while maintaining a simple and attractive appearance.",
//     images: [school1, school2, school3, school4, school5, school6],
//   },

//   {
//     id: 4,
//     name: "Stylish Bag",
//     price: 699,
//     description:
//       "Carry your everyday essentials in style with our versatile bag collection. These bags are designed with a practical layout and comfortable design, making them suitable for college, travel, shopping, work, and daily activities. Choose from different looks and designs according to your needs.",
//     images: [bag1, bag2, bag3, bag4, bag5, bag6],
//   },
// ];

// return(
//     <div className="grid grid-cols-4 gap-5 p-5">

//         {products.map((product) => (
//             <div
//                 key={product.id}
//                 onClick={() => setSelectedProduct(product)}
//             >
//                 <img
//             src={product.images[0]}
//             alt={product.name}
//             className="w-full h-48 object-contain"
//           />

//           <h2 className="text-center font-semibold mt-3">
//             {product.name}
//           </h2>

//           <p className="text-center mt-2">
//             ₹{product.price}
//           </p>
//             </div>
//         ))}

//     </div>
// )
// }

// export default FeatureSection;

// import { useState } from "react";

// // Product Images
// import men1 from "../assets/men1.jpg";
// import men2 from "../assets/men2.jpg";
// import men3 from "../assets/men3.jpg";
// import men4 from "../assets/men4.jpg";
// import men5 from "../assets/men5.jpg";
// import men6 from "../assets/men6.jpg";

// import women1 from "../assets/women1.jpg";
// import women2 from "../assets/women2.jpg";
// import women3 from "../assets/women3.jpg";
// import women4 from "../assets/women4.jpg";
// import women5 from "../assets/women5.jpg";
// import women6 from "../assets/women6.jpg";

// import school1 from "../assets/school1.jpg";
// import school2 from "../assets/school2.jpg";
// import school3 from "../assets/school3.jpg";
// import school4 from "../assets/school4.jpg";
// import school5 from "../assets/school5.jpg";
// import school6 from "../assets/school6.jpg";

// import bag1 from "../assets/bag1.jpg";
// import bag2 from "../assets/bag2.jpg";
// import bag3 from "../assets/bag3.jpg";
// import bag4 from "../assets/bag4.jpg";
// import bag5 from "../assets/bag5.jpg";
// import bag6 from "../assets/bag6.jpg";

// function FeatureSection() {

//   // Selected product state
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Product Data
//   const products = [
//     {
//       id: 1,
//       name: "Men's Fashion",
//       price: 499,
//       description:
//         "Explore our stylish men's fashion collection designed for comfort and everyday wear. This collection combines a modern look with comfortable materials, making it suitable for casual outings, college, travel, and daily use. Choose from different styles and designs to match your personal look.",
//       images: [men1, men2, men3, men4, men5, men6],
//     },

//     {
//       id: 2,
//       name: "Women's Fashion",
//       price: 599,
//       description:
//         "Discover our beautiful women's fashion collection created for a comfortable and stylish everyday look. The collection includes versatile designs that can be worn for casual occasions, outings, shopping, college, and special moments. Choose your favorite style and enjoy a perfect combination of comfort and fashion.",
//       images: [women1, women2, women3, women4, women5, women6],
//     },

//     {
//       id: 3,
//       name: "School Essentials",
//       price: 399,
//       description:
//         "Our school essentials collection is designed for students who need practical, comfortable, and useful products for everyday school life. These products are suitable for carrying books, notebooks, stationery, and other daily essentials while maintaining a simple and attractive appearance.",
//       images: [school1, school2, school3, school4, school5, school6],
//     },

//     {
//       id: 4,
//       name: "Stylish Bag",
//       price: 699,
//       description:
//         "Carry your everyday essentials in style with our versatile bag collection. These bags are designed with a practical layout and comfortable design, making them suitable for college, travel, shopping, work, and daily activities. Choose from different looks and designs according to your needs.",
//       images: [bag1, bag2, bag3, bag4, bag5, bag6],
//     },
//   ];

//   return (
//     <section className="w-full px-4 py-6">

//       {/* Main Product Recommendation Section */}
//       <div className="grid grid-cols-4 gap-5 p-5">

//         {products.map((product) => (
//           <div
//             key={product.id}
//             // Changed: product card is now clickable
//             onClick={() => setSelectedProduct(product)}
//             className="cursor-pointer rounded-xl border p-4 transition hover:shadow-lg"
//           >

//             <img
//               src={product.images[0]}
//               alt={product.name}
//               className="h-48 w-full object-contain"
//             />

//             <h2 className="mt-3 text-center font-semibold">
//               {product.name}
//             </h2>

//             <p className="mt-2 text-center">
//               ₹{product.price}
//             </p>

//             {/* Changed: tells user that more varieties are available */}
//             <p className="mt-2 text-center text-sm text-gray-500">
//               View more varieties →
//             </p>

//           </div>
//         ))}

//       </div>

//       {/* Selected Product Details */}
//       {selectedProduct && (
//         <div className="mt-8 rounded-xl border p-6">

//           <h2 className="mb-5 text-2xl font-bold">
//             {selectedProduct.name}
//           </h2>

//           {/* Multiple Product Images */}
//           <div className="grid grid-cols-3 gap-4 md:grid-cols-6">

//             {selectedProduct.images.map((image, index) => (
//               <div
//                 key={index}
//                 className="rounded-lg border p-2"
//               >
//                 <img
//                   src={image}
//                   alt={`${selectedProduct.name} ${index + 1}`}
//                   className="h-32 w-full object-contain"
//                 />
//               </div>
//             ))}

//           </div>

//           <p className="mt-5 text-gray-600">
//             {selectedProduct.description}
//           </p>

//           <p className="mt-4 text-xl font-bold">
//             ₹{selectedProduct.price}
//           </p>

//           {/* Close Details */}
//           <button
//             onClick={() => setSelectedProduct(null)}
//             className="mt-5 rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
//           >
//             ← Back
//           </button>

//         </div>
//       )}

//     </section>
//   );
// }

// export default FeatureSection;

// import { useState, useEffect } from "react";

// // Product Images
// import men1 from "../assets/men1.jpg";
// import men2 from "../assets/men2.jpg";
// import men3 from "../assets/men3.jpg";
// import men4 from "../assets/men4.jpg";
// import men5 from "../assets/men5.jpg";
// import men6 from "../assets/men6.jpg";

// import women1 from "../assets/women1.jpg";
// import women2 from "../assets/women2.jpg";
// import women3 from "../assets/women3.jpg";
// import women4 from "../assets/women4.jpg";
// import women5 from "../assets/women5.jpg";
// import women6 from "../assets/women6.jpg";

// import school1 from "../assets/school1.jpg";
// import school2 from "../assets/school2.jpg";
// import school3 from "../assets/school3.jpg";
// import school4 from "../assets/school4.jpg";
// import school5 from "../assets/school5.jpg";
// import school6 from "../assets/school6.jpg";

// import bag1 from "../assets/bag1.jpg";
// import bag2 from "../assets/bag2.jpg";
// import bag3 from "../assets/bag3.jpg";
// import bag4 from "../assets/bag4.jpg";
// import bag5 from "../assets/bag5.jpg";
// import bag6 from "../assets/bag6.jpg";

// function FeatureSection() {

//   // Selected product state
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // API product data
//   const [apiProducts, setApiProducts] = useState([]);


//   // ==================================================
//   // Call Backend API
//   // ==================================================

//   useEffect(() => {

//     fetch("http://localhost:5000/api/products")

//       .then((response) => response.json())

//       .then((data) => {
//         setApiProducts(data.products);
//       })

//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });

//   }, []);


//   // Product Data
//   const products = [
//     {
//       id: 1,
//       name: "Men's Fashion",
//       price: 499,
//       description:
//         "Explore our stylish men's fashion collection designed for comfort and everyday wear. This collection combines a modern look with comfortable materials, making it suitable for casual outings, college, travel, and daily use. Choose from different styles and designs to match your personal look.",
//       images: [men1, men2, men3, men4, men5, men6],
//     },

//     {
//       id: 2,
//       name: "Women's Fashion",
//       price: 599,
//       description:
//         "Discover our beautiful women's fashion collection created for a comfortable and stylish everyday look. The collection includes versatile designs that can be worn for casual occasions, outings, shopping, college, and special moments. Choose your favorite style and enjoy a perfect combination of comfort and fashion.",
//       images: [women1, women2, women3, women4, women5, women6],
//     },

//     {
//       id: 3,
//       name: "School Essentials",
//       price: 399,
//       description:
//         "Our school essentials collection is designed for students who need practical, comfortable, and useful products for everyday school life. These products are suitable for carrying books, notebooks, stationery, and other daily essentials while maintaining a simple and attractive appearance.",
//       images: [school1, school2, school3, school4, school5, school6],
//     },

//     {
//       id: 4,
//       name: "Stylish Bag",
//       price: 699,
//       description:
//         "Carry your everyday essentials in style with our versatile bag collection. These bags are designed with a practical layout and comfortable design, making them suitable for college, travel, shopping, work, and daily activities. Choose from different looks and designs according to your needs.",
//       images: [bag1, bag2, bag3, bag4, bag5, bag6],
//     },
//   ];


//   return (
//     <section className="w-full px-4 py-6">

//       {/* Main Product Recommendation Section */}

//       <div className="grid grid-cols-4 gap-5 p-5">

//         {products.map((product) => (

//           <div
//             key={product.id}

//             // API data is used when product is clicked
//             onClick={() =>
//               setSelectedProduct({
//                 ...product,

//                 price:
//                   apiProducts[product.id - 1]?.price ||
//                   product.price,

//                 description:
//                   apiProducts[product.id - 1]?.description ||
//                   product.description,
//               })
//             }

//             className="cursor-pointer rounded-xl border p-4 transition hover:shadow-lg"
//           >

//             <img
//               src={`http://localhost:5000${product.imagePath}`}
//               alt={product.name}
//               className="h-48 w-full object-contain"
//             />

//             <h2 className="mt-3 text-center font-semibold">
//               {product.name}
//             </h2>

//             <p className="mt-2 text-center">
//               ₹{product.price}
//             </p>

//             {/* View more varieties */}

//             <p className="mt-2 text-center text-sm text-gray-500">
//               View more varieties →
//             </p>

//           </div>

//         ))}

//       </div>


//       {/* Selected Product Details */}

//       {selectedProduct && (

//         <div className="mt-8 rounded-xl border p-6">

//           <h2 className="mb-5 text-2xl font-bold">
//             {selectedProduct.name}
//           </h2>


//           {/* Multiple Product Images */}

//           <div className="grid grid-cols-3 gap-4 md:grid-cols-6">

//             {selectedProduct.images.map((image, index) => (

//               <div
//                 key={index}
//                 className="rounded-lg border p-2"
//               >

//                 <img
//                   src={image}
//                   alt={`${selectedProduct.name} ${index + 1}`}
//                   className="h-32 w-full object-contain"
//                 />

//               </div>

//             ))}

//           </div>


//           {/* Product Description */}

//           <p className="mt-5 text-gray-600">
//             {selectedProduct.description}
//           </p>


//           {/* Product Price */}

//           <p className="mt-4 text-xl font-bold">
//             ₹{selectedProduct.price}
//           </p>


//           {/* Close Details */}

//           <button
//             onClick={() => setSelectedProduct(null)}
//             className="mt-5 rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
//           >
//             ← Back
//           </button>

//         </div>

//       )}

//     </section>
//   );
// }

// export default FeatureSection;

// import { useState, useEffect } from "react";

// function FeatureSection() {
//   const [products, setProducts] = useState([]);

// useEffect(() => {
//   fetch("http://localhost:5000/api/products")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("API Response:", data);
//       setProducts(data);
//     })
//     .catch((error) => {
//       console.error("API Error:", error);
//     });
// }, []);

//   return (
//     <section>
//       <h2>Feature Products</h2>

//       {products.map((product) => (
//         <div key={product.id}>
//           <h3>{product.name}</h3>
//           <img
//             src={`http://localhost:5000${product.imagePath}`}
//             alt={product.name}
//             width="150"
//           />
//           <p>Price: ₹{product.price}</p>
//           <p>Old Price :  ₹{product.oldPrice} </p>
//           <p>Review : {product.review}</p>
//         </div>
//       ))}
//     </section>
//   );
// }

// export default FeatureSection;


// import { useState, useEffect } from "react";

// function FeatureSection() {
//   // Selected category
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Backend products
//   const [apiProducts, setApiProducts] = useState([]);

//   // ==================================================
//   // Call Backend API
//   // ==================================================

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("API Response:", data);
//         setApiProducts(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   // ==================================================
//   // Categories
//   // ==================================================

//   const categories = [
//     "Men",
//     "Women",
//     "School",
//     "Bag",
//     "Phone",
//   ];

//   return (
//     <section className="w-full px-4 py-6">

//       {/* Main Product Recommendation Section */}

//       <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 lg:grid-cols-5">

//         {categories.map((category) => {
//           const categoryProducts = apiProducts.filter(
//             (product) => product.category === category
//           );

//           const firstProduct = categoryProducts[0];

//           return (
//             <div
//               key={category}
//               onClick={() =>
//                 setSelectedProduct({
//                   category: category,
//                   products: categoryProducts,
//                 })
//               }
//               className="cursor-pointer rounded-xl border p-4 transition hover:shadow-lg"
//             >

//               {/* Category Image */}

//               {firstProduct && (
//                 <img
//                   src={`http://localhost:5000${firstProduct.imagePath}`}
//                   alt={category}
//                   className="h-[350px] w-full object-contain"
//                 />
//               )}

//               {/* Category Name */}

//               <h2 className="mt-3 text-center font-semibold">
//                 {category === "Men" && "Men's Fashion"}
//                 {category === "Women" && "Women's Fashion"}
//                 {category === "School" && "School Essentials"}
//                 {category === "Bag" && "Stylish Bag"}
//                 {category === "Phone" && "Phone Accessories"}
//               </h2>

//               {/* View More */}

//               <p className="mt-2 text-center text-sm text-gray-500">
//                 View more varieties →
//               </p>

//             </div>
//           );
//         })}

//       </div>

//       {/* Selected Category Details */}

//       {selectedProduct && (
//         <div className="mt-8 rounded-xl border p-6">

//           <h2 className="mb-5 text-2xl font-bold">
//             {selectedProduct.category}
//           </h2>

//           {/* Category Products */}

//           <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

//             {selectedProduct.products.map((product) => (
//               <div
//                 key={product.id}
//                 className="rounded-lg border p-2"
//               >

//                 <img
//                   src={`http://localhost:5000${product.imagePath}`}
//                   alt={product.name}
//                   className="h-64 w-full object-contain"
//                 />

//                 <h3 className="mt-2 text-center text-sm font-semibold">
//                   {product.name}
//                 </h3>

//                 <p className="mt-1 text-center">
//                   {product.price}
//                 </p>

//                 <p className="mt-1 text-center">
//                   {product.oldPrice}
//                 </p>

//                 <p className="mt-1 text-center">
//                   {product.review}
//                 </p>

//                 <p className="mt-1 text-center">
//                   {product. description}
//                 </p>

//               </div>
//             ))}

//           </div>

//           {/*Product details page */}
// {/* Product details page */}

// {selectedProduct && (
//   <div className="rounded-xl border p-6">

//     <h1 className="mb-6 text-5xl font-bold">
//       {selectedProduct.name}
//     </h1>

//     <img
//       src={`http://localhost:5000${selectedProduct.imagePath}`}
//       alt={selectedProduct.name}
//       className="mb-6 h-80 w-full rounded-lg bg-gray-100 object-contain p-6"
//     />

//     <p className="mb-3 text-2xl text-green-700">
//       {selectedProduct.price}
//     </p>

//     <p className="mb-3 text-2xl text-red-700">
//       {selectedProduct.oldPrice}
//     </p>

//     <p className="mb-4 text-gray-400">
//       {selectedProduct.description}
//     </p>

//   </div>
// )}

//           {/* Close Details */}

//           <button
//             onClick={() => setSelectedProduct(null)}
//             className="mt-5 rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
//           >
//             ← Back
//           </button>

//         </div>
//       )}

//     </section>
//   );
// }

// export default FeatureSection;

// import { useState, useEffect } from "react";

// function FeatureSection() {
//   // Selected category (holds { category, products })
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Selected individual product
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Backend products
//   const [apiProducts, setApiProducts] = useState([]);

//   // ==================================================
//   // Fetch products from backend
//   // ==================================================
//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("API Response:", data);
//         setApiProducts(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   // ==================================================
//   // Categories
//   // ==================================================
//   const categories = ["Men", "Women", "School", "Bag", "Phone"];

//   // ==================================================
//   // Product Details Page
//   // ==================================================
//   if (selectedProduct) {
//   //   return (
//   //     <section className="w-full px-4 py-6">
//   //       <div className="rounded-xl border p-6">
//   //         <h1 className="mb-6 text-3xl font-bold md:text-5xl">
//   //           {selectedProduct.name}
//   //         </h1>

//   //         <img
//   //           src={`http://localhost:5000${selectedProduct.imagePath}`}
//   //           alt={selectedProduct.name}
//   //           className="mb-6 h-80 w-full rounded-lg bg-gray-100 object-contain p-6"
//   //         />

//   //         <p className="mb-3 text-2xl text-green-700">
//   //           {selectedProduct.price}
//   //         </p>

//   //         <p className="mb-3 text-2xl text-red-700 line-through">
//   //           {selectedProduct.oldPrice}
//   //         </p>

//   //         <p className="mb-2 text-yellow-600">
//   //           ⭐ {selectedProduct.review}
//   //         </p>

//   //         <p className="mb-4 text-gray-600">
//   //           {selectedProduct.description}
//   //         </p>

//   //         <button
//   //           onClick={() => setSelectedProduct(null)}
//   //           className="mt-5 rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
//   //         >
//   //           ← Back to {selectedCategory?.category}
//   //         </button>
//   //       </div>
//   //     </section>
//   //   );
//   // }

//   // return (
//   //   <section className="w-full px-4 py-6">
//   //     {/* ============================================== */}
//   //     {/* Category Grid                                  */}
//   //     {/* ============================================== */}
//   //     {!selectedCategory && (
//   //       <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 lg:grid-cols-5">
//   //         {categories.map((category) => {
//   //           const categoryProducts = apiProducts.filter(
//   //             (product) => product.category === category
//   //           );
//   //           const firstProduct = categoryProducts[0];

//   //           return (
//   //             <div
//   //               key={category}
//   //               onClick={() =>
//   //                 setSelectedCategory({
//   //                   category,
//   //                   products: categoryProducts,
//   //                 })
//   //               }
//   //               className="cursor-pointer rounded-xl border p-4 transition hover:shadow-lg"
//   //             >
//   //               {firstProduct && (
//   //                 <img
//   //                   src={`http://localhost:5000${firstProduct.imagePath}`}
//   //                   alt={category}
//   //                   className="h-[350px] w-full object-contain"
//   //                 />
//   //               )}

//   //               <h2 className="mt-3 text-center font-semibold">
//   //                 {category === "Men" && "Men's Fashion"}
//   //                 {category === "Women" && "Women's Fashion"}
//   //                 {category === "School" && "School Essentials"}
//   //                 {category === "Bag" && "Stylish Bag"}
//   //                 {category === "Phone" && "Phone Accessories"}
//   //               </h2>

//   //               <p className="mt-2 text-center text-sm text-gray-500">
//   //                 View more varieties →
//   //               </p>
//   //             </div>
//   //           );
//   //         })}
//   //       </div>
//   //     )}

//   //     {/* ============================================== */}
//   //     {/* Category Details (list of products)            */}
//   //     {/* ============================================== */}
//   //     {selectedCategory && (
//   //       <div className="mt-8 rounded-xl border p-6">
//   //         <h2 className="mb-5 text-2xl font-bold">
//   //           {selectedCategory.category}
//   //         </h2>

//   //         {selectedCategory.products.length === 0 ? (
//   //           <p className="text-gray-500">No products found in this category.</p>
//   //         ) : (
//   //           <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
//   //             {selectedCategory.products.map((product) => (
//   //               <div
//   //                 key={product.id}
//   //                 onClick={() => setSelectedProduct(product)}
//   //                 className="cursor-pointer rounded-lg border p-2 transition hover:shadow-md"
//   //               >
//   //                 <img
//   //                   src={`http://localhost:5000${product.imagePath}`}
//   //                   alt={product.name}
//   //                   className="h-64 w-full object-contain"
//   //                 />

//   //                 <h3 className="mt-2 text-center text-sm font-semibold">
//   //                   {product.name}
//   //                 </h3>

//   //                 <p className="mt-1 text-center text-green-700">
//   //                   {product.price}
//   //                 </p>

//   //                 <p className="mt-1 text-center text-sm text-red-600 line-through">
//   //                   {product.oldPrice}
//   //                 </p>

//   //                 <p className="mt-1 text-center text-sm text-yellow-600">
//   //                   ⭐ {product.review}
//   //                 </p>

//   //                 <p className="mt-1 line-clamp-2 text-center text-xs text-gray-500">
//   //                   {product.description}
//   //                 </p>
//   //               </div>
//   //             ))}
//   //           </div>
//   //         )}

//   //         <button
//   //           onClick={() => setSelectedCategory(null)}
//   //           className="mt-5 rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
//   //         >
//   //           ← Back to Categories
//   //         </button>
//   //       </div>
//   //     )}
//   //   </section>
//   // );

//   return (
//   <section className="w-full px-4 py-6">

//     {/* Category Grid */}
//     <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 lg:grid-cols-5">

//       {categories.map((category) => {
//         const categoryProducts = apiProducts.filter(
//           (product) => product.category === category
//         );

//         const firstProduct = categoryProducts[0];

//         return (
//           <div
//             key={category}
//             onClick={() =>
//               setSelectedCategory({
//                 category,
//                 products: categoryProducts,
//               })
//             }
//             className="cursor-pointer rounded-xl border p-4 transition hover:shadow-lg"
//           >
//             {firstProduct && (
//               <img
//                 src={`http://localhost:5000${firstProduct.imagePath}`}
//                 alt={category}
//                 className="h-[250px] w-full object-contain"
//               />
//             )}

//             <h2 className="mt-3 text-center font-semibold">
//               {category === "Men" && "Men's Fashion"}
//               {category === "Women" && "Women's Fashion"}
//               {category === "School" && "School Essentials"}
//               {category === "Bag" && "Stylish Bag"}
//               {category === "Phone" && "Phone Accessories"}
//             </h2>

//             <p className="mt-2 text-center text-sm text-gray-500">
//               View varieties →
//             </p>
//           </div>
//         );
//       })}

//     </div>


//     {/* Selected Category Products */}
//     {selectedCategory && (
//       <div className="mt-8 rounded-xl border p-6">

//         <h2 className="mb-5 text-3xl font-bold">
//           {selectedCategory.category}
//         </h2>

//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

//           {selectedCategory.products.map((product) => (
//             <div
//               key={product.id}
//               className="rounded-xl border p-3 transition hover:shadow-lg"
//             >

//               {/* Product Image */}
//               <img
//                 onClick={() => setSelectedProduct(product)}
//                 src={`http://localhost:5000${product.imagePath}`}
//                 alt={product.name}
//                 className="h-56 w-full cursor-pointer object-contain"
//               />

//               {/* Product Name */}
//               <h3 className="mt-2 font-semibold">
//                 {product.name}
//               </h3>

//               {/* Price */}
//               <p className="mt-1 font-bold text-green-700">
//                 {product.price}
//               </p>

//               {/* Old Price */}
//               <p className="text-sm text-gray-400 line-through">
//                 {product.oldPrice}
//               </p>

//               {/* Review */}
//               <p className="text-sm text-yellow-600">
//                 ⭐ {product.review}
//               </p>

//               {/* Add to Cart */}
//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-3 w-full rounded-lg bg-yellow-700 px-4 py-2 text-sm text-white hover:bg-gray-600"
//               >
//                 Add to Cart
//               </button>

//             </div>
//           ))}

//         </div>

//         {/* Back */}
//         <button
//           onClick={() => setSelectedCategory(null)}
//           className="mt-6 rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
//         >
//           ← Back to Categories
//         </button>

//       </div>
//     )}

//   </section>
// );
// }

// export default FeatureSection;

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