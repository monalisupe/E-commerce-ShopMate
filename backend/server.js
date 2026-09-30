
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = require("./Product");
const categories = require("./Category");

app.use("/images" , express.static("images"))

app.get("/", (req, res) => {

  res.send("Backend is working!");

});


app.get("/api/products", (req, res) => {

  res.json(products);

});


app.get("/api/categories", (req, res) => {

  res.json(categories);

});


// ==================================================
// Feature Section API
// ==================================================

app.get("/api/feature-products", async (req, res) => {

  try {

    // Call free API from backend
    const response = await fetch(
      "https://dummyjson.com/products?limit=24"
    );

    const data = await response.json();

    // Send API data to FeatureSection.jsx
    res.json(data);

  } catch (error) {

    console.error("Feature API Error:", error);

    res.status(500).json({
      message: "Failed to fetch feature products"
    });

  }

});


app.listen(5000, () => {

  console.log("Server running on port 5000");

});