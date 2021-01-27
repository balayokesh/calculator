import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Display extends Component {
	render() {
		let {result} = this.props;
		return (
			<div className = "result border text-right w-100 border-primary rounded-top" style={{height: "12vh"}}>
				<h1>{result}</h1>
			</div>
		);
	}
}

export default Display;
