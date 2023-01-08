import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Display(props) {
	let { result } = props;
	return (
		<div className="result border text-right w-100 border-primary rounded-top" style={{ height: "12vh" }}>
			<h1>{result}</h1>
		</div>
	);
}

export default Display;
