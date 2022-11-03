import React from 'react'


export const Square = ({value, onClick, isWinningSquare}) => {
  return (
    <button type="button" 
    onClick={onClick}
    className={`square ${isWinningSquare ? 'winning' : ' '}
    ${value === 'O' ? 'text-green' : 'text-orange'}`}
    
    >
      {value}
      </button>

  )
}


export default Square;