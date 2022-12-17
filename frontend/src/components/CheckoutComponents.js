import styled from "styled-components"
import { colors } from "../data/database"


export const CheckoutHeader = styled.div`
   display: flex;
   flex-direction: row ;
   align-items: center;
   width: 100vw;
   height: 10vh;
   border-bottom: 1px solid ${colors.grey};

   > h3 {
      margin: 0.5rem 0;
      width: 25%;
      text-align:center ;
   }
`

export const CheckoutItem = styled.div`
   display: flex;
   flex-direction: row ;
   align-items: center;
   width: 100vw;
   height: 10vh;
   color: ${colors.navy};

   > p {
      width: 25%;
      text-align:center ;
   }
`