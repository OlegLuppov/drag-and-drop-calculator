import cl from 'classnames'
import './style.scss'
import { useState } from 'react'
import { spy } from 'mobx'
// import { useStores } from '../../stores/rootStoreContext'
import { observer } from 'mobx-react-lite'

// spy((e) => {
// 	if (e.type === 'action') {
// 		console.log(e)
// 	}
// })

const Canvas = () => {
	// const {
	// 	calculator: { itemsGroups, changeItemsGroups },
	// } = useStores()
	const [isDragOver, setIsDragOver] = useState<boolean>(false)

	function hendlerDragEnter(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault()
		e.stopPropagation()
		setIsDragOver(true)
	}

	function hendlerDragLeave(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault()
		e.stopPropagation()
		setIsDragOver(false)
	}

	return (
		<div
			className={cl('calculator__canvas', { 'calculator__canvas--drag-enter': isDragOver })}
			onDragEnter={(e) => hendlerDragEnter(e)}
			onDragOver={(e) => {
				e.preventDefault()
			}}
			onDragLeave={(e) => {
				hendlerDragLeave(e)
				setIsDragOver(false)
			}}
			onDrop={(e) => {
				e.preventDefault()
				console.log(e.target)
				console.log('drop')
				setIsDragOver(false)
			}}
		>
			<div className={cl('calculator__canvas-tooltip-wrapper')}>
				<i className={cl('calculator__canvas-tooltip-i')}></i>
				<span className={cl('calculator__canvas-tooltip calculator__canvas-tooltip--main')}>
					Перетащите сюда
				</span>
				<span className={cl('calculator__canvas-tooltip')}>любой элемент из левой панели</span>
			</div>
		</div>
	)
}

export default observer(Canvas)
