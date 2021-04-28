import React, { useCallback, useMemo, useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { pt } from '../../lib'
import { always } from '../../utils'
import './style.css'

const syntheticHTMLEvent = (name, value) => ({ target: { name, value }})

export const Selector = React.memo(({
	options = always.frozenArray,
	placeholder,
	value,
	name,
	onChange,
}) => {
	const [closed, setClosed] = useState(true)
	const ref = useRef(null)

	const toggleOpen = () => setClosed((prev) => !prev)

	// ---------------------------------------- outside click handlers -------------------------------------------------------------

	const outsideClick = useCallback((event) => {
		event.preventDefault()
		event.stopPropagation()
		if (ref && !ref?.current?.contains(event.target)) {
			setClosed(true)
		}
	}, [ setClosed ])

	useEffect(() => {
		closed ? document.removeEventListener('click', outsideClick) : document.addEventListener('click', outsideClick)
	}, [ closed, outsideClick ])

	// ----------------------------------------  option handlers -------------------------------------------------------------------

	const { title } = options.find(({ value: optionValue }) => value === optionValue) ?? {}

	const onChangeHandler = useCallback((optionValue) => {
		setClosed(true)
		onChange(syntheticHTMLEvent(name, optionValue))
	},[onChange, name])

	const getOption = useCallback(({value: optionValue, title: optionTitle}) => (
		<li
			key={optionValue}
			className={classNames("dropdown-item", { 'selected': value === optionValue })}
			onClick={() => onChangeHandler(optionValue)}
		>
			{optionTitle}
		</li>
	), [ onChangeHandler, value ])

	const optionsList = useMemo(() => options.map(getOption), [options, getOption])

	return <div className="dropdown" ref={ref}>
		<div className="select" onClick={toggleOpen}>
			<input className="select-input" value={title} disabled placeholder={placeholder} />
			<i className={classNames('arrow', { 'open': !closed })}/>
		</div>
		<ul className="dropdown-menu" hidden={closed}>
			{optionsList}
		</ul>
	</div>
})

Selector.displayName='Selector'
Selector.propTypes = {
	options: pt.array,
	placeholder: pt.stringOrNumber,
	value: pt.func.isRequired,
	name: pt.func.isRequired,
	onChange: pt.func.isRequired,
}
