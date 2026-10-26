
// // CartContext.jsx

// import { createContext, useContext, useState } from "react";
// // We use:
// // createContext → to create a common cart context
// // useContext   → to access cart data/functions from other components
// // useState     → to store the cart products

// const CartContext = createContext();
// // Creates the Cart Context so cart data can be shared
// // between components like Navbar, Cart, Product pages, etc.

// export const CartProvider = ({ children }) => {
//   // CartProvider makes the cart context available
//   // to all components inside it.

//   const [cart, setCart] = useState([]);
//   // cart → stores all products currently in the cart
//   // setCart → updates the cart
//   // [] → cart starts as an empty array


//   // =====================================================
//   // ADD PRODUCT TO CART
//   // =====================================================

//   async function addToCart(product) {
//     // This function receives the product
//     // when the user clicks "Add to Cart".

//     try {
//       // try → attempts to send the product to the backend.
//       // If something goes wrong, catch() will handle it.


//       const response = await fetch("http://localhost:5000/api/cart", {
//         // fetch → sends a request from frontend to backend.
//         // /api/cart → backend API responsible for cart operations.
//         // await → waits for the backend response.

//         method: "POST",
//         // POST → tells the backend that we are sending
//         // product data to be added to the cart.


//         headers: {
//           "Content-Type": "application/json",
//         },
//         // Tells the backend:
//         // "The data I am sending is in JSON format."


//         body: JSON.stringify(product),
//         // Sends the selected product to the backend.
//         // JSON.stringify() converts the JavaScript product object
//         // into JSON format that can be sent through the request.
//       });


//       const data = await response.json();
//       // Backend sends a response.
//       // response.json() converts that response into
//       // a JavaScript object.
//       //
//       // Example:
//       // data = {
//       //   cart: [...]
//       // }


//       setCart(data.cart);
//       // Updates the frontend cart with the cart
//       // received from the backend.
//       //
//       // This causes components using "cart" to re-render
//       // and show the updated cart.
//     }

//     catch (error) {
//       // If the API request fails,
//       // this block will execute.

//       console.error("Error adding product:", error);
//       // Shows the error in the browser console
//       // so we can find what went wrong.
//     }
//   }

//   //INCREASE QUANTITY 

//   async function increaseQuantity(id) {
//     try{
//       const response = await fetch(
//          `http://localhost:5000/api/cart/${id}/increase`,
//          {
//           method:"PATCH",
//          }
//       );

//       const data = await response.json();

//       if(!response.ok){
//         throw new Error(data.message || "Failed to increase quantity");
//       }

//       setCart(data.cart);
//     }catch(error){
// console.error("Error Increasing Quantity" , error);
//     }
//   }

//   //DECREASE QUANTITY

// async function decreaseQuantity(id) {
//   try {
//     const response = await fetch(
//       `http://localhost:5000/api/cart/${id}/decrease`,
//       {
//         method: "PATCH",
//       }
//     );

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Failed to decrease quantity");
//     }

//     setCart(data.cart);
//   } catch (error) {
//     console.error("Failed to decrease quantity:", error);
//   }
// } 
//   // CONTEXT PROVIDER

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         setCart,
//         addToCart,
//         increaseQuantity,
//         decreaseQuantity
//       }}
//     >
//       {/* 
//         These values are made available to all components
//         inside CartProvider.

//         cart      → current cart products
//         setCart   → update cart manually if required
//         addToCart → function to add a product
//       */}

//       {children}
//       {/* Renders all components wrapped inside CartProvider */}
//     </CartContext.Provider>
//   );
// };


// // =====================================================
// // CUSTOM HOOK
// // =====================================================

// export const useCart = () => {
//   return useContext(CartContext);
// };
// // useCart() allows components such as Cart.jsx,
// // Navbar.jsx, Product.jsx, etc. to access:
// // cart
// // setCart
// // addToCart


// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// const CartContext = createContext();

// const API_URL = "http://localhost:5000/api/cart";

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [loadingCart, setLoadingCart] = useState(true);

//   // Read the backend response and handle errors
//   async function readResponse(response) {
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Cart request failed");
//     }

//     return data;
//   }

//   // GET CART when the application starts
//   useEffect(() => {
//     async function fetchCart() {
//       try {
//         const response = await fetch(API_URL);
//         const data = await readResponse(response);

//         setCart(data.cart || []);
//       } catch (error) {
//         console.error("Error loading cart:", error);
//       } finally {
//         setLoadingCart(false);
//       }
//     }

//     fetchCart();
//   }, []);

//   // ADD PRODUCT
//   async function addToCart(product) {
//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(product),
//       });

//       const data = await readResponse(response);
//       setCart(data.cart || []);
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   }

//   // INCREASE QUANTITY
//   async function increaseQuantity(id) {
//     try {
//       const response = await fetch(
//         `${API_URL}/${encodeURIComponent(id)}/increase`,
//         {
//           method: "PATCH",
//         }
//       );

//       const data = await readResponse(response);
//       setCart(data.cart || []);
//     } catch (error) {
//       console.error("Error increasing quantity:", error);
//     }
//   }

//   // DECREASE QUANTITY
//   async function decreaseQuantity(id) {
//     try {
//       const response = await fetch(
//         `${API_URL}/${encodeURIComponent(id)}/decrease`,
//         {
//           method: "PATCH",
//         }
//       );

