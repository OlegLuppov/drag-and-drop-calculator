import './styles/style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { RootStoreContext } from './app/store/rootStoreContext'
import RootStore from './app/store/rootStore'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RootStoreContext.Provider value={new RootStore()}>
			<App />
		</RootStoreContext.Provider>
	</React.StrictMode>
)
