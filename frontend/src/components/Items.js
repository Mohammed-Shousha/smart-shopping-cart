import React from 'react';
import styled from "styled-components";
import { items, predictions } from '../database.js'

const ItemsContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
`

const Item = styled.div`
   position: relative;
   display: flex;
   justify-content: flex-start;
   width: 60%;
   height: 10%;
   background: white;
   color: black;
   border: 1px solid grey;
   padding: 1% ;
   border-radius: 0.5rem;
   margin: 0.5em 0;
   padding: 0;

   > div {
      width:100%;
      display: flex;
      flex-direction:column ;
      justify-content: flex-start;
   }
`

const Img = styled.img`
   border-radius: 0.5rem 0 0 0.5rem; 
   width: 25%;
   margin-right: 5px;
`

const Details = styled.div`
   display: flex ;
   justify-content: space-around;
`

const Line = styled.hr`
   width: 65%;
   border: 2px solid black;
`

const Items = ({ results }) => {

   // results = ["qty name", ...]

   results = results.map(result => [result.split(" ")[1], result.split(" ")[0]]) // [["name", "qty"], ...]

   results = results.map(result => [predictions.indexOf(result[0]), result[1]]) // [[index, "qty"], ...]

   items.map(item => results.map(result => item.id === result[0] ? item.qty = result[1] : null)) // update qty

   const filteredItems = items.filter(item => results.map(result => result[0]).includes(item.id)) // filter items

   const totalPrice = filteredItems.reduce((total, item) => total + (item.price * item.qty), 0)

   return (
      <ItemsContainer>
         {filteredItems.map(item => (
            <Item key={item.id} item={item}>
               <Img src={item.img} alt="item image" />
               <div>
                  <h1>{item.name}</h1>
                  <Details>
                     <h2>{item.price} EGP</h2>
                     <h2>x {item.qty}</h2>
                  </Details>
               </div>
            </Item>
         ))}
         <Line/>
         <h1>Total : {totalPrice} EGP</h1>
      </ItemsContainer>
   )
}

export default Items;