import React from 'react'
import { pt } from '../../lib'
import './style.css'
import { useHistory } from 'react-router';

export const Overview = ({
	text,
	path,
	description,
	children,
}) => {

	const history = useHistory()
	const onClick = () => history.push(path)

	return <section className="overview__section">
		<article className="overview__article">
			<h1 className="overview__header" onClick={onClick}>{text}</h1>
			<p className="overview__description">{description}</p>
		</article>
		{children}
	</section>
}

Overview.propTypes = {
	text: pt.any,
	description: pt.any,
	children: pt.any,
	path: pt.any,
}
