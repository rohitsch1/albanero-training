import React, { useState } from 'react';
import './App.scss';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('red');
  const [winner, setWinner] = useState(null);
  const [round, setRound] = useState(1);
  const [isreset ,setreset] =useState(false)

  function handleClick(index) {
    if (board[index] === null && winner === null) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setreset(false)


      
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
          setWinner(player);
          setRound(round + 1);
          return;
        }
      }
      if (!newBoard.includes(null)) {
        setWinner('Tie');
        setRound(round + 1);
        return;
      }

      setPlayer(player === 'red' ? 'blue' : 'red');
    }
  }
  console.log(board);

  function resetBoard() {
    setBoard(Array(9).fill(null));
    setPlayer('red');
    setWinner(null);
    setreset(true)
  }

  function renderCell(index) {
    return (
      <div className="cell" style={isreset ?{backgroundColor:'white'}:{backgroundColor:`${board[index]}`}}  onClick={() => handleClick(index)}>
        {/* {board[index]} */}
      </div>
    );
  }

  function renderBoard() {
    return (
      <div className="board">
        <div className="row">
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
        </div>
        <div className="row">
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
        </div>
        <div className="row">
          {renderCell(6)}
          {renderCell(7)}
          {renderCell(8)}
        </div>
      </div>
    );
  }

  function renderStatus() {
    if (winner) {
      if (winner === 'Tie') {
        return <div className="status">Tie game in round {round}!</div>;
      } else {
        return <div className="status">{winner} wins round {round}!</div>;
      }
    } else {
      return <div className="status">Next player: {player}</div>;
    }
  }

  return (
    <div className="app">
      <h1>Game</h1>
      {renderBoard()}
      {renderStatus()}
      <button onClick={resetBoard}>Reset</button>
    </div>
  );
}

export default App;

