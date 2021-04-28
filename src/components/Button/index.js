import React, { useCallback } from 'react'
import {pt} from '../../lib'
import {always} from '../../utils'
import classNames from 'classnames';
import sprite from '../../asserts/sprite.svg'
import './style.css'

export const Icon = ({
	title,
	icon,
	name,
	value,
	color,
	onClick = always.frozenFunc,
}) => {

	const onClickHandler = useCallback(() => {
		onClick({ target: { name, value }})
	}, [onClick, name, value ])

	return <button onClick={onClickHandler} value={value} name={name} title={title} className={classNames("button__icon", {[`button__color--${color}`]: color})}>
		<svg>
			<use href={sprite + `#${icon}`}/>
		</svg>
	</button>
}


export const Button = ({
	title,
	active,
	flex,
	name,
	value,
	onClick = always.frozenFunc,
	hidden,
}) => {

	const onClickHandler = useCallback(() => {
		onClick({ target: { name, value }})
	}, [onClick, name, value])

	return <button
		onClick={onClickHandler}
		value={value}
		name={name}
		title={title}
		className={classNames({
			'button__active': active,
			'button__flex--grow': flex,
		})}
		hidden={hidden}
	>
		{title}
	</button>
}

Button.displayName = 'Button'
Button.propTypes = {
	title: pt.stringOrNumber,
	icon: pt.stringOrNumber,
	active: pt.bool,
	flex: pt.bool,
	name: pt.stringOrNumber,
	value: pt.stringOrNumber,
	onClick: pt.func,
	color: pt.string,
	hidden: pt.bool,
}
Button.icons = {
	ADD: 'add',
	GARBAGE: 'garbage',
	FULFILLED: 'fulfilled',
	REJECT: 'reject',
	HOME: 'home',
	GITHUB: 'github',
	GMAIL: 'gmail',
}
Button.colors = {
  white: 'white'
}

Icon.propTypes = Button.propTypes
Icon.displayName = Button.Icon
Button.Icon = Icon
