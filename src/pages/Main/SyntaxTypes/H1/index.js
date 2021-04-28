import React from 'react'
import { groupRow, propsFormatter } from '../helper';
import { FormatBlock, Selector, Textarea, Overview, MultiRow, MarkdownPreview, DoubleBr } from '../../../../components';
import { exampleText, h1Options } from '../../../../constants';
import parser from './parser';

const initialState = {
	prefix: h1Options[0].value,
	text: exampleText,
}

const ExampleComponent = () => {
	const [state, setstate] = React.useState(initialState)

	return groupRow(<>
			<FormatBlock paddingVertical>
				<Selector options={h1Options} {...propsFormatter('prefix', state, setstate)} />
			</FormatBlock>
			<FormatBlock paddingVertical>
				<Textarea {...propsFormatter('text', state, setstate)}/>
			</FormatBlock>
		</>,
		parser(state))
}

export const H1 = ({ path }) => {
	return <Overview
		text="Headings"
		path={path}
		description={<>
			To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. <DoubleBr/>
			Alternate you can use: <br/>
			<MultiRow center>
				<MarkdownPreview>
					Heading level 1 <br/>
					===============
				</MarkdownPreview>
				<MarkdownPreview>
					Heading level 2 <br/>
					---------------
				</MarkdownPreview>
			</MultiRow>
		</>}
	>
		<ExampleComponent/>
	</Overview>
}

H1.displayName = 'H1'
