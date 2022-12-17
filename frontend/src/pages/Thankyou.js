import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CenterContainer } from '../components/Containers'
import { Header } from '../components/Header'


const Thankyou = () => {

   const navigate = useNavigate()

   useEffect(() => {
      setTimeout(() => {
         navigate('/')
      }, 15000)
   }, [])

   return (
      <>
      <Header>
         <h1>THANK YOU</h1>
      </Header>
      <CenterContainer>
         <h1>Thank you for shopping with us.</h1>
         <h1>Hope to see you again.</h1>
      </CenterContainer>
      </>
   )
}

export default Thankyou