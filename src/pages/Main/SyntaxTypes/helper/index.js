import { propsFormatter, getOnChangeState, propsFormatterFlat } from './propsFormatter'
import { groupRow } from './rowView'

const safeSplice = (data, start, deleteCount, insert) => {
	const copy = [...data]
	insert ? copy.splice(start, deleteCount, insert) : copy.splice(start, deleteCount)
	return copy
}

export {
	propsFormatter,
	groupRow,
	getOnChangeState,
	propsFormatterFlat,
	safeSplice,
}
