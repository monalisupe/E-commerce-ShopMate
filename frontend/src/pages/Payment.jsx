
// function Payment() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      
//       {/* Main Box */}
//       <div className="w-full max-w-lg rounded-2xl bg-[#d3d3d3] p-8 shadow-lg">

//         <h1 className="mb-6 text-center text-3xl font-bold text-black">
//           Payment Details
//         </h1>

//         {/* Name */}
//         <div className="mb-5">
//           <label className="mb-2 block font-semibold text-black">
//             Name
//           </label>

//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-purple-400"
//           />
//         </div>

//         {/* Address */}
//         <div className="mb-5">
//           <label className="mb-2 block font-semibold text-black">
//             Address
//           </label>

//           <textarea
//             placeholder="Enter your address"
//             rows="3"
//             className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-purple-400"
//           ></textarea>
//         </div>

//         {/* Landmark/Lane No */}
//         <div className="mb-6">
//           <label className="mb-2 block font-semibold text-black">
//             Landmark/Lane No
//           </label>

//           <input
//             type="text"
//             placeholder="Landmark"
//             className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-purple-400"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-5">
//           <label className="mb-2 block font-semibold text-black">
//             Email
//           </label>

//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-purple-400"
//           />
//         </div>

//         {/* Contact Number */}
//         <div className="mb-6">
//           <label className="mb-2 block font-semibold text-black">
//             Contact Number
//           </label>

//           <input
//             type="tel"
//             placeholder="Enter your contact number"
//             className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-purple-400"
//           />
//         </div>

//         {/* Proceed Button */}
//         <button
//           className="w-full rounded-lg bg-black px-6 py-3 text-lg font-semibold text-white hover:bg-purple-700"
//         >
//           Proceed to Payment
//         </button>

//       </div>
//     </div>
//   );
// }

// export default Payment;

import { useState } from "react";

