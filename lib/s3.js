// eslint-disable-next-line import/no-extraneous-dependencies
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

module.exports.createFile = async (bucketName, fileName, content) => {
	const params = {
		Bucket: bucketName,
		Key: fileName,
		Body: content
	};
	return s3.upload(params).promise();
};
