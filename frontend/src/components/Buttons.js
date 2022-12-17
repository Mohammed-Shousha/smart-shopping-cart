import styled from "styled-components"
import { colors } from "../data/database"


export const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 45vw;
   padding: 2%;
   margin: 5vh 0;
   background: ${colors.red};
   color: ${colors.background};
   border-radius: 5rem;
   border: 0;
   box-shadow: 5px 5px 5px grey;
   cursor: pointer;

   > h1 {
      margin: 0;
   }
`

export const StartButton = styled(Button)`
   padding: 5%;
   
   > h1 {
      font-size: 2rem;
   }
`