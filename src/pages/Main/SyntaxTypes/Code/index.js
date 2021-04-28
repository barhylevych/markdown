import React, {useState} from 'react'
import { groupRow, propsFormatter } from '../helper';
import { FormatBlock, Textarea, Overview } from '../../../../components';
import { exampleHTML } from '../../../../constants';
import parser from './parser';

const initialState = { text: exampleHTML }

const ExampleComponent = ()=> {
	const [state, setState] = useState(initialState)

	return groupRow(
		<FormatBlock paddingVertical>
			<Textarea {...propsFormatter('text', state, setState)} rows={3}/>
		</FormatBlock>,
		parser(state)
	)
}

export const Code = ({ path }) => {
	return <Overview
		text="Code"
		path={path}
		description="To create code blocks, indent every line of the block by at least four spaces or one tab."
	>
	<ExampleComponent/>
	</Overview>
}

Code.displayName = 'Code'
