import React, {useState, useCallback} from 'react'
import { groupRow, propsFormatter, safeSplice } from '../helper';
import { FormatBlock, Textarea, Button, Spacing, MarkdownPreview, MultiRow, Overview } from '../../../../components';
import { exampleText } from '../../../../constants';
import parser from './parser';

const getRowInstance = (text = '') => ({ text, key: `generated-list-d-${Math.round(Math.random()*100000000)}` })

const initialState = {
	term: 'Term',
	rows: [getRowInstance(exampleText)],
}

const ExampleComponent = () => {
	const [state, setState] = useState(initialState)

	const onReset = useCallback(() => setState(initialState), [setState])

	const onAdd = useCallback(({ target: { value }}) => {
		setState({ ...state, rows: safeSplice(state.rows, value+1, 0, getRowInstance())})
	}, [ state, setState ])

	const onDelete = useCallback(({ target: { value }}) => {
		state.rows.length > 1
			?	setState({ ...state, rows: safeSplice(state.rows, value, 1 )})
			: setState({ ...state, rows: initialState.rows })
	}, [ state, setState ])

	return groupRow(
		<>

			<FormatBlock paddingVertical>
				<Button title="Reset" onClick={onReset}/>
			</FormatBlock>

			<Textarea name={'text'} {...propsFormatter('term', state, setState)} rows={ 1 }/>

			{state.rows.map(({text, checked, key, ...rest}, index) => {

				const onChange = ({target: { name, value }}) =>
					setState({ ...state, rows: safeSplice(state.rows, index, 1, {text, key, ...rest, [name]: value})})

				return <FormatBlock paddingVertical key={ key }>
					<Spacing proportions={ [ '1fr', '24px', '24px' ] }>
						<Textarea name={'text'} value={text} onChange={onChange} rows={ 1 }/>
						<Button.Icon icon={ Button.icons.ADD } title="Add" value={ index } onClick={ onAdd }/>
						<Button.Icon icon={ Button.icons.GARBAGE } title="Delete" value={ index } onClick={ onDelete }/>
					</Spacing>
				</FormatBlock>
			})}

		</>,
		parser(state),
		true
	)
}

export const DefinitionList = ({ path }) => {
	return <Overview
		text="Definition List"
		path={path}
		description={<>
			Some Markdown processors allow you to create definition lists of terms and their corresponding definitions.
			To create a definition list, type the term on the first line. On the next line, type a colon followed by a space and the definition. <br/>
			<MultiRow center>
				<MarkdownPreview center>
					term <br/>
					: definition
				</MarkdownPreview>
			</MultiRow>
		</>}
	>
		<ExampleComponent/>
	</Overview>
}

DefinitionList.displayName = 'DefinitionList'
