import React, { useRef, useState } from 'react'
import './style.css'
import { isString } from '../../utils';
import { pt } from '../../lib'
import classNames from 'classnames';
import MarkdownIt from 'markdown-it';
import { Button } from '../Button';

const md = new MarkdownIt()

export const MarkdownPreview = ({
	enableBr,
	center,
  children,
}) => {
	const [ preview, setPreview ] = useState(false)

	const preparedData = Array.isArray(children)
		? children.filter((i) => isString(i)).join(' ')
		: isString(children) ? children : ''

	const previewData = preview ? md.render(preparedData) : ''

	const onPreview = () => setPreview((prev) => !prev)
	const onCopy = async () => {
		await navigator?.clipboard?.writeText(preview ? previewData : preparedData)
	}

	return <div className="code__wrap">
		<code className={classNames("code", {'code__center--container': center})}>
			<div className="menu">
				<Button title="HTML" onClick={onPreview} active={preview}/>
				<Button title="Copy" onClick={onCopy}/>
			</div>
			<div className={classNames({'code__center--children': center})}>
			{preview
				? previewData
				: (isString(children) && enableBr) ? children.split('\n').map((item) => <> {item} <br/> </>) : children
			}
			</div>
		</code>
	</div>
}

MarkdownPreview.propTypes = {
	...pt.ANY_CHILDREN,
	enableBr: pt.bool
}
