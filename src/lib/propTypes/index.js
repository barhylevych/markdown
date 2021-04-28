import pt from 'prop-types'

const { oneOfType, string, number, func, array, any, bool, object } = pt

const stringOrNumber = oneOfType([ string, number ])

const ANY_CHILDREN = { children: any }

const STATIC_COMPONENT_PROPS = {
	value: stringOrNumber,
	onClick: func,
	onChange: func,
	name: stringOrNumber,
	title: any,
}

export {
	stringOrNumber,
	number,
	string,
	oneOfType,
	func,
	array,
	any,
	bool,
	object,
	ANY_CHILDREN,
	STATIC_COMPONENT_PROPS,
}
