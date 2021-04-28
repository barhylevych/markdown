
export const getOnChangeState = (setState) =>
	({ target: { name, value }}) => setState((prevState) => ({ ...prevState, [name]: value }))

export const propsFormatter = (name, state, setState) => {
	return {
		value: state[name],
		onChange: ({ target: { value }}) => setState((prevState) => ({ ...prevState, [name]: value })),
		name,
	}
}

export const propsFormatterFlat = (state, setState, name) => {
	return {
		value: state,
		onChange: ({ target: { value }}) => setState(value),
		name,
	}
}

