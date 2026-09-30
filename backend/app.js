
//office work
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

// ==================================================
// Middleware
// ==================================================

app.use(cors());
app.use(express.json());


// ==================================================
// Feature Section API
// ==================================================

app.get("/api/feature-products", async (req, res) => {
  try {

    // Call free API from backend
    const response = await fetch(
      "https://dummyjson.com/products?limit=30"
    );

    const data = await response.json();

    // Send product information to frontend
    res.json({
      products: data.products
    });

  } catch (error) {

    console.error("Feature Products API Error:", error);

    res.status(500).json({
      message: "Failed to fetch feature products"
    });

  }
});


// ==================================================
// Test Backend
// ==================================================

app.get("/", (req, res) => {
  res.json({
    message: "ShopMate Backend is Running"
  });
});


// ==================================================
// Start Server
// ==================================================

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});