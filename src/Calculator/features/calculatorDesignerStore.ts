import { action, makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'
import { IitemsGroups } from '../interfaces'
import { calcData } from '../constants/data'

class CalculatorStore {
	itemsGroups: IitemsGroups[] = [
		{ id: v4(), groupName: 'display', items: calcData.display, onSidebar: true },
		{ id: v4(), groupName: 'operators', items: calcData.operators, onSidebar: true },
		{
			id: v4(),
			groupName: 'numbers',
			items: calcData.numbers,
			onSidebar: true,
		},
		{ id: v4(), groupName: 'equals', items: calcData.equals, onSidebar: true },
	]

	canvasItems: IitemsGroups[] = []

	constructor() {
		makeObservable(this, {
			itemsGroups: observable,
			canvasItems: observable,
			setItems: action.bound,
		})
	}

	setItems(value: IitemsGroups, zoneName: string) {
		if (zoneName === 'canvas') {
			value.onSidebar = false
			this.canvasItems.push(value)
		}
	}
}

export default new CalculatorStore()
