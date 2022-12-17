import styled from "styled-components"
import { colors } from "../data/database"

export const Header = styled.div`
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
      text-shadow: 3px 2px black;
   }
`