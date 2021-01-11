// eslint-disable-next-line import/no-extraneous-dependencies
const AWS = require('aws-sdk');

const ses = new AWS.SES();

module.exports.sendEmail = ({ from, to, subject, body }) => {
	const params = {
		Destination: {
			ToAddresses: [to]
		},
		Message: {
			Body: {
				Text: { Data: body }
			},

			Subject: { Data: subject }
		},
		Source: from
	};
	return ses.sendEmail(params).promise();
};
