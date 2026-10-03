
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