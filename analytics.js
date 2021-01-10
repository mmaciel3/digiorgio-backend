module.exports.save = async event => {
	console.log(`Saving analytics event... ${JSON.stringify(event)}`);
	return {
		statusCode: 200
	};
};
