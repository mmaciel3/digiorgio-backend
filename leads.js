const corsResponse = require('./lib/corsResponse');
const emailService = require('./lib/emailService');

const { LEAD_EMAIL_RECIPIENT, LEAD_EMAIL_SENDER, LEAD_EMAIL_TEMPLATE_NAME } = process.env;

module.exports.notify = async event => {
	let statusCode = 200;

	try {
		const variables = JSON.parse(event.body) || {};
		await emailService.sendTemplatedEmail({
			from: LEAD_EMAIL_SENDER,
			to: LEAD_EMAIL_RECIPIENT,
			template: LEAD_EMAIL_TEMPLATE_NAME,
			variables
		});
	} catch (err) {
		statusCode = 500;
		console.error(`Error when notifying lead: ${err.stack}`);
	}

	return corsResponse({ statusCode });
};
