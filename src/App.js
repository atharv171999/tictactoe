import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculatorWinner } from "./components/helpers";
import "./Styles/root.scss";
// import Square from './components/Square'

const NEW_GAME = [
  {board: Array(9).fill(null), isXNext: false}
]

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];


  const {winner, winningSquare} = calculatorWinner(current.board);

  // const messages = winner
  //   ? `Winner is ${winner}`
  //   : `Next player is ${current.isXNext ? "O" : "X"}`;
  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory((prev) => {
      const last = prev[prev.length -1];


      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "O" : "X";
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext})
    });
    
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);

  }
   const onNewGame = () => {
setHistory(NEW_GAME)
setCurrentMove(0)
   }

  return (
    <>
      <div className="app">
        <h1>TIC <span className="text-green">TAC</span> TOE </h1>
        <StatusMessage winner={winner} current={current}/>
        <Board board={current.board} handleSquareClick={handleSquareClick} winningSquare={winningSquare} />
        <button type="button" onClick={onNewGame} className={`btn-reset ${winner ? 'active' : ' '}`}>
          Start new game
          </button>
          <h2 style={{fontWeight: 'normal'}}>Current game history</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove}/>
        <div className="bg-balls"></div>
      </div>
    </>
  );
};

export default App;