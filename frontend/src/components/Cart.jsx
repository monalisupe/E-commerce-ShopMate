
// import { useCart } from "../context/CartContext" 

// function Cart(){

//   const {cart} = useCart();

//   return (

//      <div className="mb-6 font-semibold text-center flex flex-auto gap-5 bg-white hover:bg-slate-200">
//      <h1 className=" text-blue-600 font-bold ">My Cart</h1>

//      {cart.map((item) => (
//      <div key={item.id}>

//                {/* Product Image */}
//           <img
//             src={item.thumbnail}
//             alt={item.title}
//             className="h-24 w-24 object-contain"
//           />
      
//       <h1 className="text-black font-semibold ">{item.title}</h1>
//       <p className="text-green-500">${item.price}</p>
//        <p className="text-gray-500">{item.quantity}</p>

//      </div>

    

//   ))}

//   </div>
//   );
// }

// export default Cart;


// 

// 


// import { useState } from "react";
// import { useCart } from "../context/CartContext";

// function Cart() {
//   const {
//     cart,
//     increaseQuantity,
//     decreaseQuantity,
//     removeProduct,
//   } = useCart();

//   const [review, setReview] = useState(0);

//   const totalAmount = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="mx-auto max-w-7xl px-6 py-10">

//       {/* Cart Header */}
//       <div className="mb-8 flex items-center justify-between">
//         <h1 className="text-3xl font-bold text-black">
//           Your Cart
//         </h1>

//         <p className="text-xl text-gray-500">
//           {cart.length} Item
//         </p>
//       </div>

//       {/* Cart Products */}
//       {cart.map((item) => (

//         <div
//           key={item.id}
//           className="flex items-center gap-8 border-b py-6"
//         >

//           {/* Product Image */}
//           <img
//             src={item.thumbnail}
//             alt={item.title}
//             className="h-32 w-32 rounded-lg object-contain"
//           />

//           {/* Product Information */}
//           <div className="flex-1">

//             <h2 className="text-xl font-semibold text-black">
//               {item.title}
//             </h2>

//             <p className="mt-2 text-gray-500">
//               {item.description}
//             </p>

//             <p className="mt-3 text-xl font-bold text-green-600">
//               ${(item.price * item.quantity).toFixed(2)}
//             </p>

//           </div>

//           {/* Product Review */}
//           <div>
//             <p>Rate this product:</p>

//             {[1, 2, 3, 4, 5].map((star) => (
//               <button
//                 key={star}
//                 onClick={() => setReview(star)}
//               >
//                 {star <= review ? "⭐" : "☆"}
//               </button>
//             ))}
//           </div>

//           {/* Quantity Controls */}
//           <div className="flex items-center gap-5">

//             <button
//               onClick={() => decreaseQuantity(item.id)}
//               className="text-3xl"
//             >
//               −
//             </button>

//             <span className="text-xl">
//               {item.quantity}
//             </span>

//             <button
//               onClick={() => increaseQuantity(item.id)}
//               className="text-3xl"
//             >
//               +
//             </button>

//           </div>

//           {/* Remove Product */}
//           <button
//             onClick={() => removeProduct(item.id)}
//             className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
//           >
//             Remove
//           </button>

//         </div>

//       ))}

//       {/* ================= PAYMENT SECTION ================= */}

//       {cart.length > 0 && (
//         <div className="mt-8 flex flex-col items-end">

//           {/* Total Amount */}
//           <div className="mb-5 text-2xl font-bold text-black">
//             Total: ${totalAmount.toFixed(2)}
//           </div>

//           {/* Proceed to Pay Button */}
//           <button
//             onClick={() => alert("Proceeding to payment...")}
//             className="rounded-lg bg-[#68753D] px-8 py-3 text-lg font-semibold text-white transition hover:bg-[#4F5B2C]"
//           >
//             Proceed to Pay →
//           </button>

//         </div>
//       )}

//     </div>
//   );
// }

// export default Cart;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// function Cart() {
//   const {
//     cart,
//     increaseQuantity,
//     decreaseQuantity,
//     removeProduct,
//   } = useCart();

//   const [review, setReview] = useState(0);

//   // Navigation
//   const navigate = useNavigate();

//   const totalAmount = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="mx-auto max-w-7xl px-6 py-10 ">

//       {/* Cart Header */}
//       <div className="mb-8 flex items-center justify-between">
//         <h1 className="text-3xl font-bold text-black">
//           Your Cart
//         </h1>

