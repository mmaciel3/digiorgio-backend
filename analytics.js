const objectPath = require('simple-object-path');
const corsResponse = require('./lib/corsResponse');
const s3 = require('./lib/s3');

const { ANALYTICS_BUCKET_NAME, ANALYTICS_FILE_NAME_PREFIX } = process.env;

const createFileContent = event => {
	const content = {
		userAgent: objectPath(event, 'headers/User-Agent')
	};
	return JSON.stringify(content, null, 4);
};

module.exports.save = async event => {
	try {
		const userAgent = createFileContent(event);
		const fileName = `${ANALYTICS_FILE_NAME_PREFIX}${Date.now()}.json`;
		await s3.createFile(ANALYTICS_BUCKET_NAME, fileName, userAgent);
	} catch (err) {
		console.error(`Error when storing analytics: ${err.stack}`);
	}

	return corsResponse({
		statusCode: 200
	});
};
