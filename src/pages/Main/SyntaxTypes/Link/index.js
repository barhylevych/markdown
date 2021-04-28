import React, { useState } from 'react'
import { groupRow, propsFormatter } from '../helper';
import { FormatBlock, Textarea, Overview, Spacing, IsValidUrl, MultiRow, MarkdownPreview, DoubleBr } from '../../../../components';
import parser from './parser';

const initialState = { href: window.location.href, description: '' }

const ExampleComponent = ()=> {
	const [state, setState] = useState(initialState)
	const [height, setHeight] = useState('auto')

	const onMouseUp = ({ target }) => {
		const calcHeight = (target.getBoundingClientRect && target?.getBoundingClientRect()?.height) || height
		setHeight(calcHeight)
	}

	return groupRow(
		<>
		<FormatBlock paddingVertical>
			<Spacing proportions={['1fr', '1fr', '15px']}>
				<Textarea
					{...propsFormatter('description', state, setState)}
					rows={3}
					onMouseUp={onMouseUp}
					style={{ height }}
				/>
				<Textarea
					{...propsFormatter('href', state, setState)}
					rows={3}
					onMouseUp={onMouseUp}
					style={{ height }}
				/>
				<IsValidUrl url={state.href}/>
			</Spacing>
		</FormatBlock>
		</>,
		parser(state)
	)
}

export const Link = ({ path }) => {
	return <Overview
		text="Link"
		path={path}
		description={<>
			You can optionally add a title for a link.
		  This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in parentheses after the URL. <DoubleBr/>
		  To quickly turn a URL or email address into a link, enclose it in angle brackets. <br/>
			<MultiRow center>
				<MarkdownPreview>
					Link with description <br/>
					[link](http://example.com)
				</MarkdownPreview>
				<MarkdownPreview>
					Only link <br/>
					{'<'}http://example.com{'>'}
				</MarkdownPreview>
			</MultiRow>
		 </>}
	>
	<ExampleComponent/>
	</Overview>
}

Link.displayName = 'Link'
