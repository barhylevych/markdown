export const h1Options = Array(6).fill().map((_, index) => ({
	title: `Heading level ${++index}`,
	value: '#'.repeat(index)
}))

export const boldAndItalicOptions = [
	{ title: 'Italic', value: '*' },
	{ title: 'Bold', value: '**' },
	{ title: 'Bold and Italic', value: '***' }
]

export const horizontalRules = [
	{ title: '***', value: '***' },
	{ title: '---', value: '---' },
	{ title: '___', value: '___' }
]
