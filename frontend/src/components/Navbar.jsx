

// // import { Link , useNavigate } from "react-router-dom";


// // function Navbar() {

// //   const navigate = useNavigate();
// //   return (
// //     <nav className="border-b border-blue-100 bg-white">
// //       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

// //         {/* Logo */}
// //         <Link to="/" className="text-xl font-bold text-blue-900">
// //           🛍️ ShopMate
// //         </Link>

// //         {/* Navigation */}
// //         <div className="hidden items-center gap-5 md:flex">
// //           <Link to="/" className="text-sm font-medium text-gray-700 transition hover:text-[#7B8B4A]">
// //             Home
// //           </Link>

// //           <Link to="/shop" className="text-sm font-medium text-gray-700 transition hover:text-[#7B8B4A]">
// //             Shop
// //           </Link>

// //           <Link to="/categories" className="text-sm font-medium text-gray-700 transition hover:text-[#7B8B4A]">
// //             Categories
// //           </Link>

// //           <Link to="/deals" className="text-sm font-medium text-gray-700 transition hover:text-[#7B8B4A]">
// //             Deals
// //           </Link>
// //         </div>

// //         {/* <Link to="/offers" className="text-sm font-medium text-gray-700 transition hover:text-[#7B8B4A]">
// //             Offer
// //           </Link>
// //         </div> */}

// //         {/* Right icons */}
// //         <div className="flex items-center gap-4">
// //           {/*search button */}
// //           <Link
// //           onClick={()=>navigate("/search")}
// //            className="text-lg transition hover:scale-110">
// //             🔍
// //             </Link>



// //           {/*Like button */}
// //           <Link
// //            className="text-lg transition hover:scale-110">
// //             ♡
// //             </Link>

// //           {/*Cart button */}
// //           <Link
// //           to="/cart"
// //           className="text-lg transition hover:scale-110"
// //           >
// //           🛒
// //         </Link>
// //         </div>

// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// // import { Link, useNavigate } from "react-router-dom";

// // function Navbar() {

// //   const navigate = useNavigate();

// //   return (
// //     <nav className="bg-[#131921] text-white">

// //       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

// //         {/* Main Navbar */}
// //         <div className="mx-auto max-w-7xl px-5 py-6 items-center gap-5">
// //           <Link to="/" className="shrink-0">
// //           <img
// //           src={ShopmateLogo}
// //           alt="ShopmateLogo"
// //           className="h-12 w-auto object-contain"
// //           />
// //           </Link>
// //         </div>

// //         {/* Navigation */}
// //         <div className="hidden items-center gap-5 md:flex">

// //           <Link
// //             to="/"
// //             className="text-sm font-medium text-gray-700 transition hover:text-[#7B8B4A]"
// //           >
// //             Home
// //           </Link>

// //           <Link
// //             to="/shop"
// //             className="text-sm font-medium text-gray-700 transition hover:text-[#7B8B4A]"
// //           >
// //             Shop
// //           </Link>

// //           <Link
// //             to="/categories"
// //             className="text-sm font-medium text-gray-700 transition hover:text-[#7B8B4A]"
// //           >
// //             Categories
// //           </Link>

// //           <Link
// //             to="/deals"
// //             className="text-sm font-medium text-gray-700 transition hover:text-[#7B8B4A]"
// //           >
// //             Deals
// //           </Link>

// //           {/* Offers */}
// //        <Link
// //   to="/offers"
// //   className="text-sm font-medium text-gray-700 transition hover:text-[#7B8B4A]"
// // >
// //   Offers
// // </Link>

// //         </div>

// //         {/* Right icons */}
// //         <div className="flex items-center gap-4">

// //           {/* Search button */}
// //           <Link
// //             onClick={() => navigate("/search")}
// //             className="text-lg transition hover:scale-110"
// //           >
// //             🔍
// //           </Link>

// //           {/* Like button */}
// //           <Link
// //             className="text-lg transition hover:scale-110"
// //           >
// //             ♡
// //           </Link>

// //           {/* Cart button */}
// //           <Link
// //             to="/cart"
// //             className="text-lg transition hover:scale-110"
// //           >
// //             🛒
// //           </Link>

// //         </div>

// //         </div>

// //       </div>

// //     </nav>
// //   );
// // }

// // export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import ShopmateLogo1 from "../assets/ShopmateLogo1.png";

function Navbar() {

  // Navigation
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-2 w-full rounded-xl border-1 border-black">

      {/* Main Navbar */}
      <div className="mx-auto flex items-center px-4 py-2 bg-yellow-600">

        {/* Image Imported */}
        <Link to="/">
          <img
            src={ShopmateLogo1}
            alt="ShopmateLogo1"
            className="h-16 w-auto object-contain hover:bg-slate-500"
          />
        </Link>


        {/* Location */}
        <div className="ml-4 flex shrink-0 items-center gap-2">

          <span className="text-lg">
            📍
          </span>

          <div>
            <p className="text-xs font-semibold text-gray-900">
              Delivering to
            </p>

            <p className="text-xs font-semibold text-gray-800">
              Select Location
            </p>
          </div>

        </div>


        {/* Search Bar */}
        <div className="ml-5 flex h-12 flex-1">

          {/* Select Category Option */}
          <select
            className="rounded-l-md bg-gray-100 px-3 text-sm text-gray-700 outline-none"
            onChange={(e) => navigate(e.target.value)}
          >
            <option value="">Shop</option>
            <option value="/deals">Deals</option>
            <option value="/categories">Categories</option>
            <option value="/offers">Offers</option>
          </select>


          {/* Search Bar Input */}
          <input
            type="text"
            placeholder="Search Shopmate"
            className="ml-1 min-w-0 flex-1 rounded-2xl border-1 border-black px-4 text-gray-700 outline-none"
          />


          {/* Search Button */}
          <button
            className="w-12 shrink-0 rounded-r-md bg-[#7B8B4A] text-xl"
          >
            🔍
          </button>

        </div>


        {/* Right Side Options */}
        <div className="ml-3 flex shrink-0 items-center gap-1">


          {/* Language */}
          <select
            className="h-10 rounded-md bg-gray-100 px-2 text-sm text-gray-700 outline-none"
          >
            <option>English</option>
            <option>Marathi</option>
            <option>Hindi</option>
          </select>


          {/* Sign In */}
          <button
            className="h-10 rounded-md bg-green-700 px-3 text-sm font-bold text-white"
          >
            Sign In
          </button>


          {/* Return & Orders */}
          <button
            className="h-10 rounded-md bg-green-700 px-3 text-sm font-medium text-white"
          >
            Returns & Orders
          </button>


          {/* Cart */}
          <Link
            to="/cart"
            className="flex h-10 items-center gap-1 rounded-md bg-[#7B8B4A] px-3 text-sm font-bold text-white"
          >
            🛒 Cart
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Navbar;