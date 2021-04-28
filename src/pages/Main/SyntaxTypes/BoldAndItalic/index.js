import React, {useCallback, useState} from 'react'
import { groupRow, propsFormatter, getOnChangeState } from '../helper';
import { FormatBlock, Button, Textarea, Overview, MarkdownPreview, MultiRow, Spacing, DoubleBr } from '../../../../components';
import { exampleText, boldAndItalicOptions } from '../../../../constants';
import parser from './parser';

const initialState = {
	wrap: boldAndItalicOptions[0].value,
	text: exampleText,
}

const [ italicOption, boldOption, italicAndBoldOption ] = boldAndItalicOptions

const getButton = (option, state, onClick) =>
	(<Button title={option.title} name="wrap" value={option.value} active={state.wrap === option.value} onClick={onClick} flex/>)

const ExampleComponent = ()=> {
	const [state, setState] = useState(initialState)

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const onClick = useCallback(getOnChangeState(setState), [setState])

	return groupRow(
		<>
			<FormatBlock paddingVertical>
				<Spacing>
					{getButton(italicOption, state, onClick)}
					{getButton(boldOption, state, onClick)}
					{getButton(italicAndBoldOption, state, onClick)}
				</Spacing>
			</FormatBlock>
			<FormatBlock paddingVertical>
				<Textarea {...propsFormatter('text', state, setState)}/>
			</FormatBlock>
		</>,
		parser(state)
	)
}

export const BoldAndItalic = ({ path }) => {
	return <Overview
		text="Bold and Italic"
		path={path}
		description={<>
			To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisks without spaces around the letters.<DoubleBr/>
			To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.<DoubleBr/>
			To bold and italicize text, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.<DoubleBr/>
			It is better to use asterisks because they are more multitasking ( but that's just my opinion 😉 ). <DoubleBr/>
			Example of use: <br/>
			<MultiRow center>
				<MarkdownPreview>
					Italicize <br/>
					_example_ <br/>
					*example*
				</MarkdownPreview>
				<MarkdownPreview>
					Italicize <br/>
					__example__ <br/>
					**example**
				</MarkdownPreview>
				<MarkdownPreview>
					Bold and Italicize <br/>
					___example___ <br/>
					***example***
				</MarkdownPreview>
			</MultiRow>
		</>}
	>
	<ExampleComponent/>
	</Overview>
}

BoldAndItalic.displayName = 'BoldAndItalic'
