let cart = [];


// ==========================================
// 1. ADD TO CART
// ==========================================
const addToCart = (req, res) => {

  // Get product sent from frontend
  const product = req.body;

  // Check if product ID is provided
  if (!product.id) {
    return res.status(400).json({
      message: "Product id required"
    });
  }

  // Check whether this product already exists in cart
  const existing = cart.find(
    (item) => item.id === product.id
  );

  // If product already exists
  if (existing) {

    // Increase its quantity by 1
    existing.quantity += 1;

    return res.status(200).json({
      message: "Product quantity increased",
      cart
    });
  }

  // If product is NOT already in cart
  // Add the product with quantity = 1
  cart.push({
    ...product,
    quantity: 1
  });

  res.status(200).json({
    message: "Product added to cart",
    cart
  });
};


//2. GET CART 

const getCart = (req, res)=>{
  res.status(200).json({
    cart, 
    count : cart.length
  });
};

// 3 . Increase Quantity 

const increaseQuantity = (req , res ) =>{
  const id = Number(req.param.id);

  const product = cart.find(item => item.id ===id);

  //if product was not found
  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  product.quantity += 1;

  res.status(200).json({
    message: "Quantity increased",
    cart
  });
}; 


// DECREASE QUANTITY

const decreaseQuantity = (req , res )=>{
  //convert id string into number
  const id = Number(req.params.id);

  //find product in cart with matching id
  const product = cart.find(item => item.id ===id);

  //if product was not found
  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  if (product.quantity > 1){
    product.quantity -= 1;
  }else{
     cart = cart.filter(item => item.id !== id);
  }

  res.status(200).json({
    message: "Quantity decreased",
    cart
  });
};

// DELETE / REMOVE PRODUCT

const removeProduct = (req , res ) =>{
  const id = Number(req.params.id);

  //find product in cart with matching id
  const product = cart.find(item => item.id ===id);

  //if product was not found
  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

   cart = cart.filter(item => item.id !== id);

    res.status(200).json({
    message: "Product removed",
    cart
  });

}

//CLEAR CART
 
const clearCart = (req , res) =>{
  cart=[];

  res.status(200).json({
    message: "Cart cleared",
    cart
  });
};

// EXPORT

module.exports = {
  addToCart,
  getCart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  clearCart
};