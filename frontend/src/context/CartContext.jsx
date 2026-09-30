
import { createContext , useContext , useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const[cart , setCart] = useState([]);

//Add Product to cart
function addToCart(product){

  setCart((currentCart) => {

      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );
      
      if (existingProduct) {

        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      }

        return [
        ...currentCart,
        {...product , 
          quantity:1,
        },
      ];

});

}

//increase quantity
function increaseQuantity(id) {
  setCart((currentCart) =>
    currentCart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
}

//Descrease Product
function decreaseQuantity(id) {
  setCart((currentCart) =>
    currentCart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
}

//Remove Product

function removeProduct(id){
  setCart ((currentCart)=>
  currentCart.filter((item)=>item.id !==id)
  );
}

return(
<CartContext.Provider
  value={{
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  }}
>

      {children}
    </CartContext.Provider>
  
)}


export function useCart(){
    return useContext(CartContext);
}


