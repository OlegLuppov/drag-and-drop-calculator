import './style.scss'
import Sidebar from '../components/Sidebar'
import Canvas from '../components/Сanvas'
import cl from 'classnames'
import Switch from '../components/Switch'
import { useState } from 'react'

const Calculator = () => {
	const [isConstructor, setConstructor] = useState<boolean>(true)

	function handlerSwitch(bol: boolean) {
		setConstructor((prev) => {
			if (prev === bol) return prev
			return bol
		})
	}

	return (
		<div className={cl('calculator__wrapper')}>
			<div className={cl('calculator__switch-wrapper')}>
				<Switch handlerSwitch={handlerSwitch} />
			</div>
			<div className={cl('calculator')}>
				<Sidebar />
				<Canvas />
			</div>
		</div>
	)
}

export default Calculator
