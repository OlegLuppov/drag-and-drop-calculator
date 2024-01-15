import cl from 'classnames'
import './style.scss'
import { useState } from 'react'

export default function Canvas() {
	const [isDragOver, setIsDragOver] = useState<boolean>(false)

	function hendlerDragEnter(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault()
		e.stopPropagation()
		console.log(e.target)

		setIsDragOver(true)
	}

	function hendlerDragLeave(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault()
		e.stopPropagation()
		console.log(e.target)

		setIsDragOver(false)
	}

	return (
		<div
			className={cl('calculator__canvas', { 'calculator__canvas--drag-enter': isDragOver })}
			onDrop={(e) => setIsDragOver(false)}
			onDragEnter={(e) => hendlerDragEnter(e)}
			onDragLeave={(e) => hendlerDragLeave(e)}
			onDragOver={(e) => e.preventDefault()}
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
