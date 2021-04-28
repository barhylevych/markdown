import React from 'react'
import classNames from 'classnames';
import { pt }from '../../lib'
import './style.css'

export const MultiRow = ({ fill, center, children }) => {
	return <div className={classNames(
		"section__kind", {
			'section__kind--fill': fill,
			'section__kind--center': center
		})}
	>
		{children}
	</div>
}

MultiRow.displayName = 'MultiRow'
MultiRow.propTypes = {
	fill: pt.bool,
	center: pt.bool,
	children: pt.any,
}
