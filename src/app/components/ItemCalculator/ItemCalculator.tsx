import './style.scss'
import cl from 'classnames'
import { IPropsForItemCalculator } from '../../interfaces'
import { v4 } from 'uuid'
import { observer } from 'mobx-react-lite'

const ItemCalculator = ({ data, isConstructor }: IPropsForItemCalculator) => {
	if (!data) return

	function handDragStart(e: React.DragEvent<HTMLElement>, groupName: string) {
		e.stopPropagation()
		e.dataTransfer.setData('data-type', groupName)
	}

	return (
		<div
			draggable={isConstructor && data.onSidebar ? true : false}
			onDragStart={(e) => handDragStart(e, data.groupName)}
			data-type={data.groupName}
			className={cl(`calculator__item-wrapper calculator__item-wrapper--${data.groupName}`, {
				'calculator__item-wrapper--disabled': !data.onSidebar,
			})}
		>
			{data.items.map((item) => {
				if (data.groupName === 'display') {
					return (
						<div key={v4()} className='calculator__result'>
							{item}
						</div>
					)
				}
				return (
					<button
						className={cl(`calculator__btn calculator__btn--${data.groupName}`, {
							'calculator__btn calculator__btn--zero': item === '0' && data.groupName === 'numbers',
						})}
						key={v4()}
					>
						{item}
					</button>
				)
			})}
		</div>
	)
}

export default observer(ItemCalculator)
