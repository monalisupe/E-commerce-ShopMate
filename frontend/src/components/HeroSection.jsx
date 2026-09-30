// import {Link} from "react-router-dom"
// import watch2 from "../assets/watch2.png"
// import person1 from "../assets/person1.jpg"
// import person2 from "../assets/person2.jpg"
// import person3 from "../assets/person3.jpg"
// import person4 from "../assets/person4.jpg"
// import fashion2 from "../assets/fashion2.png"


// function HeroSection() {
//   return (
//     <section className="mx-auto max-w-4xl px-4 py-6">

//       <div className="grid min-h-40 grid-cols-1 overflow-hidden rounded-3xl bg-[#f0f3db] lg:grid-cols-2">

//         {/* LEFT SIDE */}
//         <div className="flex flex-col justify-center px-8 py-12 lg:px-14">

//           {/* Small Label */}
//           <span className="mb-5 w-fit rounded-full bg-[#ccf142] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#68753D]">
//             ● New Arrivals
//           </span>

//           {/* Heading */}
//           <h1 className="max-w-xl text-4xl  font-bold leading-tight text-gray-900 md:text-5xl">
//             Discover The Best
//             <br />
//             Products for You
//           </h1>

//           {/* Description */}
//           <p className="mt-5 max-w-md text-sm leading-6 text-gray-600">
//            Explore our new deals..!!
//           </p>

//           {/* Buttons */}
//           <div className="mt-7 flex flex-wrap gap-3">

//             <Link 
//             to="/Categories"
//             className="rounded-lg bg-[#7B8B4A] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#657438] hover:shadow-md">
//               Shop Now 
//             </Link>

//             <Link 
//             to="/Deals"
//             className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition duration-300 hover:bg-gray-100 hover:shadow-md">
//               Explore Deals
//             </Link>

//           </div>

//           {/* Customers
//           <div className="mt-8 flex items-center gap-3">

//             <div className="flex -space-x-2">

//               <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-400" />

//               <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-500" />

//               <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-600" />

//               <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-700" />

//             </div>

//             <p className="text-xs text-gray-600">
//               Trusted by 10,000+ Happy Customers
//             </p>

//           </div> */}

//         {/* PERSONS SIDE IMAGES
//         <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-600">

//           {/* <div className="flex h-55 w-full max-w-lg items-center justify-center rounded-3xl bg-[#E8E8DC]">

//             <div className="text-center">
//                   <img
//                      src={watch2}
//                      alt="watch2"
//                      className="h-80 w-80 object-contain"
//                    />
              
//             </div>

//           </div> */}

//           {/* <img
//           src={person1}
//           alt="person1"
//           className="h-8 w-8 rounded-full border-2 border-white bg-gray-600"
//           />

//           <img
//           src={person2}
//           alt="person2"
//           className="h-8 w-8 rounded-full border-2 border-white bg-gray-600"
//           />

//           <img
//           src={person3}
//           alt="person3"
//           className="h-8 w-8 rounded-full border-2 border-white bg-gray-600"
//           />

//           <img
//           src={person4}
//           alt="person4"
//           className="h-8 w-8 rounded-full border-2 border-white bg-gray-600"
//           />

          

//         </div>

//         </div>*/} 

//   <div className="mt-8 flex items-center gap-3">
//   <div className="flex -space-x-2">

//     <img
//       src={person1}
//       alt="Person 1"
//       className="h-8 w-8 rounded-full border-2 border-white object-cover"
//     />

//     <img
//       src={person2}
//       alt="Person 2"
//       className="h-8 w-8 rounded-full border-2 border-white object-cover"
//     />

//     <img
//       src={person3}
//       alt="Person 3"
//       className="h-8 w-8 rounded-full border-2 border-white object-cover"
//     />

//     <img
//       src={person4}
//       alt="Person 4"
//       className="h-8 w-8 rounded-full border-2 border-white object-cover"
//     />

//   </div>

