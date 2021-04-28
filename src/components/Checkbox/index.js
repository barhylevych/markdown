import React, { memo } from 'react'
import { pt } from '../../lib'
import './style.css'

export const Checkbox = memo(({
	title,
	value,
	onClick,
	name,
}) => {

	const onClickHandler = () => onClick({ target: { name, value: !value }})

	return <div className="checkbox__wrap" title={title}>
			<input type="checkbox" name={name} checked={value} onClick={onClickHandler}/>
	</div>
})

Checkbox.displayName = 'Checkbox'
Checkbox.propTypes = { ...pt.STATIC_COMPONENT_PROPS }
