import React from 'react'
import { H1 } from './SyntaxTypes/H1'
import { BoldAndItalic } from './SyntaxTypes/BoldAndItalic'
import { Blockquotes } from './SyntaxTypes/Blockquotes';
import { List } from './SyntaxTypes/List';
import { Code } from './SyntaxTypes/Code';
import { FencedCodeBlock } from './SyntaxTypes/FencedCodeBlock';
import { HorizontalRule } from './SyntaxTypes/HorizontalRule';
import { Link } from './SyntaxTypes/Link';
import { Image } from './SyntaxTypes/Image';
import { Strikethrough } from './SyntaxTypes/Strikethrough';
import { TaskList } from './SyntaxTypes/TaskList';
import { DefinitionList } from './SyntaxTypes/DefinitionList';
import { Footnote } from './SyntaxTypes/Footnote';
import { Tables } from './SyntaxTypes/Table';
import { routes } from '../../constants';

export const Types = [
	{Component: H1,              path: routes.h1,              name: 'H1' },
	{Component: BoldAndItalic,   path: routes.boldAndItalic,   name: 'Bold and Italic' },
	{Component: Blockquotes,     path: routes.blockquotes,     name: 'Blockquotes' },
	{Component: List,            path: routes.list,            name: 'List' },
	{Component: Code,            path: routes.code,            name: 'Code' },
	{Component: FencedCodeBlock, path: routes.fencedCodeBlock, name: 'Fenced code block' },
	{Component: HorizontalRule,  path: routes.horizontalRule,  name: 'Horizontal rule' },
	{Component: Link,            path: routes.link,            name: 'Link' },
	{Component: Image,           path: routes.image,           name: 'Image' },
	{Component: Strikethrough,   path: routes.strikethrough,   name: 'Strikethrough' },
	{Component: TaskList,        path: routes.taskList,        name: 'Task list' },
	{Component: DefinitionList,  path: routes.definitionList,  name: 'Definition list' },
	{Component: Footnote,        path: routes.footnote,        name: 'Footnote' },
	{Component: Tables,          path: routes.tables,          name: 'Tables' },
]

export const Main = () => {
	return Types.map(({ Component, path }) => <Component key={path} path={path}/>)
}

Main.displayName = 'Main'
