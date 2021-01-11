// eslint-disable-next-line import/no-extraneous-dependencies
const AWS = require('aws-sdk');

const ses = new AWS.SES();

module.exports.sendTemplatedEmail = ({ from, to, template, variables }) => {
	const params = {
		Source: from,
		Destination: {
			ToAddresses: [to]
		},
		Template: template,
		TemplateData: JSON.stringify(variables)
	};
	return ses.sendTemplatedEmail(params).promise();
};
