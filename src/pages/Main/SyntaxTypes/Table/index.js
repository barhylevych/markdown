import React from 'react'
import { Overview, MultiRow, MarkdownPreview, DoubleBr } from '../../../../components';

export const Tables	= ({ path }) => {
	return <Overview
		text="Tables"
		path={path}
		description={<>
			To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column.
			You can optionally add pipes on either end of the table. <DoubleBr/>
			You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens within the header row. <DoubleBr/>
			You can use <a href="https://www.tablesgenerator.com/" >"Markdown Tables Generator"</a> to generate custom table. <br/>
			<MultiRow center>
				<MarkdownPreview center>
					|  Align  | Start   |  Center  |     End | <br/>
					|   ---   | :---    |  :----:  |    ---: | <br/>
					|  Text   | Text    |   Text   |    Text | <br/>
					|  Text   | Text    |   Text   |    Text |
				</MarkdownPreview>
			</MultiRow>
		</>}
	/>
}

Tables.displayName = 'Tables'
