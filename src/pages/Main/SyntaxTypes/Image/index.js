import React, { useState } from 'react'
import { groupRow, propsFormatter } from '../helper';
import { exampleText } from '../../../../constants';
import { FormatBlock, Textarea, Overview, Spacing } from '../../../../components';
import parser from './parser';

const initialState = { href: window.location.href, alt: exampleText }

const ExampleComponent = ()=> {
	const [state, setState] = useState(initialState)
	const [height, setHeight] = useState('auto')

	const onMouseUp = ({ target }) => {
		const calcHeight = (target.getBoundingClientRect && target?.getBoundingClientRect()?.height) || height
		setHeight(calcHeight)
	}

	return groupRow(
		<>
		<FormatBlock paddingVertical>
			<Spacing>
				<Textarea
					{...propsFormatter('alt', state, setState)}
					rows={2}
					onMouseUp={onMouseUp}
					style={{ height }}
				/>
				<Textarea
					{...propsFormatter('href', state, setState)}
					rows={2}
					onMouseUp={onMouseUp}
					style={{ height }}
				/>
			</Spacing>
		</FormatBlock>
		</>,
		parser(state)
	)
}

export const Image = ({ path }) => {
	return <Overview
		text="Image"
		path={path}
		description="To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses."
	>
	<ExampleComponent/>
	</Overview>
}

Image.displayName = 'Image'
