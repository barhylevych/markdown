import React, { useCallback } from 'react'
import { pt } from '../../lib'
import './style.css'
import classNames from 'classnames';

export const Switch = ({
	name,
	value,
	onChange,

}) => {
	const onChangeHandler = useCallback(() => {
		onChange({ target: { name, value: !value }})
	}, [onChange, name, value])

	return <div className={classNames("switch", {'on-mode': value})} onClick={onChangeHandler}>
		<div className={"switch__ball"}/>
	</div>
}

Switch.displayName = 'Switch'
Switch.propTypes = {
	name: pt.stringOrNumber,
	value: pt.bool,
	onChange: pt.func
}
