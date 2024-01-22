import { makeAutoObservable } from 'mobx'
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

	sideBarItems: IitemsGroups[] = []
	canvasItems: IitemsGroups[] = []

	constructor() {
		makeAutoObservable(this)
	}

	setItems = (value: IitemsGroups[], zoneName: string) => {
		if (zoneName === 'sidebar') {
			this.sideBarItems = value
		}

		if (zoneName === 'canvas') {
			this.canvasItems = value
		}

		return
	}
}

export default new CalculatorStore()
