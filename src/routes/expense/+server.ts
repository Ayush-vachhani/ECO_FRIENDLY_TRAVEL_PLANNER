// import type { EnhancedGenerateContentResponse, GenerateContentResult, GenerativeModel } from "@google/generative-ai";
// import type { RequestHandler } from '@sveltejs/kit';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const sample_format = "Return the estimated cost of a trip with the following details: Destination: ... City: ... Hotel Type: ... Number of Days: ...";

// // @ts-ignore
// export const POST: RequestHandler = async ({ request }): Promise<Response> => {
//   const {country, city, hotelType, numberOfDays } = await request.json();
//   let prompt_with_sample = sample_format + ` Destination: ${country} Transportation Mode: ${city} Hotel Type: ${hotelType} Duration: ${numberOfDays}`;
//   const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
//   const model: GenerativeModel = genAI.getGenerativeModel({ model: "gemini-pro" }); // Replace with your model ID

//   const result: GenerateContentResult = await model.generateContent(prompt_with_sample);
//   const response: EnhancedGenerateContentResponse = result.response;
//   console.log(response.text());
//   return new Response(response.text());
// };


// expense/+server.ts

