import React, { useState } from 'react'
import styled from 'styled-components';
const Roll_dice = ({currentDice,roleDice}) => {
  
  

  return (
    <DiceSelector>
    <div className='dice' onClick={roleDice}>
        
        <img src={`./dice_${currentDice}.png`} alt="Dice-1" />
    </div>
    <p>click on the Dice to roll</p>
    </DiceSelector>
  )
}

export default Roll_dice;
const DiceSelector=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:48px;
.dice{
  cursor:pointer;
}
p{
  font-size:24px;
}
`