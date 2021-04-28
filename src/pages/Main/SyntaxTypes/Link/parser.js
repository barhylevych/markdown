const parser = ({ href, description }) => {
	return !!description ? `[${description}](${href})` : `<${href}>`
};

export default parser
