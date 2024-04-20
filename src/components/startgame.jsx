
import styled from 'styled-components'
import { Button } from '../styled/Button';
const StartGame = ( {toggle}) => {
  return (
    <Container>
        <div>
        <img src="/dices.png" alt="Dice" /></div>
        <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play now</Button></div>
    </Container>
  )
}

export default StartGame;
const Container =styled.div`
max-width : 1180px;
display:flex;
height:100vh;
align-items:center;
margin:0 auto;
.content h1{
    font-Size:96px;
    white-space:nowrap;
}`; 
