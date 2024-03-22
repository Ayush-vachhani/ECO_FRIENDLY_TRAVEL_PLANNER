import type {EnhancedGenerateContentResponse, GenerateContentResult, GenerativeModel} from "@google/generative-ai";
import {GoogleGenerativeAI} from "@google/generative-ai";
import type {RequestHandler} from '@sveltejs/kit';
import {currentUser, pb} from "$lib/pb";
import {get} from "svelte/store";

let sample_format = "Return the output only in Json format but in plain text. Below is the sample format :" +
	"{\n" +
	"  \"origin\": \"Starting Location\",\n" +
	"  \"destination\": \"Target Destination\",\n" +
	"  \"transportationModes\": [\n" +
	"    {\n" +
	"      \"mode\": \"driving\",\n" +
	"      \"travelTime\": \"1 hour 30 minutes\",\n" +
	"      \"carbonEmission\": \"25 kg CO2e\" \n" +
	"    },\n" +
	"    {\n" +
	"      \"mode\": \"public transit\",\n" +
	"      \"travelTime\": \"2 hours 10 minutes\",\n" +
	"      \"carbonEmission\": \"10 kg CO2e\" \n" +
	"    },\n" +
	"    {\n" +
	"      \"mode\": \"cycling\",\n" +
	"      \"travelTime\": \"3 hours\",\n" +
	"      \"carbonEmission\": \"0 kg CO2e\" \n" +
	"    }\n" +
	"    // ... more transportation modes if applicable\n" +
	"  ],\n" +
	"  \"overallSuggestion\": \"Consider public transit or cycling for environmentally conscious options. Driving is fastest but has higher emissions.\"\n" +
	"}\n. Give all the possible transportation modes and their respective travel time and carbon emission. The Output json contains the fields Origin(string), destination(string)" +
	"transportationModes(array of objects) and overallSuggestion(string). The transportationModes array contains the fields mode(string), travelTime(string) and carbonEmission(string).";

// @ts-ignore
export const POST: RequestHandler = async ({request}): Promise<Response> => {
	const {source, destination} = await request.json();
	let prompt_with_sample = sample_format + "Source : " + source + " Destination : " + destination;
	
	const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
	const model: GenerativeModel = genAI.getGenerativeModel({model: "gemini-pro"});
	console.log("Fetching gemini response!");
	
	const result: GenerateContentResult = await model.generateContent(prompt_with_sample);
	const response: EnhancedGenerateContentResponse = result.response;

	console.log("Type of response : " + typeof response);
	console.log("Response from gemini : " + response.text());
	const Response_text = response.text();
	
	return new Response(Response_text);
};

