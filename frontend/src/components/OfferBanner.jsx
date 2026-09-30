


// import Headphones from "../assets/Headphones.jpg";
import headset1 from "../assets/headset1.png";

function Offer() {
  return (
    // ==============================
    // OFFER SECTION
    // ==============================
    <section className="mx-auto w-full px-4 py-10">

      {/* ==============================
          MAIN OFFER BANNER
          ============================== */}
      <div className="mx-auto grid min-h-[300px] grid-cols-1 overflow-hidden rounded-2xl bg-[#f0f3db]  md:grid-cols-2">

        {/* ==============================
            LEFT SIDE - OFFER CONTENT
            ============================== */}
        <div className="mx-auto flex flex-col justify-center px-8 py-10 lg:px-12">

          {/* Small Offer Label */}
          <span className="mb-4 w-fit rounded-full bg-[#E7EBD8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#68753D]">
            Special Offer
          </span>

          {/* Main Offer Heading */}
          <h2 className="max-w-xl text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Up to 50% Off
          </h2>

          {/* Offer Description */}
          <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
            Limited time offer on selected products.
            Don't miss out on our best deals!
          </p>

          {/* Sale Button */}
          <div className="mt-6">

            <button className="rounded-lg bg-[#7B8B4A] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#657438] hover:shadow-md">
              Shop the Sale →
            </button>

          </div>

        </div>


        {/* ==============================
            RIGHT SIDE - OFFER IMAGE
            ============================== */}
        <div className="flex items-center justify-center p-6">

          <img
            src={headset1}
            alt="Special offer headphones"
            className="h-64 w-64 object-contain transition duration-300 hover:scale-105"
          />

        </div>

      </div>

    </section>
  );
}

export default Offer;

