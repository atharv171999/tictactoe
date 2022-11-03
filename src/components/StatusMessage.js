import React from 'react'

const StatusMessage = ({winner, current}) => {
    // const messages = winner
    // ? `Winner is ${winner}`
    // : `Next player is ${current.isXNext ? "O" : "X"}`;

    const noMovesLeft = current.board.every((el)=> el !== null)
  return (
    <div className='status-message'>
        {winner && (
        <> 
        winner is{' '} 
        <span className={winner === 'O' ? 'text-green' : 'text-orange'}>
          {winner}
          </span> 
          </>
          )}
        {!winner && !noMovesLeft && (
        <>
        Next player is{' '} 
        <span className={current.isXNext ? 'text-green' : 'text-orange'}>
          {current.isXNext ? "O" : "X"}{' '}
          </span>
        </>
        )} 
        {!winner && noMovesLeft && (
        <>
        <span className='text-green'>O</span> and{' '} 
        <span className='text-orange'>X</span> tied 
        </>)}
        </div>
  )
}

export default StatusMessage;