import React, {useState} from 'react'
import { groupRow, propsFormatter } from '../helper';
import { FormatBlock, Textarea, Overview } from '../../../../components';
import { exampleText } from '../../../../constants';
import parser from './parser';

const initialState = { text: exampleText }

const ExampleComponent = ()=> {
	const [state, setState] = useState(initialState)

	return groupRow(
		<FormatBlock paddingVertical>
			<Textarea {...propsFormatter('text', state, setState)}/>
		</FormatBlock>,
		parser(state)
	)
}

export const Blockquotes = ({ path }) => {
	return <Overview
		text="Blockquote"
		path={path}
		description="To create a blockquote, add a > in front of a paragraph."
	>
	<ExampleComponent/>
	</Overview>
}

Blockquotes.displayName = 'Blockquotes'
