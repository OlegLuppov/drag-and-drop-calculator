import './style.scss'
import cl from 'classnames'
import { IPropsForItemCalculator } from '../../interfaces'
import { v4 } from 'uuid'

const ItemCalculator = ({ data, isConstructor }: IPropsForItemCalculator) => {
	if (!data) return
	return (
		<div
			draggable={isConstructor ? isConstructor : false}
			data-type={data.groupName}
			className={cl(`calculator__item-wrapper calculator__item-wrapper--${data.groupName}`)}
		>
			{data.items.map((item) => (
				<div
					className={cl(`calculator__item calculator__item--${data.groupName}`, {
						'calculator__item calculator__item--zero': item === '0' && data.groupName === 'numbers',
					})}
					key={v4()}
				>
					{item}
				</div>
			))}
		</div>
	)
}

export default ItemCalculator
