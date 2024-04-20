import React, { useState } from 'react'
import styled from 'styled-components'
const Selector = ({error,setError,Select_num , setSelect_num}) => {
    const array=[1, 2,3, 4,5,6]
    
    
const num_handeler=(value)=>{
    setSelect_num(value)
setError("");
}
  return (
    <Num_selector_cont>
        <p>{error}</p>
    <div className='flex'>
{
    array.map((value,i)=>(
        <Box 
        isSelected={value===Select_num}
        key={i} onClick={() =>num_handeler(value)}>{value}</Box>
    ))
}
    </div>
    <p>Select Number</p>
    </Num_selector_cont>
  )
}

export default Selector;
const Num_selector_cont=styled.div`

display:flex;
flex-direction:column;
align-items:end;
    .flex{
        display:flex;
        gap:24px;
    }
    p{
        font-size:24px;
        font-weight:500;
    }
`;
const Box= styled.div`
height:72px;
width:72px;
border: 1px solid black;
font-size:24px;
font-weight:700;
display:grid;
place-items:center;
background-color:${(props)=>(props.isSelected ? "black":"white")};
color:${(props)=>(!props.isSelected ? "black" : "white")}
`;
