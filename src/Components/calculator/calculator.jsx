import React, { useState } from "react";
import './calculator.css'

function Calculator() {
    const [firstNumber, setfirstNumber] = useState("")
    const [secondNumber, setsecondNumber] = useState("")
    const [result, setresult] = useState(0)
    const [operation, setoperation] = useState("")
    const [activeInput, setActiveInput] = useState('firstNumber')

    function addition() {
        setoperation("+")
    }
    function minus() {
        setoperation("-")

    };
    function multiplication() {
        setoperation("*")

    };
    function divide() {
        setoperation("/")

    };

    function onClickOperator(event) {
        if (event.target.id == '=') {
            operator()
        } else {
            setresult(0)
            setoperation(event.target.id);
            if (activeInput == 'firstNumber') {
                setActiveInput('secondNumber')
            }
        }

    }

    function onClickInput(event) {
        setActiveInput(event.target.id)
    }

    function operator() {
        if (operation == "+") {
            setresult(Number(firstNumber) + Number(secondNumber))
        }
        else if (operation == "-") {
            setresult(Number(firstNumber) - Number(secondNumber))
        }
        else if (operation == "*") {
            setresult(Number(firstNumber) * Number(secondNumber))
        }
        else {
            setresult("0")
        }
    };

    const onClickNumber = (event) => {
        if (activeInput == 'firstNumber') {
            setfirstNumber(firstNumber + event.target.id)
        } else if (activeInput == 'secondNumber') {
            setsecondNumber(secondNumber + event.target.id)
        }
    }


    // var a = document.getElementById("firstNumber").value;
    // var b = document.getElementById("secondNumber").value;
    // var result = Number(firstNumber) + Number(secondNumber);

    return (
        <div className="main-container">
            <div className="blur"></div>
            <div className="input-container" >
                <input placeholder="0" className={`${activeInput == 'firstNumber' && 'active'}`} onClick={onClickInput} name="firstNumber" type="number" id="firstNumber" value={firstNumber} onChange={(event) => setfirstNumber(event.target.value)} />
                <div className="arithmetic-char">{operation}</div>
                <input placeholder="0" className={`${activeInput == 'secondNumber' && 'active'}`} onClick={onClickInput} name="secondNumber" type="number" id="secondNumber" value={secondNumber} onChange={(event) => setsecondNumber(event.target.value)} />
                <div className="result-div">= {result}</div>
            </div>
            <div className="sub-container">
                <div className="btn-container">
                    <div className="arithmetic-btn">Ac</div>
                    <div className="arithmetic-btn">%</div>
                    <div className="arithmetic-btn">/</div>
                    <div className="numeric-btn" onClick={onClickNumber} id="9">9</div>
                    <div className="numeric-btn" onClick={onClickNumber} id="8">8</div>
                    <div className="numeric-btn" onClick={onClickNumber} id="7">7</div>
                    <div className="numeric-btn" onClick={onClickNumber} id="6">6</div>
                    <div className="numeric-btn" onClick={onClickNumber} id="5">5</div>
                    <div className="numeric-btn" onClick={onClickNumber} id="4">4</div>
                    <div className="numeric-btn" onClick={onClickNumber} id="3">3</div>
                    <div className="numeric-btn" onClick={onClickNumber} id="2">2</div>
                    <div className="numeric-btn" onClick={onClickNumber} id="1">1</div>
                    <div className="numeric-btn" onClick={onClickNumber} id="0">0</div>
                </div>
                <div className="btn-container2">
                    <div className="arithmetic-btn" id="*" onClick={onClickOperator}>*</div>
                    <div className="arithmetic-btn" id="-" onClick={onClickOperator}>-</div>
                    <div className="arithmetic-btn" id="+" onClick={onClickOperator}>+</div>
                    <div className="arithmetic-btn" id="=" onClick={onClickOperator}>=</div>
                </div>
            </div>

            {/* <button >Get Addition</button> */}
            {/* <div className="arithmetic-btn" onClick={() => setresult(Number(firstNumber) + Number(secondNumber))}>=</div> */}

            {/* <div id="result-div">Addition = {Number(firstNumber) + Number(secondNumber)}</div> */}
            {/* <div>firstNumber = {firstNumber}</div>
            <div>operation = {operation}</div>
            <div>secondNumber = {secondNumber}</div> */}
        </div >
    );
}

export default Calculator;
