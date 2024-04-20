import React,{useState} from 'react';
import Roll_dice from './Roll_dice';
import TotalScore from './totalScore';
import Selector from './Selector';
import styled from 'styled-components';
import { Button } from '../styled/Button';
import Rules from './rules';





const GamePlay = () => {
  const [score, setScore]=useState(0);
  const[error, setError]=useState("");
  const[Select_num,setSelect_num]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const[showRule,setShowRule]=useState(false);
  const generaterandom= (min,max)=>{
  return Math.floor(Math.random() *(max-min)+min);
  }
  const roleDice=()=>{
    if(!Select_num){
      setError("You have not Selected any number");
      return;}
      
  const randomNumber=generaterandom(1,7);
  setCurrentDice((prev)=>randomNumber);
  
  if(Select_num===randomNumber){
   setScore((prev)=>prev+randomNumber);
  }
  else{
    setScore((prev)=>prev-2);
  }
  setSelect_num=undefined;
  }
  const resetScore=()=>{
setScore(0);
  }
  return (
    <MainContainer>
      <div className='top_sec'>
      <TotalScore score={score}
      setScore={setScore}
      />
      <Selector error={error} 
      setError={setError}
      Select_num={Select_num} 
      setSelect_num={setSelect_num}/>
      </div>
      <Roll_dice currentDice={currentDice}
      roleDice={roleDice}

      
      />
      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={()=>setShowRule((prev)=>!prev)}> {
          showRule? "Hide ":"Show "
          } Rules</Button>

      </div>
      {showRule && <Rules/>}
    </MainContainer>)
}

export default GamePlay; 
const  MainContainer=styled.main`
padding-top:70px;
.top_sec{
  display:flex;
  justify-content:space-around;
  align-items:end; 
}
.btns{display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:10px;

}`;