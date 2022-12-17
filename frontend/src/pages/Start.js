import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { CenterContainer } from '../components/Containers'
import { StartButton} from '../components/Buttons'


const Start = () => {

   const navigate = useNavigate()
   return (
      <>
         <Header>
            <h1>SMART CART</h1>
         </Header>

         <CenterContainer>
            <StartButton onClick={()=> navigate('/cart')}>
               <h1>Start Shopping</h1>
            </StartButton>
         </CenterContainer>

      </>
   )
}

export default Start