const parser = ({ rows, term }) => {
	const rowsList = rows.map(({ text }) => `: ${text}`).join('\n')
	return `${term} \n ${rowsList}`
};

export default parser
