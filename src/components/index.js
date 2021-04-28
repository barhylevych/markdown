import React from 'react'
import { pt }from '../lib'
import { Selector } from './Selector';
import { MultiRow } from './MultiRow';
import { HeadContent } from './HeadContent';
import { Textarea } from './Textarea';
import { MarkdownPreview } from './MarkdownPreview';
import { FormatBlock } from './FormatBlock';
import { Overview } from './Overview';
import { Button } from './Button';
import { Switch } from './Switch';
import { Spacing } from './Spacing';
import { IsValidUrl } from './IsValidUrl';
import { Checkbox } from './Checkbox';
import { Footer } from './Footer';

import './style.css'

const Strike = ({ children }) => (<div className="strike">{children}</div>)
Strike.propTypes = pt.ANY_CHILDREN

const DoubleBr = () => (<><br/><br/></>)

export {
	Selector,
	MultiRow,
	HeadContent,
	Textarea,
	MarkdownPreview,
	FormatBlock,
	Overview,
	Button,
	Switch,
	Spacing,
	IsValidUrl,
	Strike,
	Checkbox,
	DoubleBr,
	Footer,
}
