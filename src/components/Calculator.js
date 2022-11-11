import React, { useState } from "react";


const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operator, setOperator] = useState('+');
    const[result, setResult] = useState('');

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
            <button onClick={() => {setResult('')}}>Clear</button>
            </div>
            <div>
                <input value={result}></input>
            </div>
        </div>
    )
}

export default Calculator;