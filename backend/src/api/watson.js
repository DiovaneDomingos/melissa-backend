const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const apikey = '3qI92Thmokq7vhW9Ok7G2U95pm98hoecBEyb-2d9-pmr';
const url = 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/0943ab5f-db89-4893-8670-04e8c02e9759';
const assistantId = '615c548a-a7c9-49c6-a794-4d8fff6afa89';

async function createSession(assistant) {
	let res = await assistant.createSession({
		assistantId
	})

	let session_id = res.result.session_id

	return session_id
}

async function createMessage(assistant, sessionId, message) {
	const res = await assistant.message({
		assistantId: assistantId,
		sessionId: sessionId,
		input: {
			'message_type': 'text',
			'text': message
		}
	})

	const resp = res.result.output.generic[0].text

	return resp
}

async function main() {
	const assistant = new AssistantV2({
		version: '2020-04-01',
		authenticator: new IamAuthenticator({
			apikey,
		}),
		url,
	});

	const sessionId = await createSession(assistant)

	let message = 'Olá'

	a = await createMessage(assistant, sessionId, message)
	
	console.log(a)
	return await a
}

return main()