//         <p className="text-xl text-gray-500">
//           {cart.length} Item
//         </p>
//       </div>

//       {/* Cart Products */}
//       {cart.map((item) => (

//         <div
//           key={item.id}
//           className="flex items-center gap-8 border-b py-6 hover:bg-purple-100"
//         >

//           {/* Product Image */}
//           <img
//             src={item.thumbnail}
//             alt={item.title }
//             className="h-32 w-32 rounded-lg object-contain"
//           />

          

//           {/* Product Information */}
//           <div className="flex-1">

//             <h2 className="text-xl font-semibold text-black">
//               {item.title}
//             </h2>

//             <p className="mt-2 text-gray-500">
//               {item.description}
//             </p>

//             <p className="mt-3 text-xl font-bold text-green-600">
//               ${(item.price * item.quantity).toFixed(2)}
//             </p>

//           </div>

//           {/* Product Review */}
//           <div>
//             <p>Rate this product:</p>

//             {[1, 2, 3, 4, 5].map((star) => (
//               <button
//                 key={star}
//                 onClick={() => setReview(star)}
//               >
//                 {star <= review ? "⭐" : "☆"}
//               </button>
//             ))}
//           </div>

//           {/* Quantity Controls */}
//           <div className="flex items-center gap-5">

//             <button
//               onClick={() => decreaseQuantity(item.id)}
//               className="text-3xl"
//             >
//               −
//             </button>

//             <span className="text-xl">
//               {item.quantity}
//             </span>

//             <button
//               onClick={() => increaseQuantity(item.id)}
//               className="text-3xl"
//             >
//               +
//             </button>

//           </div>

          
//       {/* Select Payemnt method
//       <div className="mb-8 flex items-center justify-between">
//         <h1 className="text-3xl font-bold text-black">
//           Your Cart
//         </h1>

//         <p className="text-xl text-gray-500">
//           {cart.length} Item
//         </p>
//       </div> */}


//           {/* Remove Product */}
//           <button
//             onClick={() => removeProduct(item.id)}
//             className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
//           >
//             Remove
//           </button>

//         </div>

//       ))}



//       {/* ================= PAYMENT SECTION ================= */}

//       {cart.length > 0 && (
//         <div className="mt-8 flex flex-col items-end">

//           {/* Total Amount */}
//           <div className="mb-5 text-2xl font-bold text-black">
//             Total: ${totalAmount.toFixed(2)}
//           </div>

          
//       {/* Cart Header */}
//       <div className="mb-8 flex items-center justify-between">
//         <h1 className="text-2xl text-black">
//           Your Cart Items : 
//         </h1>

//         <p className="text-xl text-gray-500">
//           {cart.length}  Item
//         </p>
//       </div>


//           {/* Proceed to Pay */}
//           <button
//             onClick={() => navigate("/payment")}
//             className="rounded-lg bg-[#68753D] px-8 py-3 text-lg font-semibold text-white transition hover:bg-[#4F5B2C]"
//           >
//             Proceed to Pay →
//           </button>

//         </div>
//       )}

//     </div>
//   );
// }

// export default Cart;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import Bluetooth from "../assets/Bluetooth.jpg";
// import headset1 from "../assets/headset1.png";
// import Laptop from "../assets/Laptop.jpg";
// import Perfume from "../assets/Perfume.jpg";
// import fashion2 from "../assets/fashion2.png";
// import Fashion from "../assets/Fashion";
// import Accessories from "../assets/Accessories.jpg";
// import Bagpack from "../assets/Bagpack.jpg";
// import Shoe from "../assets/Shoe.jpg";
// import Sports from "../assets/Sports.jpg";
// import watch from "../assets/watch.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import Bluetooth from "../assets/Bluetooth.jpg";
import headset1 from "../assets/headset1.png";
import Laptop from "../assets/Laptop.jpg";
import Perfume from "../assets/Perfume.jpg";
import fashion2 from "../assets/fashion2.png";
import Fashion from "../assets/Fashion.jpg"; // check your actual file extension
import Accessories from "../assets/Accessories.jpg";
import Bagpack from "../assets/Bagpack.jpg";
import Shoe from "../assets/Shoe.jpg";
import Sports from "../assets/Sports.jpg";
import watch from "../assets/watch.jpg";

