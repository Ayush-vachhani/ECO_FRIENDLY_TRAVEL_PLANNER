import type {EnhancedGenerateContentResponse, GenerateContentResult, GenerativeModel} from "@google/generative-ai";
import {GoogleGenerativeAI} from "@google/generative-ai";
import type {RequestHandler} from '@sveltejs/kit';

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
    "  \"overallSuggestion\": \"Consider public transit or cycling for environmentally conscious options. Driving is fastest but has higher emissions.\",\n" +
    "  \"tourist_places\": [\n" +
    "    \"Tourist Place 1\",\n" +
    "    \"Tourist Place 2\",\n" +
    "    \"Tourist Place 3\"\n" +
    "    // ... more tourist places if applicable\n" +
    "  ]\n" +
    "}\n. Give all the possible transportation modes and their respective travel time and carbon emission. The Output json contains the fields Origin(string), destination(string)" +
    "transportationModes(array of objects), overallSuggestion(string), and tourist_places(array of strings). The transportationModes array contains the fields mode(string), travelTime(string), and carbonEmission(string)." +
    "Populate the tourist_places array with the names of the tourist places that can be visited in the destination ( Minimum - 1 place, Maximum - 5 places ). Do not add anything extra to the response, except for the required fields. ";

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

