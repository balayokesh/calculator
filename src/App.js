import React, {Component} from 'react';
import Display from './Components/Display';
import Keypad from './Components/Keypad';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			result: ""
		}
	}
	
	calculate = () => {
		try {
			this.setState(
				{
					result: (eval(this.state.result) || "") + ""
				}
			)
		}
		catch (e) {
			alert("Invalid syntax");
			this.setState(
				{
					result: ""
				}
			)
		}
	}

	reset = () => {
		this.setState(
			{
				result: ""
			}
		)	
	}

	backspace = () => {
		this.setState(
			{
				result: this.state.result.slice(0, -1)
			}
		)
	}

	onClick = button => {
		if (button === "C") {
			this.reset ();
		}
		else if (button === "=") {
			this.calculate ();
		}
		else if (button === "CE") {
			this.backspace ();
		}
		else {
			this.setState(
				{
					result: this.state.result += button
				}
			)
		}
	}

	render () {
	return (
		<div class="container h-100 d-flex flex-column align-items-center">
	    	<h1>Calculator</h1>
	    	<Display result = {this.state.result} />
	    	<Keypad onClick = {this.onClick} />
	  	</div>
	);
	}
}

export default App;
	