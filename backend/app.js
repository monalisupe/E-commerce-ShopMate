// //**Express.js** is a Node.js framework that makes 
// // it easier to create **web servers, routes, and APIs** 
// // for our ShopMate backend.
// // use to create web server
// const express = require("express");

// // cors - Cross Origin Resource Sharing
// // use allow to communicate frontend with backend using local host
// const cors = require("cors");

// // create express application
// const app = express();

// // port number
// const PORT = 5000;

// const productRoutes = require("./routes/productRoutes");


// // Middleware

// // middleware runs between request and response

// // app.use - use this middleware in the application
// //CORS middleware to our Express application so 
// // it allows cross-origin requests from the frontend.
// app.use(cors());

// // express.json - allows us to receive JSON data from frontend
// // Example:
// // { id: 2, "name": "ABC", "city": "PUNE" }
// app.use(express.json());

// //call product routes
// app.use("/api", productRoutes);

// // API Creation

// // app.get() - Creates a GET route
// // GET is normally used when we want to retrieve/read data
// // req - request coming from frontend
// // res - response sent to frontend

// app.get("/api/feature-product", async (req, res) => {

//   try {

//     // limit 30 means give maximum 30 products
//     //we need some product data to return to the frontend,
//     const response = await fetch(
//       "https://dummyjson.com/products?limit=30"
//     );

//     // Take response and convert it into JSON format
//     const data = await response.json();

//     // Send response to frontend
//     res.json({

//       // I only want to expose/send the product information
//       // that my frontend needs
//       products: data.products
//     });

//   } catch (error) {

//     console.error("Feature Products API Error:", error);

//     // Moved this inside catch because we only want
//     // to send status 500 when an error actually occurs.
//     res.status(500).json({
//       message: "Failed to fetch data"
//     });
//   }
// });


// // Test Backend

// app.get("/", (req, res) => {

//   res.json({
//     message: "ShopMate backend is running"
//   });

// });


// // Start Server

// // We only need ONE app.listen() to start the server.

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

const productRoutes = require("./routes/productRoutes");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const checkRequestMiddleware = require("./middleware/checkRequestMiddleware");


// Middleware

app.use(cors());

app.use(express.json());

app.use("/images", express.static("images"));

app.use(loggerMiddleware);
app.use(checkRequestMiddleware);
//product routes store here
app.use("/api", productRoutes);

// Test Backend

app.get("/", (req, res) => {

  res.json({
    message: "ShopMate backend is running"
  });

});


// Start Server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});