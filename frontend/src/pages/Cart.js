import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Webcam from "react-webcam"
import { Item, ItemImg } from '../components/CartComponents'
import { Button } from '../components/Buttons'
import { CamContainer, Container } from '../components/Containers'
import { Header } from '../components/Header'
import { Total } from '../components/Total'
import { Icon } from '../components/Icon'
import { items, predictions, urls, videoConstraints } from '../data/database'
import emptyCart from '../data/cart.svg'


const Cart = () => {

   const webcamRef = useRef(null)
   const ws = useRef(null)

   const [capturedImg, setCapturedImg] = useState(null)
   const [prediction, setPrediction] = useState([])
   const [isPaused, setPause] = useState(false)

   const navigate = useNavigate()

   // prediction = ["qty name", ...]

   let newResults = prediction.map(result => [result.split(" ")[1], result.split(" ")[0]]) // [["name", "qty"], ...]

   newResults = newResults.map(result => [predictions.indexOf(result[0]), result[1]]) // [[index, "qty"], ...]

   items.map(item => newResults.map(result => item.id === result[0] ? item.qty = result[1] : 0)) // update qty

   const filteredItems = items.filter(item => item.qty > 0) // filter items

   const totalPrice = filteredItems.reduce((total, item) => total + (item.price * item.qty), 0)


   useEffect(() => {
      const client_id = Date.now()
      const url = `${urls.WS_SERVER}/${client_id}`
      console.log(url)
      ws.current = new WebSocket(url)
      ws.current.onopen = () => console.log("ws opened")
      ws.current.onclose = () => console.log("ws closed")

      return () => {
         ws.current.close()
      }
   }, [])

   useEffect(() => {
      if (!ws.current) return

      ws.current.onmessage = (event) => {
         if (isPaused) return
         const message = JSON.parse(event.data)
         setCapturedImg(message.output)
         setPrediction(eval(message.prediction))
         console.log(message)
      }

      setInterval(() => {
         capture()
      }, 10000)

   }, [isPaused])

   const sendMessage = (msg) => {
      if (!ws.current) return

      ws.current.send(msg)
   }

   const capture = () => {
      if (!webcamRef.current) return
      const capturedImg = webcamRef.current.getScreenshot()
      sendMessage(capturedImg)
   }

   return (
      <>
         <Header>
            <h1>CART</h1>
         </Header>

         <Container>
            {filteredItems.length === 0 ?
               <>
                  <Icon src={emptyCart} alt="empty cart" />
                  <h1>Your Cart Is Empty</h1>
               </>
               : <>
                  {filteredItems.map(item => (
                     <Item key={item.id} item={item}>
                        <ItemImg src={item.img} alt="item image" />
                        <div>
                           <h3>{item.name}</h3>
                           <h4>x {item.qty}</h4>
                           <h4>{item.price} EGP</h4>
                        </div>
                     </Item>
                  ))}

                  <Total>
                     <h1>Total</h1>
                     <h1>{totalPrice} EGP</h1>
                  </Total>

                  <Button onClick={() => navigate('/checkout')}>
                     <h1> Checkout </h1>
                  </Button>
               </>}
         </Container>

         <CamContainer>
            <Webcam
               audio={false}
               ref={webcamRef}
               screenshotFormat="image/jpeg"
               width="50%"
               videoConstraints={videoConstraints}
            />
            {capturedImg && (
               <img alt="Captured image" src={capturedImg} width="50%" />
            )}
         </CamContainer>
      </>
   )
}

export default Cart