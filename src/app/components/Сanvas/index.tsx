import cl from 'classnames'
import './style.scss'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../store/rootStoreContext'
import Tooltip from '../Tooltip/Tooltip'
import ItemCalculator from '../ItemCalculator/ItemCalculator'
import { IPropsCanvas } from '../../interfaces'

const Canvas = ({ isConstructor }: IPropsCanvas) => {
	const {
		calculator: { itemsGroups, setItems, canvasItems },
	} = useStores()

	const [isDragOver, setIsDragOver] = useState<boolean>(false)

	function handDrop(e: React.DragEvent<HTMLElement>) {
		e.stopPropagation()

		if (!itemsGroups || !itemsGroups.length) return

		const dataType = e.dataTransfer.getData('data-type')

		const findGroupItem = itemsGroups.find((group) => group.groupName === dataType)

		if (!findGroupItem) return

		setItems(findGroupItem, 'canvas')
	}

	return (
		<div
			className={cl('calculator__canvas', {
				'calculator__canvas--drag-enter': isDragOver,
			})}
			onDrop={(e) => handDrop(e)}
			onDragOver={(e) => e.preventDefault()}
		>
			{!canvasItems || !canvasItems.length ? (
				<Tooltip />
			) : (
				canvasItems.map((item) => (
					<ItemCalculator isConstructor={isConstructor} key={item.id} data={item} />
				))
			)}
		</div>
	)
}

export default observer(Canvas)
