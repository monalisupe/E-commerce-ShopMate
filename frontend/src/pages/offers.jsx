import { useState, useEffect } from "react";
import {useCart} from "../context/CartContext"

function Offers() {

  const [products, setProducts] = useState([]);

  // CHANGED: Store clicked product
 
  const [selectedProduct, setSelectedProduct] = useState(null);

  //add to cart

  const {addToCart} = useCart();

  useEffect(() => {

    // Fetch products from our backend
    fetch("http://localhost:5000/api/products")

      // Convert response into JSON
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        setProducts(data);
      })

      // CHANGED: Handle API error
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

  }, []);


  return (
    <div>

      {/* ==============================
          PRODUCTS
          ============================== */}

      <div className="grid grid-cols-4 gap-5 p-5">

        {products.map((product) => (

          // key={product.id} gives each product a unique key
          <div
            key={product.id}

            // CHANGED:
            // Function runs only when user clicks
            onClick={() => setSelectedProduct(product)}

            className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
          >

            {/* CHANGED: image → imagePath */}
            <img
              src={`http://localhost:5000${product.imagePath}`}
              alt={product.name}
              className="mx-auto h-56 w-full object-contain"
            />


            {/* CHANGED: title → name */}
            <h1 className="mx-auto font-bold text-black">
              {product.name}
            </h1>


            {/* Price */}
            <p className="mx-auto font-light text-green-950">
              ₹{product.price}
            </p>


            {/* CHANGED: Old Price */}
            <p className="mx-auto font-light text-gray-400 line-through">
              ₹{product.oldPrice}
            </p>


            {/* CHANGED: Review */}
            <p className="text-sm text-yellow-600">
              ⭐ {product.review}
            </p>


            {/* ==============================
                ADD TO CART BUTTON
                ============================== */}

            <button

              // Prevent card click when button is clicked
              onClick={(e) => {
                e.stopPropagation();

                // CHANGED: Actually add product to cart
                addToCart(product);
              }}

              className="mr-5 rounded bg-slate-700 px-5 py-2 font-semibold text-white hover:bg-slate-800"
            >
              Add to cart

            </button>

          </div>

        ))}

      </div>


      {/* =================================================
          PRODUCT DETAILS

          IMPORTANT:
          This is OUTSIDE products.map()

          So only ONE details section appears.
          ================================================= */}

      {selectedProduct && (

        <div className="mx-5 mt-10 rounded-xl border p-8">

          {/* Product Title */}

          {/* CHANGED:
              selectedProduct.title → selectedProduct.name
          */}

          <h2 className="mb-6 text-3xl font-bold">
            {selectedProduct.name}
          </h2>


          {/* Product Image */}

          {/* CHANGED:
              selectedProduct.images[0]
              →
              selectedProduct.imagePath
          */}

          <img
            src={`http://localhost:5000${selectedProduct.imagePath}`}
            alt={selectedProduct.name}
            className="mb-6 h-80 w-full object-contain"
          />


          {/* Description */}

          <p className="mb-5 text-gray-600">
            {selectedProduct.description}
          </p>


          {/* Price */}

          <p className="mb-5 text-2xl font-bold text-green-700">
            ₹{selectedProduct.price}
          </p>


          {/* Old Price */}

          <p className="mb-5 text-gray-400 line-through">
            ₹{selectedProduct.oldPrice}
          </p>


          {/* Review */}

          <p className="mb-5 text-yellow-600">
            ⭐ {selectedProduct.review}
          </p>


          {/* ================= ADD TO CART ================= */}

          {/* CHANGED:
              For now this only logs the product.
              We will connect CartContext next.
          */}

          <button
            onClick={() => addToCart(selectedProduct)}
            className="mr-5 rounded bg-slate-700 px-5 py-2 font-semibold text-white hover:bg-slate-800"
          >
            ADD TO CART
          </button>


          {/* ================= BACK BUTTON ================= */}

          <button
            onClick={() => setSelectedProduct(null)}
            className="rounded-lg bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
          >
            ← Back to Offers
          </button>

        </div>

      )}

    </div>
  );
}

export default Offers;