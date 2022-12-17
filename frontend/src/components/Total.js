import styled from "styled-components"
import { colors } from "../data/database"

export const Total = styled.div`
   display: flex;
   justify-content: ${props => props.checkout ? 'space-around' : 'space-between'};
   align-items: center;
   width: ${props => props.checkout ? '100vw' : '60vw'};
   height: 15vh;
   border-top: 2px ${props => props.checkout? 'dashed' : 'solid'} ${colors.navy};
   margin: 0.5em 0;
`