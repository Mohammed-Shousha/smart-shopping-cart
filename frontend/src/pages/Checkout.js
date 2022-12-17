import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Total } from '../components/Total'
import { CheckoutHeader, CheckoutItem } from '../components/CheckoutComponents'
import { Button } from '../components/Buttons'
import { Header } from '../components/Header'
import { CheckoutContainer } from '../components/Containers'


const Checkout = ({ items }) => {

   const navigate = useNavigate()

   items = items.filter(item => item.qty > 0)
   const totalPrice = items.reduce((total, item) => total + (item.price * item.qty), 0)

   return (
      <>
         <Header>
            <h1>CHECKOUT</h1>
         </Header>

         <CheckoutContainer>

            <CheckoutHeader>
               <h3>Name</h3>
               <h3>Price</h3>
               <h3>Qty</h3>
               <h3>Total</h3>
            </CheckoutHeader>

            {items.map(item => (
               <CheckoutItem key={item.id}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{item.qty}</p>
                  <p>{item.price * item.qty}</p>
               </CheckoutItem>
            ))}

            <Total checkout>
               <h1>Total</h1>
               <h1>{totalPrice} EGP</h1>
            </Total>

            <Button onClick={()=> navigate('/payment')}>
               <h1>Next</h1>
            </Button>

         </CheckoutContainer>
      </>
   )
}

export default Checkout