const products = [
  {
    id: 1,
    title: "Watch",
    thumbnail: watch,
    price: 50,
  },
  {
    id: 2,
    title: "Shoe",
    thumbnail: Shoe,
    price: 80,
  },

  {
    id:3,
    title: "Laptop",
    thumbnail : Laptop,
    price : 10000,
  },

  {
    id:4,
    title: "Accessories",
    thumbnail : Accessories,
    price : 45,
  },

  {
    id:5,
    title: "Bagpack",
    thumbnail : Bagpack,
    price : 55,
  },

  {
    id:6,
    title: "Fashion",
    thumbnail : Fashion,
    price : 150,
  },

  {
    id:7,
    title: "headset1",
    thumbnail : headset1,
    price : 69,
  },

  {
    id:8,
    title: "fashion2",
    thumbnail : fashion2,
    price : 900,
  },

  {
    id:9,
    title: "Perfume",
    thumbnail : Perfume,
    price : 500,
  },

  {
    id:10,
    title: "Sports",
    thumbnail : Sports,
    price : 80,
  },

  {
    id:11,
    title: "Bluetooth",
    thumbnail : Bluetooth,
    price : 78,
  },


];


function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  } = useCart();

  const navigate = useNavigate();

  const [reviews, setReviews] = useState({});

  // rest of your Cart code...

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleReview = (productId, star) => {
    setReviews({
      ...reviews,
      [productId]: star,
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 ">

      {/* Cart Header */}
      <div className="mb-8 flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Your Cart
          <span className="ml-2 text-lg font-medium text-gray-500">
            ({cart.length} {cart.length === 1 ? "Item" : "Items"})
          </span>
        </h1>

        <p className="text-sm text-gray-500">
          Review your selected products
        </p>
      </div>


      {/* Cart Products */}
{cart.map((item) => (
  <div
    key={item.id}
    className="mb-5 flex items-center gap-6 rounded-xl border p-5 hover:bg-slate-100"
  >

    {/* Image */}
    {/* <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-lg bg-gray-50">
      <img
        src={item.thumbnail || item.image}
        alt={item.title}
        className="h-full w-full object-contain"
      />
    </div> */}

    {/* Image */}
<div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-lg bg-gray-50">

  {/* <img
    src={
      item.thumbnail
        ? item.thumbnail
        : item.imagePath
          ? `http://localhost:5000${item.imagePath}`
          ? item.images[0]
          : item.image

    }
    alt={item.title || item.name}
    className="h-full w-full object-contain"
  /> */}

  <img
  src={
    item.thumbnail
    // ? - if condition is true
    // : - else condition is false
      ? item.thumbnail
      : item.imagePath
        ? `http://localhost:5000${item.imagePath}`
        : item.images && item.images.length > 0
          ? item.images[0]
          : item.image
  }
  alt={item.title || item.name}
  className="h-full w-full object-contain"
/>

</div>


          {/* Product Details */}
          <div className="flex-1">

            <div className="flex items-start justify-between">

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {item.title || item.name}
                </h2>

                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                  {item.description}
                </p>

                {/* Review */}
                <p className="mt-3 text-sm font-medium text-gray-700">
                  Rate this product:
                </p>

                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleReview(item.id, star)}
                      className="text-lg"
                    >
                      {star <= (reviews[item.id] || 0) ? "⭐" : "☆"}
                    </button>
                  ))}
                </div>
              </div>


              {/* Price */}
              <p className="text-xl font-bold text-green-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

            </div>


            {/* Quantity + Remove */}
            <div className="mt-4 flex items-center gap-5">

              <span className="text-sm font-medium">
                Quantity:
              </span>

              <button
                onClick={() => decreaseQuantity(item.id)}
                className="text-2xl"
              >
                −
              </button>

              <span className="font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="text-2xl"
              >
                +
              </button>

              <button
                onClick={() => removeProduct(item.id)}
                className="ml-4 rounded-lg bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
              >
                Remove
              </button>

            </div>

          </div>

        </div>
      ))}


      {/* Bottom Section */}
      {cart.length > 0 && (
        <div className="mt-8 flex justify-between border-t pt-6">

          {/* Back Home from here i remove px-6 py-4*/}
          <button
            onClick={() => navigate("/")}
            className="w-45 h-10 rounded-lg border mt-10 font-medium hover:bg-gray-200"
          >
            Back to Home
          </button>


          {/* Total + Pay */}
          <div className="text-right">

            <p className="mb-3 text-xl font-bold">
              Total: ${totalAmount.toFixed(2)}
            </p>

            <button
              onClick={() => navigate("/payment")}
              className="rounded-lg bg-[#4F5B2C] px-8 py-3 font-semibold text-white hover:bg-[#4F5B2C]"
            >
              Proceed to Pay →
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Cart;
