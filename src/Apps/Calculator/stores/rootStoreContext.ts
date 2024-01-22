import { createContext, useContext } from 'react'
import RootStore from './rootStore'

export const RootStoreContext = createContext<RootStore | null>(null)

export function useStores() {
	const context = useContext(RootStoreContext)

	if (!context) {
		throw new Error('Кажется вы не обернули приложение в Provider')
	}

	return context
}
