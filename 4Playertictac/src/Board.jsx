import Square from "./Square"
import './Board.css';
import { useState } from "react";
import { calculateWinner } from './utils.js';

export default function Board() {


    const [squares, setSquares] = useState(new Array(16).fill(null))
    const [xIsNext, setXIsNext] = useState(true);


    function changeValue(index) {

        if (squares[index] || calculateWinner(squares)) {
            return; //no need to change if it is non empty or winner is calculated
        }

        setSquares((prevSquares) => {
            const arr = [...prevSquares];


            xIsNext ? arr[index] = "X" : arr[index] = "O";
            setXIsNext(!xIsNext);
            return arr;
        })


    }

    //status section
    const winner = calculateWinner(squares);

    //reset the game
    function resetGame() {
        setSquares(new Array(16).fill(null));
        setXIsNext(true);
    }





    return (
        <>
            {winner ? <h1 style={{ color: "green" }}>Winner: {winner} </h1> : <h3>Next Player is: {xIsNext ? "X" : "O"} </h3>}
            <div className="Board">

                {squares.map((square, i) => <Square num={i} value={square} clicFunc={changeValue} />)}

            </div>

            <button style={{ backgroundColor: "white", color: "black", margin: "auto", transition: "none", border: "2px solid darkslategray", width: "100px" }} onClick={resetGame}>Reset</button>


        </>
    )
}