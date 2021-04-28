import React, {useState, useCallback} from 'react'
import { groupRow, safeSplice } from '../helper';
import { FormatBlock, Textarea, Overview, Button, Spacing, MarkdownPreview, MultiRow, Checkbox } from '../../../../components';
import { exampleText } from '../../../../constants';
import parser from './parser';

const getRowInstance = (text = '') => ({ text, checked: false, key: `generated-list-${Math.round(Math.random()*100000000)}` })

const initialState = {
	isOrderedList: false,
	rows: [getRowInstance(exampleText)],
}

const ExampleComponent = () => {
	const [rows, setRows] = useState(initialState.rows)

	const onReset = useCallback(() => setRows(initialState.rows), [setRows])

	const onAdd = useCallback(({ target: { value }}) => {
		setRows(safeSplice(rows, value+1, 0, getRowInstance()))
	}, [ rows, setRows ])

	const onDelete = useCallback(({ target: { value }}) => {
		rows.length > 1
			?	setRows(safeSplice(rows, value, 1 ))
			: onReset()
	}, [ rows, setRows, onReset ])

	return groupRow(
		<>

			<FormatBlock paddingVertical>
				<Button title="Reset" onClick={onReset}/>
			</FormatBlock>

			{rows.map(({text, checked, key, ...rest}, index) => {

				const onChange = ({target: { name, value }}) =>
					setRows(safeSplice(rows, index, 1, {text, key, ...rest, [name]: value}))

				return <FormatBlock paddingVertical key={ key }>
					<Spacing proportions={ [ '24px', '1fr', '24px', '24px' ] }>
						<Checkbox name={'checked'} title={checked ? 'Checked': 'Not checked'} value={checked} onClick={onChange} rows={ 1 }/>
						<Textarea name={'text'} value={text} onChange={onChange} rows={ 1 }/>
						<Button.Icon icon={ Button.icons.ADD } title="Add" value={ index } onClick={ onAdd }/>
						<Button.Icon icon={ Button.icons.GARBAGE } title="Delete" value={ index } onClick={ onDelete }/>
					</Spacing>
				</FormatBlock>
			})}

		</>,
		parser({ rows }),
		true
	)
}

export const TaskList = ({ path }) => {
	return <Overview
		text="Lists"
		path={path}
		description={<>
			Task lists allow you to create a list of items with checkboxes. In Markdown applications that support task lists, checkboxes will be displayed next to the content.
			To create a task list, add dashes (-) and brackets with a space ([ ]) in front of task list items.
			To select a checkbox, add an x in between the brackets ([x]). <br/>
			<MultiRow center>
				<MarkdownPreview center>
					Task list <br/>
					- [x] Checked <br/>
					- [ ] Uncheked <br/>
				</MarkdownPreview>
			</MultiRow>
		</>}
	>
		<ExampleComponent/>
	</Overview>
}

TaskList.displayName = 'TaskList'