//       const data = await readResponse(response);
//       setCart(data.cart || []);
//     } catch (error) {
//       console.error("Error decreasing quantity:", error);
//     }
//   }

//   // REMOVE PRODUCT
//   async function removeProduct(id) {
//     try {
//       const response = await fetch(
//         `${API_URL}/${encodeURIComponent(id)}`,
//         {
//           method: "DELETE",
//         }
//       );

//       const data = await readResponse(response);
//       setCart(data.cart || []);
//     } catch (error) {
//       console.error("Error removing product:", error);
//     }
//   }

//   // CLEAR CART
//   async function clearCart() {
//     try {
//       const response = await fetch(API_URL, {
//         method: "DELETE",
//       });

//       const data = await readResponse(response);
//       setCart(data.cart || []);
//     } catch (error) {
//       console.error("Error clearing cart:", error);
//     }
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         setCart,
//         loadingCart,
//         addToCart,
//         increaseQuantity,
//         decreaseQuantity,
//         removeProduct,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };



import {
  createContext,
  useContext,
  useEffect,
  useState,
  // useCallback,
} from "react";

const CartContext = createContext();

// CHANGE: Corrected const and arrow function syntax.
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loadingCart, setLoadingCart] = useState(true);

  // CHANGE: Removed Markdown link formatting from the API URL.
  const API_URL = "http://localhost:5000/api/cart";

  // CHANGE: Corrected response parameter and error syntax.
  const readResponse = async (response) => {
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Cart request failed");
    }

    return data;
  };

  // CHANGE: Corrected async function and try/catch/finally brackets.
  const fetchCart = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await readResponse(response);

      setCart(data.cart || []);
    } catch (error) {
      console.error("Error loading cart:", error);
    } finally {
      setLoadingCart(false);
    }
  };

  // Load cart when the app opens.
  useEffect(() => {
    fetchCart();
  }, []);

  // ADD: Send a product to the backend with offline fallback.
  const addToCart = async (product) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await readResponse(response);
      setCart(data.cart || []);
    } catch (error) {
      console.warn("Backend unavailable, persisting to local cart state:", error);
      setCart((prev) => {
        const id = product.id ?? product._id ?? (product.name || product.title);
        const existingIndex = prev.findIndex(
          (item) => (item.id ?? item._id ?? (item.name || item.title)) === id
        );
        if (existingIndex > -1) {
          const updated = [...prev];
          const curr = updated[existingIndex];
          updated[existingIndex] = {
            ...curr,
            quantity: (curr.quantity || 1) + 1,
          };
          return updated;
        }
        return [
          ...prev,
          {
            ...product,
            id,
            quantity: 1,
            title: product.title || product.name || "Product",
            price: Number(product.price) || 0,
            image: product.image || product.thumbnail || product.imagePath || "",
          },
        ];
      });
    }
  };

  // ADD: Increase quantity through the backend with offline fallback.
  const increaseQuantity = async (id) => {
    try {
      const response = await fetch(
        `${API_URL}/${encodeURIComponent(id)}/increase`,
        { method: "PATCH" }
      );

      const data = await readResponse(response);
      setCart(data.cart || []);
    } catch (error) {
      console.warn("Backend unavailable, increasing quantity locally:", error);
      setCart((prev) =>
        prev.map((item) =>
          (item.id ?? item._id ?? (item.name || item.title)) === id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    }
  };

  // ADD: Decrease quantity through the backend with offline fallback.
  const decreaseQuantity = async (id) => {
    try {
      const response = await fetch(
        `${API_URL}/${encodeURIComponent(id)}/decrease`,
        { method: "PATCH" }
      );

      const data = await readResponse(response);
      setCart(data.cart || []);
    } catch (error) {
      console.warn("Backend unavailable, decreasing quantity locally:", error);
      setCart((prev) =>
        prev
          .map((item) =>
            (item.id ?? item._id ?? (item.name || item.title)) === id
              ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
              : item
          )
          .filter((item) => (item.quantity || 1) > 0)
      );
    }
  };

  // ADD: Remove one product from the backend cart with offline fallback.
  const removeProduct = async (id) => {
    try {
      const response = await fetch(
        `${API_URL}/${encodeURIComponent(id)}`,
        { method: "DELETE" }
      );

      const data = await readResponse(response);
      setCart(data.cart || []);
    } catch (error) {
      console.warn("Backend unavailable, removing product locally:", error);
      setCart((prev) =>
        prev.filter(
          (item) => (item.id ?? item._id ?? (item.name || item.title)) !== id
        )
      );
    }
  };

  // ADD: Clear the entire cart with offline fallback.
  const clearCart = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "DELETE",
      });

      const data = await readResponse(response);
      setCart(data.cart || []);
    } catch (error) {
      console.warn("Backend unavailable, clearing cart locally:", error);
      setCart([]);
    }
  };

  // CHANGE: Corrected Provider opening and closing JSX tags.
  // All cart data and functions are shared with child components.
  return (
    <CartContext.Provider
      value={{
        cart,
        loadingCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeProduct,
        clearCart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  ); // CHANGE: Correctly closed return statement and component function.
};

// CHANGE: Corrected export const and arrow function syntax.
export const useCart = () => useContext(CartContext);
