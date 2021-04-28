import React, { useMemo } from 'react'
import { pt } from '../../lib'
import './style.css'

export const FormatBlock = ({
	paddingHorizontal,
	paddingVertical,
	marginHorizontal,
	marginVertical,
	column,
	text,
	style,
	children
} ) => {

	const classList = useMemo(() => {
		const list = ['format-block']
		paddingHorizontal && list.push('padding-horizontal')
		paddingVertical && list.push('padding-vertical')
		marginHorizontal && list.push('margin-horizontal')
		marginVertical && list.push('margin-vertical')
		column && list.push('column')
		text && list.push('text')
		return list
	}, 	[
		paddingHorizontal,
		paddingVertical,
		marginVertical,
		marginHorizontal,
		text,
		column
	])

	return <span className={classList.join(' ')} style={style}>{children}</span>
}

FormatBlock.propTypes = {
	paddingHorizontal: pt.bool,
	paddingVertical: pt.bool,
	marginHorizontal: pt.bool,
	marginVertical: pt.bool,
	column: pt.bool,
	text: pt.bool,
	style: pt.object,
	children: pt.any,
}
