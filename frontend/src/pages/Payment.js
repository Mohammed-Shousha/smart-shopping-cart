import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { Button } from '../components/Buttons'
import { Container } from '../components/Containers'
import { cardStyle, PaymentContainer } from '../components/PaymentComponents'
import { urls } from '../data/database'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API)

const Payment = ({ items }) => {

   const totalPrice = items.reduce((total, item) => total + (item.price * item.qty), 0) * 100

   return (
      <>
         <Header>
            <h1>PAYMENT</h1>
         </Header>
         <Container>
            <Elements stripe={stripePromise}>
               <PaymentForm total={totalPrice} />
            </Elements>
         </Container>
      </>
   )
}

const PaymentForm = ({ total }) => {

   const stripe = useStripe()
   const elements = useElements()

   const navigate = useNavigate()

   const [succeeded, setSucceeded] = useState(false)
   const [error, setError] = useState(null)
   const [processing, setProcessing] = useState('')
   const [clientSecret, setClientSecret] = useState('')

   const handleSubmit = async (e) => {
      e.preventDefault()
      setProcessing(true)

      const payload = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: elements.getElement(CardElement)
         }
      })

      if (payload.error) {
         setError(`Payment failed ${payload.error.message}`)
         setTimeout(() => { 
            setError(null) 
         }, 3000)
         setProcessing(false)
      } else {
         setError(null)
         setProcessing(false)
         setSucceeded(true)
         navigate('/thankyou')
      }

   }

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch(urls.PAYMENT, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ total }),
         });
         const data = await response.json()
         setClientSecret(data.clientSecret)
         return data
      }
      fetchData()
   }, [])

   return (
      <PaymentContainer onSubmit={handleSubmit}>
         <div>
            <CardElement options={cardStyle} />
            {error && <p>{error}</p>}
         </div>
         <Button type='submit' disabled={processing || succeeded}>
            <h1>Pay</h1>
         </Button>
      </PaymentContainer>

   )
}

export default Payment