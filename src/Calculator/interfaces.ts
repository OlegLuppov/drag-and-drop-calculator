export interface IitemsGroups {
	id: string
	groupName: string
	items: string[]
	onSidebar: boolean
}

export interface IPropsForItemCalculator {
	data?: IitemsGroups
	isConstructor: boolean
}

export interface IPropsSwitch {
	isConstructor: boolean
	handlerSwitch: (bol: boolean) => void
}

export interface IPropsSidebar {
	isConstructor: boolean
}
