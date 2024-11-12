import {useState} from 'react';

function Square({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({current, onClick}) {
    // function calculateWinner(squares) {
    //     const lines = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6],
    //     ]
    //     for (let i = 0; i < lines.length; i++) {
    //         const [a, b, c] = lines[i];
    //         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //             return squares[a]
    //         }
    //     }
    //     return null
    // }

    function handleClick(i) {
        if (current[i]) {
            return;
        }
        onClick(i)
    }

    return (
        <>
            <div className="board-row">
                <Square value={current[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={current[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={current[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={current[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={current[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={current[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={current[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={current[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={current[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    );
}

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function click(i) {
        console.log(i)
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board current={currentSquares} onClick={click}/>
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}

//        const newSquares = squares.slice();
//         if (xIsNext) {
//             newSquares[i] = 'X';
//         } else {
//             newSquares[i] = 'O';
//         }
//         setSquares(newSquares);
//         setXIsNext(!xIsNext);
//         const newWinner = calculateWinner(newSquares);
//         if (newWinner) {
//             setWinner(newWinner)
//         }