import './style.scss'

export default function Sidebar() {
	return (
		<div className='calculator__sidebar'>
			<p draggable onDragStart={(e) => console.log(e.target)}>
				test
			</p>
		</div>
	)
}
