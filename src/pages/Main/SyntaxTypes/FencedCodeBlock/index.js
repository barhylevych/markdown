import React, {useState} from 'react'
import { groupRow, propsFormatter } from '../helper';
import { FormatBlock, Textarea, Overview } from '../../../../components';
import { exampleJSON } from '../../../../constants';
import parser from './parser';

const initialState = { text: exampleJSON }

const ExampleComponent = ()=> {
	const [state, setState] = useState(initialState)

	return groupRow(
		<FormatBlock paddingVertical>
			<Textarea {...propsFormatter('text', state, setState)} rows={3}/>
		</FormatBlock>,
		parser(state)
	)
}

export const FencedCodeBlock = ({ path }) => {
	return <Overview
		text="Fenced code block"
		path={path}
		description="The basic Markdown syntax allows you to create code blocks by indenting lines by four spaces or one tab.
		 If you find that inconvenient, try using fenced code blocks.
		 Depending on your Markdown processor or editor, you’ll use three backticks (```) or three tildes (~~~) on the lines before and after the code block.
		"
	>
	<ExampleComponent/>
	</Overview>
}

FencedCodeBlock.displayName = 'FencedCodeBlock'
