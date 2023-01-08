import React, { useState } from 'react';
import Display from './Components/Display';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
	const [result, setResult] = useState("");

	const calculate = () => {
		try {
			let res = (eval(result) || "") + "";
			setResult(res);
		}
		catch (e) {
			alert("Invalid syntax");
			setResult("");
		}
	}

	const reset = () => {
		setResult("");
	}

	const backspace = () => {
		setResult(result.slice(0, -1))
	}

	const handleClick = button => {
		if (button === "C") {
			reset();
		}
		else if (button === "=") {
			calculate();
		}
		else if (button === "CE") {
			backspace();
		}
		else {
			let res = result + button;
			setResult(res);
		}
	}

	return (
		<div className="container h-100 d-flex flex-column align-items-center">
			<h1>Calculator</h1>
			<Display result={result} />

			<div id="keypad" className="w-100">
				<button name="(" onClick={e => handleClick(e.target.name)}>(</button>
				<button name=")" onClick={e => handleClick(e.target.name)}>)</button>
				<button name="." onClick={e => handleClick(e.target.name)}>.</button>
				<button name="CE" onClick={e => handleClick(e.target.name)}>CE</button>

				<button name="9" onClick={e => handleClick(e.target.name)}>9</button>
				<button name="8" onClick={e => handleClick(e.target.name)}>8</button>
				<button name="7" onClick={e => handleClick(e.target.name)}>7</button>
				<button name="*" onClick={e => handleClick(e.target.name)}>x</button>

				<button name="6" onClick={e => handleClick(e.target.name)}>6</button>
				<button name="5" onClick={e => handleClick(e.target.name)}>5</button>
				<button name="4" onClick={e => handleClick(e.target.name)}>4</button>
				<button name="-" onClick={e => handleClick(e.target.name)}>-</button>

				<button name="3" onClick={e => handleClick(e.target.name)}>3</button>
				<button name="2" onClick={e => handleClick(e.target.name)}>2</button>
				<button name="1" onClick={e => handleClick(e.target.name)}>1</button>
				<button name="+" onClick={e => handleClick(e.target.name)}>+</button>

				<button name="C" onClick={e => handleClick(e.target.name)}>C</button	>
				<button name="0" onClick={e => handleClick(e.target.name)}>0</button>
				<button name="/" onClick={e => handleClick(e.target.name)}>%</button>
				<button name="=" onClick={e => handleClick(e.target.name)}>=</button>
			</div>
		</div>
	);
}

export default App;
