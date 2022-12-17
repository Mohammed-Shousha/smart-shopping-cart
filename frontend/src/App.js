import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Start from "./pages/Start"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Payment from "./pages/Payment"
import Thankyou from "./pages/Thankyou"
import { items } from "./data/database"
import "./App.css"


const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" exact element={<Start />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout items={items} />} />
            <Route path="/payment" element={<Payment items={items} />} />
            <Route path="/thankyou" element={<Thankyou />} />
         </Routes>
      </Router>
   )
}
export default App
