import React, { useState } from "react";


const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [operator, setOperator] = useState('+');
    const[result, setResult] = useState(0);

    const Calculate = () => {


        if(operator === '+')
        {
            setResult(parseInt(firstNumber) + parseInt(secondNumber));
        }
        else if(operator === '-')
        {
            setResult(parseInt(firstNumber) - parseInt(secondNumber));
        }
        else if(operator === 'X')
        {
            setResult(parseInt(firstNumber) * parseInt(secondNumber));
        }
        else if(operator === '/')
        {
            setResult(parseInt(firstNumber) / parseInt(secondNumber));
        }
        
    }

    return (
        <div>
            <input onChange={(e) => {
                setFirstNumber(e.target.value);
            }} value={firstNumber} type="text" />
            <input onChange={(e) => {
                setSecondNumber(e.target.value);
            }} value={secondNumber} type="text" />
                <div>
            <select onChange={(e) => {setOperator(e.target.value)}}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="X">X</option>
                <option value="/">/</option>
            </select>
            </div>
            <div>
            <button onClick={Calculate}>Calculate</button>
            </div>
            <div>
                <input value={result}></input>
            </div>
        </div>
    )
}

export default Calculator;