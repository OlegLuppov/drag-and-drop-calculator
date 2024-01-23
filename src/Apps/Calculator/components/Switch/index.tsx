import './style.scss'
import { IPropsSwitch } from '../../interfaces'
import cl from 'classnames'

const Switch = ({ handlerSwitch }: IPropsSwitch) => {
	return (
		<div className={cl('calculator__switch')}>
			<input
				onChange={() => handlerSwitch(false)}
				type='radio'
				id='calculator__switch-inp-runtime'
				name='calc-switch'
			/>
			<label htmlFor='calculator__switch-inp-runtime'>Runtime</label>
			<input
				defaultChecked
				onChange={() => handlerSwitch(true)}
				type='radio'
				id='calculator__switch-inp-constructor'
				name='calc-switch'
			/>
			<label htmlFor='calculator__switch-inp-constructor'>Constructor</label>
		</div>
	)
}

export default Switch
