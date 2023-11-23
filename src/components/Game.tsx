import { useState } from 'react';
import Board from './Board';
import { SquareState } from './Square';

type Step = {
    squares: SquareState[];
    xIsNext: boolean;
}

type GameState = {
    readonly history: Step[];
    readonly stepNumber: number;
}

export default function Game() {
    const [state, setState] = useState<GameState>({
        history: [
            {
                squares: Array<SquareState>(9).fill(null),
                xIsNext: true
            }
        ],
        stepNumber: 0
    });
    const current = state.history[state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status: string;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = 'Next player: ' + (current.xIsNext ? 'X' : 'O')
    }

    function handleClick(i: number) {
        if (current.squares[i] || winner) {
            return;
        }

        const nextSquares = current.squares.slice();
        if (current.xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }

        setState(({ history, stepNumber }) => {
            const newHistory = history.slice(0, stepNumber + 1).concat({
                squares: nextSquares,
                xIsNext: !current.xIsNext
            });

            return ({
                history: newHistory,
                stepNumber: newHistory.length - 1
            });
        });
    }

    function jumpTo(i: number): void {
        setState((prevState) => ({
            ...prevState,
            stepNumber: i
        }));
    }

    const moves = state.history.map((squares, moveTo) => {
        let description: string;
        if (moveTo > 0) {
            description = "Go to move #" + moveTo;
        } else {
            description = "Go to game start";
        }
        
        return (
            <li key={moveTo}>
                <button onClick={() => jumpTo(moveTo)}>{description}</button>
            </li>
        );
    });

    return (
        <div className='game' >
            <div className='status'>{status}</div>
            <Board squares={current.squares} onClick={handleClick} />
            <div className='game-info'>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

function calculateWinner(squares: SquareState[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }