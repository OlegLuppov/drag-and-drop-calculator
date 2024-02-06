import './tooltip.scss'
import { observer } from 'mobx-react-lite'
import cl from 'classnames'

const Tooltip = () => {
	return (
		<div className={cl('calculator__canvas-tooltip-wrapper')}>
			<i className={cl('calculator__canvas-tooltip-i')}></i>
			<span className={cl('calculator__canvas-tooltip calculator__canvas-tooltip--main')}>
				Перетащите сюда
			</span>
			<span className={cl('calculator__canvas-tooltip')}>любой элемент из левой панели</span>
		</div>
	)
}

export default observer(Tooltip)
