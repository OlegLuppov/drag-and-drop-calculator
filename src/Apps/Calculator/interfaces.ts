export interface IitemsGroups {
	id: string
	groupName: string
	items: string[]
	onSidebar: boolean
}

export interface IPropsForItemCalculator {
	data?: IitemsGroups
}
