import React, {useState} from 'react'
import { groupRow } from '../helper';
import { FormatBlock, Overview, Button, Spacing } from '../../../../components';
import { horizontalRules } from '../../../../constants';
import parser from './parser';

const ExampleComponent = ()=> {
	const [state, setState] = useState(horizontalRules[0].value)

	const onClick = ({ target: { value }}) => setState(value)

	return groupRow(
		<FormatBlock paddingVertical>
			<Spacing proportions={['1fr', '1fr', '1fr']}>
			{horizontalRules.map((prop, index) => <Button {...prop} key={`button-${index}`} onClick={onClick} active={state === prop.value}/>)}
			</Spacing>
		</FormatBlock>,
		parser(state)
	)
}

export const HorizontalRule = ({ path }) => {
	return <Overview
		text="Horizontal rule"
		path={ path }
		description="To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves."
	>
	<ExampleComponent/>
	</Overview>
}

HorizontalRule.displayName = 'HorizontalRule'