function Payment() {
  const [paymentStep, setPaymentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");

  const [orderId] = useState(
    "ORD" + Math.floor(100000 + Math.random() * 900000)
  );

  // Demo amount for now
  const totalAmount = 500;

  // Step 1 → Step 2
  const handleProceedToPayment = () => {
    setPaymentStep(2);
  };

  // Step 2 → Step 3 → Step 4
  const handlePayment = () => {
    setPaymentStep(3);

    setTimeout(() => {
      setPaymentStep(4);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl bg-[#d3d3d3] p-8 shadow-lg">

        {/* ================= CUSTOMER DETAILS ================= */}
        {paymentStep === 1 && (
          <>
            <h1 className="mb-6 text-center text-3xl font-bold text-black">
              Payment Details
            </h1>

            {/* Name */}
            <div className="mb-5">
              <label className="mb-2 block font-semibold text-black">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Address */}
            <div className="mb-5">
              <label className="mb-2 block font-semibold text-black">
                Address
              </label>

              <textarea
                placeholder="Enter your address"
                rows="3"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>

            {/* Landmark */}
            <div className="mb-6">
              <label className="mb-2 block font-semibold text-black">
                Landmark/Lane No
              </label>

              <input
                type="text"
                placeholder="Landmark"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="mb-2 block font-semibold text-black">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Contact Number */}
            <div className="mb-6">
              <label className="mb-2 block font-semibold text-black">
                Contact Number
              </label>

              <input
                type="tel"
                placeholder="Enter your contact number"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Amount */}
            <div className="mb-6 rounded-lg bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-black">
                  Total Amount
                </span>

                <span className="text-xl font-bold text-black">
                  ₹{totalAmount.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Proceed */}
            <button
              type="button"
              onClick={handleProceedToPayment}
              className="w-full rounded-lg bg-black px-6 py-3 text-lg font-semibold text-white transition hover:bg-purple-700"
            >
              Proceed to Payment
            </button>
          </>
        )}

        {/* ================= PAYMENT METHOD ================= */}
        {paymentStep === 2 && (
          <>
            <h1 className="mb-6 text-center text-3xl font-bold text-black">
              Select Payment Method
            </h1>

            {/* Amount */}
            <div className="mb-6 rounded-lg bg-white p-4 text-center">
              <p className="text-sm text-gray-600">
                Amount to Pay
              </p>

              <p className="text-2xl font-bold text-black">
                ₹{totalAmount.toFixed(2)}
              </p>
            </div>

            {/* UPI */}
            <label className="mb-3 flex cursor-pointer items-center gap-3 rounded-lg bg-white p-4">
              <input
                type="radio"
                name="paymentMethod"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span className="font-medium text-black">
                UPI / GPay
              </span>
            </label>

            {/* Card */}
            <label className="mb-3 flex cursor-pointer items-center gap-3 rounded-lg bg-white p-4">
              <input
                type="radio"
                name="paymentMethod"
                value="Card"
                checked={paymentMethod === "Card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span className="font-medium text-black">
                Credit / Debit Card
              </span>
            </label>

            {/* COD */}
            <label className="flex cursor-pointer items-center gap-3 rounded-lg bg-white p-4">
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <span className="font-medium text-black">
                Cash on Delivery
              </span>
            </label>

            {/* Pay */}
            <button
              type="button"
              onClick={handlePayment}
              disabled={!paymentMethod}
              className="mt-6 w-full rounded-lg bg-black px-6 py-3 text-lg font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-gray-500"
            >
              {paymentMethod === "COD" ? "Place Order" : "Pay Now"}
            </button>

            {/* Back */}
            <button
              type="button"
              onClick={() => setPaymentStep(1)}
              className="mt-3 w-full rounded-lg border border-black px-6 py-3 font-semibold text-black hover:bg-gray-200"
            >
              Back
            </button>
          </>
        )}

        {/* ================= PROCESSING ================= */}
        {paymentStep === 3 && (
          <div className="py-10 text-center">

            <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>

            <h1 className="mb-3 text-2xl font-bold text-black">
              Processing Payment
            </h1>

            <p className="text-gray-700">
              Please wait while we process your payment...
            </p>

            <p className="mt-4 text-xl font-bold text-black">
              ₹{totalAmount.toFixed(2)}
            </p>
          </div>
        )}

        {/* ================= SUCCESS ================= */}
        {paymentStep === 4 && (
          <div className="py-8 text-center">

            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-4xl font-bold text-white">
              ✓
            </div>

            <h1 className="mb-3 text-3xl font-bold text-black">
              Payment Successful
            </h1>

            <p className="mb-6 text-gray-700">
              Your payment has been completed successfully!
            </p>

            <div className="mb-6 rounded-lg bg-white p-5">

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Amount Paid
                </span>

                <span className="font-bold text-black">
                  ₹{totalAmount.toFixed(2)}
                </span>
              </div>

              <div className="mt-3 flex justify-between">
                <span className="text-gray-600">
                  Payment Method
                </span>

                <span className="font-semibold text-black">
                  {paymentMethod}
                </span>
              </div>

              <div className="mt-3 flex justify-between">
                <span className="text-gray-600">
                  Order ID
                </span>

                <span className="font-semibold text-black">
                  {orderId}
                </span>
              </div>

            </div>

            <button
              type="button"
              onClick={() => setPaymentStep(5)}
              className="w-full rounded-lg bg-black px-6 py-3 text-lg font-semibold text-white hover:bg-purple-700"
            >
              Track Your Order →
            </button>
          </div>
        )}

        {/* ================= TRACK ORDER ================= */}
        {paymentStep === 5 && (
          <div className="py-8 text-center">

            <h1 className="mb-6 text-3xl font-bold text-black">
              Track Your Order
            </h1>

            <div className="mb-6 rounded-lg bg-white p-5">
              <p className="mb-2 text-gray-600">
                Order ID
              </p>

              <p className="text-xl font-bold text-black">
                {orderId}
              </p>
            </div>

            <div className="space-y-5 text-left">

              {/* Order Placed */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                  ✓
                </div>

                <div>
                  <p className="font-semibold text-black">
                    Order Placed
                  </p>

                  <p className="text-sm text-gray-600">
                    Your order has been placed successfully.
                  </p>
                </div>
              </div>

              {/* Processing */}
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 shrink-0 rounded-full border-2 border-gray-400"></div>

                <p className="font-semibold text-gray-500">
                  Order Processing
                </p>
              </div>

              {/* Out for Delivery */}
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 shrink-0 rounded-full border-2 border-gray-400"></div>

                <p className="font-semibold text-gray-500">
                  Out for Delivery
                </p>
              </div>

              {/* Delivered */}
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 shrink-0 rounded-full border-2 border-gray-400"></div>

                <p className="font-semibold text-gray-500">
                  Delivered
                </p>
              </div>

            </div>

            <p className="mt-8 font-semibold text-green-600">
              Your order has been placed successfully! 🎉
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Payment;