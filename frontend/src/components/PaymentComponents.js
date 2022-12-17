import styled from "styled-components"
import { colors } from "../data/database"

export const PaymentContainer = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 90vw;

   > div {
      border: 1px solid ${colors.grey};
      border-radius: 0.5rem;
      padding: 1rem;
      margin: 20vh 0 15vh;
      width:100%;
   }
`

export const cardStyle = {
   hidePostalCode: true,
   style: {
      base: {
         color: colors.navy,
         fontFamily: 'Courier, monospace',
         fontSmoothing: "antialiased",
         fontSize: '25px',
         "::placeholder": {
            color: colors.lightNavy
         }
      },
      invalid: {
         color: colors.red,
         iconColor: colors.red
      }
   }
}
