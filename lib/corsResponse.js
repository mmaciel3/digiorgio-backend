module.exports = ({ statusCode, headers, body }) => {
	const responseHeaders = {
		...headers,
		'Access-Control-Allow-Origin': 'http://www.digiorgio.adv.br',
		'Access-Control-Allow-Credentials': true
	};

	return {
		statusCode,
		headers: responseHeaders,
		body
	};
};
