import styled from "styled-components"
import { colors } from "../data/database"


export const Item = styled.div`
   position: relative;
   display: flex;
   justify-content: flex-start;
   width: 60vw;
   height: 25vh;
   background: white;
   color: ${colors.blue};
   border: 1px solid ${colors.grey};
   border-radius: 0.5rem;
   margin: 0.5em 0;

   > div {
      width: 100%;
      display: flex;
      flex-direction: row ;
      justify-content: space-between;
      align-items: center;
   }

   h3 {
      width: 30%;
   }

   h4{
      width: 30%;
   }
`

export const ItemImg = styled.img`
   border-radius: 0.5rem 0 0 0.5rem; 
   width: 25%;
   margin-right: 5px;
   border-right: 1px solid ${colors.grey} ;
`




