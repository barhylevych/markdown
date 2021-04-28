import React from 'react'
import i18n from '../../i18n'
import { pt } from '../../lib'
import { always } from '../../utils'
import './style.css'

export const Textarea = ({
	placeholder = i18n.ENTER_TEXT,
	style = always.frozenObject,
	value,
	name,
	onChange,
	rows = 6,
	onMouseUp = always.frozenFunc,
	onMouseDown = always.frozenFunc
}) => {
	return <textarea
		onMouseUp={onMouseUp}
		onMouseDown={onMouseDown}
		style={style}
		rows={rows}
		value={value}
		name={name}
		onChange={onChange}
		placeholder={placeholder}
	/>
}

Textarea.displayName = 'Textarea'
Textarea.propTypes = {
	placeholder: pt.stringOrNumber,
	value: pt.stringOrNumber,
	name: pt.stringOrNumber,
	onChange: pt.func,
	onMouseUp: pt.func,
	onMouseDown: pt.func,
	style: pt.object,
	rows: pt.stringOrNumber,
}
