
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Categories from "./pages/Categories";
// import Deals from "./pages/Deals";
// import { CartProvider } from "./context/CartContext";
// import Cart from "./components/Cart";
// import Payment from "./pages/Payment";
// import Search from "./components/Search";
// import Offers from "./pages/offers";

// function App() {
//   return (
//     <BrowserRouter>

//       <CartProvider>

//       <div className="min-h-screen bg-white">

//         <Navbar />

//         <main>
//           <Routes>

//             <Route path="/" element={<Home />} />

//             <Route path="/" element={<Payment />} />

//             <Route path="/shop" element={<Shop />} />

//             <Route path="/categories" element={<Categories />} />

//             <Route path="/deals" element={<Deals />} />

//             <Route path="/cart" element={<Cart />}/>

//             <Route path="/payment" element={<Payment/>}/>

//             <Route path="/search" element={<Search/>}/>

//             <Route path="/offers" element={<Offers/>}/>

//           </Routes>
//         </main>

//       </div>

//     </CartProvider>
    
//     </BrowserRouter>
//   );
// }

// export default App;

// {/*MY PRACTICE */}
// // import { Routes, Route } from "react-router-dom";

// // import File1 from "./practice/file1.jsx";
// // import File2 from "./practice/file2.jsx";

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<File1 />} />
// //       <Route path="/tool/:id" element={<File2 />} />
// //     </Routes>
// //   );
// // }

// // export default App;

// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Sample1 from "./pages/sample1.jsx";
// // import Sample2 from "./pages/sample2.jsx";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Sample1 />} />
// //         <Route path="/product/:name" element={<Sample2 />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// // import { BrowserRouter } from "react-router-dom";
// // import MP_nav from "./components/MP_nav";
// // import MP_HeroSection from "./pages/MP_HeroSection";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <MP_nav />
// //       <MP_HeroSection/>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import Deals from "./pages/Deals";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Payment from "./pages/Payment";
import Search from "./components/Search";
import Offers from "./pages/offers";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-white">

          <Navbar />

          <main>
            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/shop" element={<Shop />} />

              <Route path="/categories" element={<Categories />} />

              <Route path="/deals" element={<Deals />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/payment" element={<Payment />} />

              <Route path="/search" element={<Search />} />

              <Route path="/offers" element={<Offers />} />

            </Routes>
          </main>

        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;