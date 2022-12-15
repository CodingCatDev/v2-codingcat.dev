const { PubSub } = require("@google-cloud/pubsub");

const projectId =
	process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT || "v2-codingcatdev";
const pubSubClient = new PubSub({ projectId });

/**
 * @param {string} topicId
 * @param {object} msg */
exports.sendTopic = async (topicId, msg) => {
	console.log("publishing to ", topicId);
	console.log("message: ", msg);
	const dataBuffer = Buffer.from(JSON.stringify(msg));
	const messageId = await pubSubClient.topic(topicId).publish(dataBuffer);
	console.log(`Message ${messageId} published.`);
};
