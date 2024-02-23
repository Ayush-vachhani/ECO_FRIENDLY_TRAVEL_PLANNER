// src/routes/server/+server.ts
import {json, type RequestHandler} from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const openAiApiKey = process.env.VITE_OPENAI_API_KEY;
	const body = await request.json();
	
	const response:Response = await fetch('https://api.openai.com/v1/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${openAiApiKey}`
		},
		body: JSON.stringify({
			model: "text-davinci-003", // Specify the model you're using
			prompt: body.prompt, // Assume the request body includes a "prompt"
			max_tokens: 50
		})
	});
	
	const data = await response.json();
	console.log(data);
	return json(data);
};
