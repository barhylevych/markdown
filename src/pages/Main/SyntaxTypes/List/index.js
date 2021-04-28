import React, {useState, useCallback} from 'react'
import { groupRow, propsFormatterFlat, safeSplice } from '../helper';
import { FormatBlock, Textarea, Overview, Switch, Button, Spacing, MultiRow, MarkdownPreview, DoubleBr } from '../../../../components';
import { exampleText } from '../../../../constants';
import parser from './parser';

const getRowInstance = (text = '') => ({ text, key: `generated-${Math.round(Math.random()*100000000)}` })

const initialState = {
	isOrderedList: false,
	rows: [getRowInstance(exampleText)],
}

const ExampleComponent = () => {
	const [isOrderedList, setIsOrderedList] = useState(initialState.isOrderedList)
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
				<Switch {...propsFormatterFlat(isOrderedList, setIsOrderedList)}/>
				<FormatBlock paddingHorizontal text>
					{ isOrderedList ? 'Enabled ordered list' : 'Disabled ordered list'}
				</FormatBlock>
			</FormatBlock>

			<FormatBlock paddingVertical>
					<Button title="Reset" onClick={onReset}/>
			</FormatBlock>

			{rows.map(({text, key, ...rest}, index) => {

				const onChange = ({target: { value }}) =>
					setRows(safeSplice(rows, index, 1, {text: value, key, ...rest}))

				return <FormatBlock paddingVertical key={ key }>
					<Spacing proportions={ [ '1fr', '24px', '24px' ] }>
						<Textarea value={text} onChange={onChange} rows={ 1 }/>
						<Button.Icon icon={ Button.icons.ADD } title="Add" value={ index } onClick={ onAdd }/>
						<Button.Icon icon={ Button.icons.GARBAGE } title="Delete" value={ index } onClick={ onDelete }/>
					</Spacing>
				</FormatBlock>
			})}

		</>,
		parser({ isOrderedList, rows }),
		true
	)
}

export const List = ({ path }) => {
	return <Overview
		text="Lists"
		path={path}
		description={<>
		To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one. <DoubleBr/>
		To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list. <DoubleBr/>
		Example of use: <br/>
			<MultiRow center>
				<MarkdownPreview center>
					Ordered list <br/>
					1. Example 1 <br/>
					2. Example 2 <br/>
					3. Example 3
				</MarkdownPreview>
				<MarkdownPreview center>
					Unordered list <br/>
					- Example 1 <br/>
					- Example 2 <br/>
					- Example 3
				</MarkdownPreview>
				<MarkdownPreview>
					Mixed <br/>
					1. Example 1 <br/>
					- Example <br/>
					2. Example 1
				</MarkdownPreview>
			</MultiRow>
		</>}
	>
		<ExampleComponent/>
	</Overview>
}

List.displayName = 'List'
