import styled from "styled-components"
import { colors } from "../data/database"

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width:100vw;
   color: ${colors.navy};
`

export const CenterContainer = styled(Container)`
   height:80vh;
`

export const CheckoutContainer = styled(Container)`
   justify-content: space-evenly;
`

export const CamContainer = styled(Container)`
   visibility: hidden;
   position: absolute;
   top: 0;
   left: 0;
`