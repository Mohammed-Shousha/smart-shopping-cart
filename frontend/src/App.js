import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Start from "./pages/Start"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Payment from "./pages/Payment"
import Thankyou from "./pages/Thankyou"
import "./App.css"


const App = () => {

   const [cartItems, setCartItems] = useState([])
   const [totalPrice, setTotalPrice] = useState(0)

   return (
      <Router>
         <Routes>
            <Route path="/" exact element={<Start />} />
            <Route path="/cart" element={<Cart setCartItems={setCartItems} setTotalPrice={setTotalPrice}/>} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} totalPrice={totalPrice} />} />
            <Route path="/payment" element={<Payment totalPrice={totalPrice} />} />
            <Route path="/thankyou" element={<Thankyou />} />
         </Routes>
      </Router>
   )
}
export default App
