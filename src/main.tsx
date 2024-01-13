import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './Apps/App_calculator/Calculator.tsx'
import './reset.css'
import './fonts.css'

console.log('test')
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Calculator />
	</React.StrictMode>
)
