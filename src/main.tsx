import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app_calculator/App.tsx'
import './reset.css'
import './fonts.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
