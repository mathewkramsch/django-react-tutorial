/* App.js */

import React, { useState } from 'react'
import Calc from './Calc';
import Quote from './Quote';
import './App.css'

export default function App() {
	const [viewCalc, setViewCalc] = useState(true);
	const changeView = ()=>{ setViewCalc(!viewCalc) }

	return (
		<div className='mainContainer'>
			<h1>Calculator/Quote Application Tutorial/Practice</h1>
			<p>
				Click to toggle between Calculator or Quote Application
				<button onClick={changeView}>Toggle App</button>
			</p>
			{ viewCalc? <Calc/> : <Quote/> }
		</div>
	);
}
