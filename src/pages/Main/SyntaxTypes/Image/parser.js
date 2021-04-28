const parser = ({ href, alt }) => {
	return `![${alt}](${href})`
};

export default parser
