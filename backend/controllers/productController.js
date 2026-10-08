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
