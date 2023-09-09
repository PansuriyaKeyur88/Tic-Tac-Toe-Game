"use client"
import React, { useState } from 'react'
import Squre from './Squre'

const Board = () => {

  const [State, setState] = useState(Array(9).fill(null))

  const [isXTurn, setisXTurn] = useState('X')

  const mouseclick = (index) => {

    if(State[index]!==null){
      return;
    }
    
    const copystate = [...State];
    copystate[index] = isXTurn;
    setState(copystate);
    if(isXTurn === 'X'){
      setisXTurn('O')
    }
    else{
      setisXTurn('X')
    }

  }

  const checkwinner =()=>{

    const winnerlogic =[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let logic of winnerlogic)
    {
      const [a,b,c] =logic;
      
      if(State[a]!=null && State[a] === State[b] && State[b] === State[c])
      {
        return State[a];
      }
    }
    return false;

  };

  // Winner Print //

  const isWinner = checkwinner();


  // Restart game //

  const restart = ()=>{
    setState(Array(9).fill(null))
  }


  return (
    <>
      <div className='board-container'>
      <div>
          <h1
          style={{
            color:'white',
            margin:'2rem',
            textAlign:'center',
          }} >Winner <br/> {isWinner}</h1>
        </div> 
        <div className='board-row'>
          <Squre onClick={() => mouseclick(0)} value={State[0]} />
          <Squre onClick={() => mouseclick(1)} value={State[1]} />
          <Squre onClick={() => mouseclick(2)} value={State[2]} />
        </div>
        <div className='board-row'>
          <Squre onClick={() => mouseclick(3)} value={State[3]} />
          <Squre onClick={() => mouseclick(4)} value={State[4]} />
          <Squre onClick={() => mouseclick(5)} value={State[5]} />
        </div>
        <div className='board-row'>
          <Squre onClick={() => mouseclick(6)} value={State[6]} />
          <Squre onClick={() => mouseclick(7)} value={State[7]} />
          <Squre onClick={() => mouseclick(8)} value={State[8]} />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <button className='restart' onClick={restart} >Restart </button>
        </div>
      </div>
    </>
  )
}

export default Board