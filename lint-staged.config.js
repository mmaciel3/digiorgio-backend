module.exports = {
	'*.js': allFiles => {
		const filesString = allFiles.join(' ');
		return `eslint --fix ${filesString}`;
	},
	'*': allFiles => {
		const filesString = allFiles.join(' ');
		return `prettier --write ${filesString}`;
	}
};
