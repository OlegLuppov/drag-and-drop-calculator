import { action, makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'
import { IitemsGroups } from '../interfaces'

class CalculatorStore {
	itemsGroups: IitemsGroups[] = [
		{ id: v4(), groupName: 'display', items: ['0'], onSidebar: true },
		{ id: v4(), groupName: 'operators', items: ['/', 'x', '-', '+'], onSidebar: true },
		{
			id: v4(),
			groupName: 'numbers',
			items: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','],
			onSidebar: true,
		},
		{ id: v4(), groupName: 'equals', items: ['='], onSidebar: true },
	]

	canvasItems: IitemsGroups[] = []

	constructor() {
		makeObservable(this, {
			itemsGroups: observable,
			canvasItems: observable,
			setItems: action.bound,
		})
	}

	setItems(value: IitemsGroups[], zoneName: string) {
		if (zoneName === 'canvas') {
			this.canvasItems = value
		}
		this.test()
		return
	}

	private test() {
		console.log('test')
	}
}

export default new CalculatorStore()
