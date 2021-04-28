import React, {memo} from 'react'
import PropTypes from 'prop-types'
import { always } from '../../utils'
import './style.css'

const getProportions = (proportions) => proportions?.length
	? { gridTemplateColumns: proportions.join(' '), width: '100%' }
	: always.frozenObject

export const Spacing = memo(({ children, proportions}) => (<div
	className="spacing"
	style={getProportions(proportions)}>
	{children}
</div>))

Spacing.displayName = 'Spacing'
Spacing.propTypes = { children: PropTypes.any, proportions: PropTypes.array }
