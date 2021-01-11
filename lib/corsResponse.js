module.exports = ({ statusCode, headers, body }) => {
	const responseHeaders = {
		...headers,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': true
	};

	return {
		statusCode,
		headers: responseHeaders,
		body
	};
};
