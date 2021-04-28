import React, { useState } from 'react'
import './style.css'
import icon from '../../asserts/markdown.ico'
import { Button } from '../../components/Button';
import { routes } from '../../constants';
import { Types } from '../../pages/Main';
import classNames from 'classnames';

export const HeadContent = ({ location: { pathname }, history }) => {
	const [ collapsed, setCollapsed ] = useState(false)
	const locationName = Types.find(({ path }) => path === pathname)?.name

	const onClickHome = () => history.push(routes.parts)
	const onClickScroll = () => window.scroll({top: 0, left: 0, behavior: 'smooth' })
	const onToggleCollapse = () => setCollapsed((prev) => !prev)

	 return <>
		<nav className="navigation">
			<div className="left-side" onClick={onClickScroll}>
				<img src={ icon } alt="Sorry" className="icon"/>
				<h1 className="title">
					Markdown Formatter
				</h1>
			</div>
			<div className="right-side">
				<h2 className={"right-side__location"}>{locationName}</h2>
				<Button.Icon icon={ Button.icons.HOME } color={ Button.colors.white } onClick={onClickHome} title="Go home"/>
			</div>
		</nav>
		<header className={classNames("header", { collapsed })} onClick={onToggleCollapse}>
			<p className="foreword">
				<h1>
					Markdown syntax with live examples
				</h1>
				Made in custom design by Barhylevych Oleksandr
			</p>
		</header>
	</>
}

HeadContent.displayName = 'HeadContent'
