import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './Calculator/App'
import { RootStoreContext } from './Calculator/store/rootStoreContext'
import RootStore from './Calculator/store/rootStore'
import './styles/reset.css'
import './styles/fonts.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RootStoreContext.Provider value={new RootStore()}>
			<Calculator />
		</RootStoreContext.Provider>
	</React.StrictMode>
)
