import React from 'react'
import { Overview, MultiRow, MarkdownPreview, DoubleBr } from '../../../../components';

export const Footnote	= ({ path }) => {
	return <Overview
		text="Footnote"
		path={path}
		description={<>
			Footnotes allow you to add notes and references without cluttering the body of the document.
			When you create a footnote, a superscript number with a link appears where you added the footnote reference.
			Readers can click the link to jump to the content of the footnote at the bottom of the page.
			<DoubleBr/>
			To create a footnote reference, add a caret and an identifier inside brackets ([^1]).
			Identifiers can be numbers or words, but they can’t contain spaces or tabs.
			Identifiers only correlate the footnote reference with the footnote itself — in the output, footnotes are numbered sequentially.
			<DoubleBr/>
			Add the footnote using another caret and number inside brackets with a colon and text ([^1]: My footnote.).
			You don’t have to put footnotes at the end of the document.
			You can put them anywhere except inside other elements like lists, block quotes, and tables.
			<br/>
			<MultiRow center>
				<MarkdownPreview center>
					Here's a sentence with a footnote. [^1] <br/>
					<br/>
					[^1]: This is the footnote.
				</MarkdownPreview>
			</MultiRow>
		</>}
	/>
}

Footnote.displayName = 'Footnote'
