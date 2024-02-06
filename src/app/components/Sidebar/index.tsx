import ItemCalculator from '../ItemCalculator/ItemCalculator'
import './style.scss'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../store/rootStoreContext'
import { IPropsSidebar } from '../../interfaces'

const Sidebar = ({ isConstructor }: IPropsSidebar) => {
	const {
		calculator: { itemsGroups },
	} = useStores()

	return (
		<div className='calculator__sidebar'>
			{itemsGroups.map((item) => (
				<ItemCalculator isConstructor={isConstructor} key={item.id} data={item} />
			))}
		</div>
	)
}

export default observer(Sidebar)
