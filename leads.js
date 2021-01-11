const corsResponse = require('./lib/corsResponse');
const emailService = require('./lib/emailService');

const { LEAD_EMAIL_RECIPIENT, LEAD_EMAIL_SENDER, LEAD_EMAIL_SUBJECT } = process.env;

const createBody = event => {
	const body = JSON.parse(event.body) || {};
	const { brand, type, description } = body;
	return `Marca: ${brand}\nTipo: ${type}\nDescrição:${description}`;
};

module.exports.notify = async event => {
	try {
		const body = createBody(event);
		await emailService.sendEmail({
			from: LEAD_EMAIL_SENDER,
			to: LEAD_EMAIL_RECIPIENT,
			subject: LEAD_EMAIL_SUBJECT,
			body
		});
	} catch (err) {
		console.error(`Error when notifying lead: ${err.stack}`);
	}

	return corsResponse({
		statusCode: 200
	});
};
