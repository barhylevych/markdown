import React from 'react'
import './style.css'
import { Button } from '../Button';

export const Footer = () => {
	return <footer className="footer">
		<div className="left-side">
			Made design by O. Barhylevych
		</div>
		<div className="right-side">
			<a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer">
				<Button.Icon icon={Button.icons.GITHUB}/>
			</a>
			<a href={`mailto:${process.env.REACT_APP_MAIL}`} target="_blank" rel="noreferrer">
				<Button.Icon icon={Button.icons.GMAIL}/>
			</a>
		</div>
	</footer>
}

Footer.displayName = 'Footer'
