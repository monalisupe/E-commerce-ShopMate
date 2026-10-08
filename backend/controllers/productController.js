// const products = require("../Product");




// const getFeatureProducts = async (req, res) => {

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
// };

// module.exports={
//     getFeatureProducts
// };


const products = require("../Product");

const getProducts = (req, res)=>{
    try{
        // res.json({
        //     products : products
        // });

        res.json(products);

    }catch(error){
        console.error("Product API error",error);
        
        res.status(500).json({
      message: "Failed to fetch data"
    });

    }
};

module.exports={
   getProducts
};
