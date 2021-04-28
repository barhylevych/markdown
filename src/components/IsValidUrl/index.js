import React, { memo } from 'react'
import { pt }from '../../lib'
import './style.css'
import classNames from 'classnames';
import { Button } from '../Button';

const isValid = (url) => {
	try {
		return Boolean(new URL(url))
	} catch (e) {
		return false
	}
}

export const IsValidUrl = memo(({ url }) => {
	const validStatus = isValid(url)
	const title = validStatus ? 'Url valid' : 'Url invalid'

	return <div className={classNames("is-valid-url", { 'is-valid-url__fulfilled': validStatus })} title={title}>
		{validStatus
			?	<Button.Icon icon={Button.icons.FULFILLED}/>
			: <Button.Icon icon={Button.icons.REJECT}/>
		}
	</div>
})

IsValidUrl.displayName = 'IsValidUrl'
IsValidUrl.propTypes = {
	url: pt.any
}