//   <p className="text-xs text-gray-600">
//     Trusted by 10,000+ Happy Customers
//   </p>
//   </div>
//   </div>

//         {/* RIGHT SIDE
//         <div className="flex items-center justify-center p-8">

//           <div className="flex h-55 w-full max-w-lg items-center justify-center rounded-3xl bg-[#E8E8DC]">

//             <div className="text-center">
//                   <img
//                      src={watch2}
//                      alt="watch2"
//                      className="h-80 w-80 object-contain"
//                    />
              
//             </div>

//           </div>

//         </div> */}

//         <div className=" flex h-100 w-80 item-centre justify-centre overflow-hidden bg-[#f0f3db] hover:bg-slate-200">
//           <img 
//           src={fashion2}
//           alt="fashion2"
//           className="h-full w-full object-contain"
// />
//         </div>

//       </div>

//     </section>
//   );
// }

// export default HeroSection;


{/* 15-09-2026 */}


// import { Link } from "react-router-dom";
// import fashion2 from "../assets/fashion2.png";

// function HeroSection() {
//   return (
//     <div className="mx-auto flex items-center justify-around bg-gray-100 p-8 w-4/5 max-w-7xl">

//       <div>
//         <h1 className="text-3xl font-bold">
//           Welcome to ShopMate
//         </h1>

//         <p className="mt-3 text-gray-600">
//           Find the products you need at good prices.
//         </p>

//         <div className="mt-5">
//           <Link
//             to="/Categories"
//             className="mr-3 bg-green-600 px-4 py-2 text-white"
//           >
//             Shop Now
//           </Link>

//           <Link
//             to="/Deals"
//             className="border border-gray-400 px-4 py-2"
//           >
//             View Deals
//           </Link>
//         </div>
//       </div>

//       <div>
//         <img
//           src={fashion2}
//           alt="Products"
//           className="h-60 w-60 object-contain"
//         />
//       </div>

//     </div>
//   );
// }

// export default HeroSection;


import Bagpack from "../assets/Bagpack.jpg";
import Shoe from "../assets/Shoe.jpg";
import Sports from "../assets/Sports.jpg";
import Laptop from "../assets/Laptop.jpg";
import Perfume from "../assets/Perfume.jpg";
import Plant from "../assets/Plant.jpg";
import Headphones from "../assets/Headphones.jpg";
import Fashion from "../assets/Fashion.jpg";

function HeroSection() {

  // Cards Data
  const cards = [
   
  { image: Shoe, 
    text: "Offers is avilable on this product",
     textColor: "text-black" },

{ image: Sports,
   text: "Free Delivery avilable",
    textColor: "text-white" },

{ image: Laptop, 
  text: "Up t0 10% off", 
  textColor: "text-black" },

{ image: Plant, 
  text: "Multiple varities", 
  textColor: "text-white" },

{ image: Perfume, 
  text: "Cutomization avilable", 
  textColor: "text-black" },

// { image: Headset1, 
//   text: "Free delivery avilable", 
//   textColor: "text-black" },

{
  image : Fashion,
  text : "50% off",
  textColor:"text-white"
},

{ image: Bagpack, 
  text: "Great Deals of the day", 
  textColor: "text-black" },

{ image: Headphones, 
  text: "50% off on this product", 
  textColor: "text-black" },
  ];

  return (
    <section className="w-full px-4 py-6">

      {/* Cards Container// Enables horizontal scroll snapping */}
      
<div className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">        {cards.map((card, index) => (
          <div
            key={index}
            // Changed: increased height, width kept exactly the same
            className="relative h-[550px] w-[calc(20%-12.8px)] shrink-0 overflow-hidden rounded-2xl shadow-sm snap-start"
          >

            <img
              src={card.image}
              alt={card.text}
              className="h-full w-full object-cover"
            />

            {/* Changed: added text over the image */}
            <h3 className={`absolute top-5 left-0 w-full px-3 text-center text-xl font-bold ${card.textColor} drop-shadow-lg`} >
             {card.text}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HeroSection;