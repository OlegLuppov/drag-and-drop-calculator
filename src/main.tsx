import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './Calculator/app'
import { RootStoreContext } from './Calculator/stores/rootStoreContext'
import RootStore from './Calculator/stores/rootStore'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RootStoreContext.Provider value={new RootStore()}>
			<Calculator />
		</RootStoreContext.Provider>
	</React.StrictMode>
)
