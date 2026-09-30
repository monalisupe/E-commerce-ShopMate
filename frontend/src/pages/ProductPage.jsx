import Bluetooth from "../assets/Bluetooth.jpg";

function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      {/* Main Product Container */}
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg p-8">

        <div className="flex flex-col md:flex-row gap-10">

          {/* LEFT SIDE - PRODUCT IMAGE */}
          <div className="w-full md:w-1/2">

            {/* Main Image */}
            <div className="h-[450px] bg-gray-100 rounded-xl flex items-center justify-center">
              <img
                src={Bluetooth}
                alt="Bluetooth Speaker"
                className="max-h-[380px] max-w-full object-contain"
              />
            </div>

            {/* Small Images */}
            <div className="flex gap-4 mt-4">

              <div className="w-20 h-20 border rounded-lg flex items-center justify-center">
                <img
                  src={Bluetooth}
                  alt="Product"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="w-20 h-20 border rounded-lg flex items-center justify-center">
                <img
                  src={Bluetooth}
                  alt="Product"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="w-20 h-20 border rounded-lg flex items-center justify-center">
                <img
                  src={Bluetooth}
                  alt="Product"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

            </div>
          </div>


          {/* RIGHT SIDE - PRODUCT DETAILS */}
          <div className="w-full md:w-1/2">

            {/* Brand */}
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Sony
            </p>

            {/* Product Name */}
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              Premium Bluetooth Speaker
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-500">
                ★★★★★
              </span>

              <span className="text-sm text-gray-500">
                4.8 (124 Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-6">

              <span className="text-3xl font-bold text-gray-900">
                ₹2,499
              </span>

              <span className="text-lg text-gray-400 line-through">
                ₹3,499
              </span>

              <span className="text-sm font-semibold text-green-600">
                29% OFF
              </span>

            </div>

            {/* Description */}
            <p className="text-gray-600 mt-6 leading-7">
              Experience powerful sound with this premium Bluetooth
              speaker. Enjoy high-quality audio, long battery life,
              and a stylish design.
            </p>

            {/* Color */}
            <div className="mt-6">

              <p className="font-semibold text-gray-900 mb-3">
                Color
              </p>

              <div className="flex gap-3">

                <button className="w-10 h-10 rounded-full bg-black border-4 border-white ring-2 ring-black"></button>

                <button className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white ring-1 ring-gray-300"></button>

                <button className="w-10 h-10 rounded-full bg-red-500 border-4 border-white ring-1 ring-gray-300"></button>

              </div>

            </div>

            {/* Quantity */}
            <div className="mt-6">

              <p className="font-semibold text-gray-900 mb-3">
                Quantity
              </p>

              <div className="flex items-center border rounded-lg w-fit">

                <button className="px-4 py-2 text-xl hover:bg-gray-100">
                  -
                </button>

                <span className="px-5 py-2 border-x">
                  1
                </span>

                <button className="px-4 py-2 text-xl hover:bg-gray-100">
                  +
                </button>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              {/* Wishlist */}
              <button className="w-12 h-12 border rounded-lg text-xl hover:bg-gray-100">
                ♡
              </button>

              {/* Add To Cart */}
              <button className="flex-1 bg-black text-white rounded-lg font-semibold hover:bg-gray-800">
                Add to Cart
              </button>

            </div>

            {/* Buy Now */}
            <button className="w-full mt-4 border border-black rounded-lg py-3 font-semibold hover:bg-gray-100">
              Buy Now
            </button>

            {/* Product Information */}
            <div className="border-t mt-8 pt-6">

              <p className="text-sm text-gray-600 mb-2">
                ✓ Free Delivery
              </p>

              <p className="text-sm text-gray-600 mb-2">
                ✓ 1 Year Warranty
              </p>

              <p className="text-sm text-gray-600">
                ✓ 7 Days Replacement
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductPage;
