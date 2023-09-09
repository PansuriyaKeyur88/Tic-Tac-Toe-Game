"use client"
import React from 'react'

const Squre = (props) => {
  return (
    <>
       <div 
       onClick={props.onClick} 
       className='square' 
       style={{
        border: '1px solid white',
        height: "100px",
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color:'yellow',
       }}
       >
        <h1>{props.value}</h1>
       </div>
    </>
  )
}

export default Squre