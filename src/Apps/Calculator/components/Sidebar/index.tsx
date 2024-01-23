import { useEffect } from 'react'
import ItemCalculator from '../ItemCalculator/ItemCalculator'
import './style.scss'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../stores/rootStoreContext'
import { spy } from 'mobx'

spy((e) => {
	if (e.type === 'action') {
		console.log(e)
	}
})

const Sidebar = () => {
	const {
		calculator: { itemsGroups },
	} = useStores()

	return (
		<div className='calculator__sidebar'>
			{itemsGroups.map((item) => (
				<ItemCalculator key={item.id} data={item} />
			))}
		</div>
	)
}

export default observer(Sidebar)
