import './style.scss'
import { IPropsSwitch } from '../../interfaces'
import cl from 'classnames'

const Switch = ({ isConstructor, handlerSwitch }: IPropsSwitch) => {
	return (
		<div className='calculator__switch'>
			<div
				className={cl('calculator__switch-inp-wrapper calculator__switch-inp-wrapper--runtime', {
					'active': !isConstructor,
				})}
			>
				<input
					onChange={() => {
						handlerSwitch(false)
					}}
					type='radio'
					id='calculator__switch-inp-runtime'
					name='calc-switch'
				/>
				<label htmlFor='calculator__switch-inp-runtime'>Runtime</label>
			</div>
			<div
				className={cl(
					'calculator__switch-inp-wrapper calculator__switch-inp-wrapper--constructor',
					{
						'active': isConstructor,
					}
				)}
			>
				<input
					defaultChecked
					onChange={() => handlerSwitch(true)}
					type='radio'
					id='calculator__switch-inp-constructor'
					name='calc-switch'
				/>
				<label htmlFor='calculator__switch-inp-constructor'>Constructor</label>
			</div>
		</div>
	)
}

export default Switch
