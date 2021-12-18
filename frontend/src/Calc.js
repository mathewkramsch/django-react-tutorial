/* Calc.js */

import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Calc() {
	const [inputNums, setInputNums] = useState([0,0]);
	const [result, setResult] = useState(0);

	const handleInput = (e) => {
		let index = 0;
		if (e.target.name==='num2') index = 1;
		let newInputNums = inputNums;
		newInputNums[index] = e.target.value;
		setInputNums(newInputNums);
	}
		
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/shit/", {
				num1: inputNums[0],
				num2: inputNums[1],
			})
			.then((response) => {
				setResult(response.data);
				setInputNums([0,0]);
			})
			.catch((err) => {});
		e.target.reset();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>number 1:</label>
					<input type='number' name='num1' onChange={handleInput}/>
				</div>
				<div>
					<label>number 2:</label>
					<input type='number' name='num2' onChange={handleInput}/>
				</div>
				<button type='submit'>Add</button>
			</form>
			<p>result: {result}</p>
		</div>
	);

}
