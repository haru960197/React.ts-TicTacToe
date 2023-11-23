import Square, { SquareState } from './Square';
import { render } from '@testing-library/react';

type BoardProps = {
    squares: SquareState[];
    onClick: (i: number) => void;
}

export default function Board(props: BoardProps) {
    function renderSquare(i: number) {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        )
    }
    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}