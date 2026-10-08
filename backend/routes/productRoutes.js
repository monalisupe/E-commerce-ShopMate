// Import Express
const express = require("express");

// Create a router
const router = express.Router();


// ⭐ NEW / IMPORTANT
// Import the controller function.
//
// WITHOUT THIS IMPORT:
// router.get("/feature-product", getFeatureProducts);
//
// will give:
// ReferenceError: getFeatureProducts is not defined
const {
  getProducts
} = require("../controllers/productController");

const {
  addToCart,
  getCart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  clearCart
} = require("../controllers/cartController");


// ============================================
// PRODUCT API ROUTES
// ============================================

// GET /api/feature-product
//
// "/feature-product"
//        ↓
// URL path handled by this router
//
// getFeatureProducts
//        ↓
// Controller function that does the actual work
router.get("/products", getProducts);
router.post("/cart", addToCart);
router.get("/cart", getCart);
router.get("/cart" , increaseQuantity);
router.patch("/cart/:id/decrease", decreaseQuantity);
router.delete("/cart/:id", removeProduct);
router.delete("/cart", clearCart);


// ⭐ IMPORTANT
// Export the router so app.js can use it.
module.exports = router; 

