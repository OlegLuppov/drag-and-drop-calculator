import './style.scss'
import Sidebar from '../components/Sidebar'
import Canvas from '../components/Сanvas'

function Calculator() {
	return (
		<div className='calculator__wrapper'>
			<Sidebar />
			<Canvas />
		</div>
	)
}

export default Calculator
