import React from 'react'
import { MultiRow, MarkdownPreview } from '../../../../components';

export const groupRow = (fromComponent, parsedHTML, enableBr) => {
	return <MultiRow>
		<div>
			{fromComponent}
		</div>
		<div>
			<MarkdownPreview enableBr={enableBr}>{parsedHTML}</MarkdownPreview>
		</div>
	</MultiRow>
}
