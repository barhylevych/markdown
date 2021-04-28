import React, {useState} from 'react'
import { groupRow, propsFormatter } from '../helper';
import { FormatBlock, Textarea, Overview, Strike } from '../../../../components';
import { exampleText } from '../../../../constants';
import parser from './parser';

const initialState = { text: exampleText }

const ExampleComponent = ()=> {
	const [state, setState] = useState(initialState)

	return groupRow(
		<FormatBlock paddingVertical>
			<Textarea {...propsFormatter('text', state, setState)} rows={3}/>
		</FormatBlock>,
		parser(state)
	)
}

export const Strikethrough = ({ path }) => {
	return <Overview
		text="Strikethrough"
		path={path}
		description={<>
			You can strikethrough words by putting a horizontal line through the center of them.
			The result looks <Strike>like this</Strike>.
		</>}
	>
	<ExampleComponent/>
	</Overview>
}

Strikethrough.displayName = 'Strikethrough'
