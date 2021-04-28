const parser = ({rows }) => {
	return rows.map(({ text, checked }) => `- [${checked ? 'x' : ' '}] ${text}`).join('\n')
};

export default parser
