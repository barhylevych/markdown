const parser = ({isOrderedList, rows }) => {
	return rows.map(({ text }, index) => `${isOrderedList ? String(++index).concat('.') : '-' } ${text}`).join('\n')
};

export default parser
