import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './Apps/Calculator/app'
import { RootStoreContext } from './Apps/Calculator/stores/rootStoreContext'
import RootStore from './Apps/Calculator/stores/rootStore'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RootStoreContext.Provider value={new RootStore()}>
			<Calculator />
		</RootStoreContext.Provider>
	</React.StrictMode>
)
