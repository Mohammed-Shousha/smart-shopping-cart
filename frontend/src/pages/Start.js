import React from 'react';
import styled from "styled-components";
import colors from '../theme/Theme.js'


const Header = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
   height: 20vh;
   background: ${colors.grey};
   color: ${colors.background};

   > h1 {
      font-size: 2rem;
      margin: 2% ;
      text-shadow: 1px 2px black;
   }
`

const ButtonContainer = styled.div`
   display: flex;
   flex-direction:column ;
   background: ${colors.background};
   width:100vw;
   height:80vh;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`

const StartButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 45vw;
   padding: 5%;
   background: ${colors.red};
   color: ${colors.background};
   border-radius: 5rem;
   border: 0;
   box-shadow: 5px 5px 5px grey;
   
   > h1 {
      margin: 0;
      font-size: 2rem;
   }
`

const Start = () => {
   return (
      <>
         <Header>
            <h1>SMART CART</h1>
         </Header>
         <ButtonContainer>
            <StartButton>
               <h1>Start Shopping</h1>
            </StartButton>
         </ButtonContainer>

      </>
   );
}  

export default Start;