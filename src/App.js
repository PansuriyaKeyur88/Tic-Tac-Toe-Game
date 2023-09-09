import React from 'react'
import Board from './Tic-tack-game/Board'
import './App.css'

const App = () => {
  return (
    <>
    <div>
      <h1 style={{
        color:'white',
        textAlign:'center',
        fontSize:'3rem',
        letterSpacing:'8px'
      }} >Tic - Tac - Toe</h1>
    </div>
    <div>
      <Board />
    </div>
    </>
  )
}

export default App