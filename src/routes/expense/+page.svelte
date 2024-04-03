<script lang="ts">
    import {currentUser, pb} from "$lib/pb";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    let source: string = "coimbatore";
    let destination: string = "chennai";
    let transportationModes: TransportationMode[] = [];
    let responseText: string = "Loading...";
    onMount(async () => {
        console.log("Current User:", $currentUser);
    });

    interface TransportationMode {
        mode: string;
        travelTime: string;
        carbonEmission: string;
    }

    async function callOpenAIEndpoint() {
        const response = await fetch("/server", {
            method: "POST",
            body: JSON.stringify({source, destination}),
        });

        interface ServerResponse {
            overallSuggestion: string;
            transportationModes: TransportationMode[];
        }

        if (response.ok) {
            const responseData: ServerResponse = await response.json();
            const data = {
                Data: responseData,
                user: $currentUser?.id,
            };
            await pb.collection("History").create(data);
            responseText = responseData.overallSuggestion;
            transportationModes = responseData.transportationModes;
        } else {
            responseText = "Failed to fetch response.";
        }
    }

    async function logout() {
        pb.authStore.clear();
        await goto("/register");
    }

    responseText = "Loading...";
</script>

<main class="p-6">
    <div class="flex justify-center">
        <div class="flex flex-row items-center space-x-4">
            <input
                bind:value={source}
                class="input input-bordered input-primary w-full max-w-xs"
                placeholder="Source"
                type="text"
            />
            <div
                class="border-t border-b border-r border-dotted border-gray-400 h-8"
            ></div>
            <input
                bind:value={destination}
                class="input input-bordered input-primary w-full max-w-xs"
                placeholder="Destination"
                type="text"
            />
        </div>
    </div>
    <div class="flex justify-center mt-4">
        <button
            class="btn btn-outline btn-primary"
            on:click={callOpenAIEndpoint}
        >Get Eco-Friendly Travel Options
        </button>
    </div>

    <br><br>

    <div class="text-center transportDetails">
        <h1>Transportation Details</h1>
        <p>Origin: {source}</p>
        <p>Destination: {destination}</p>

        <br/><br/>

        <div class="overflow-x-auto">
            <table class="w-full border-collapse table-auto">
                <thead>
                <tr>
                    <th class="px-4 py-2 border">Mode</th>
                    <th class="px-4 py-2 border">Travel Time</th>
                    <th class="px-4 py-2 border">Carbon Emission</th>
                </tr>
                </thead>
                <tbody>
                {#each transportationModes as mode}
                    <tr>
                        <td class="border px-4 py-2">{mode.mode}</td>
                        <td class="border px-4 py-2">{mode.travelTime}</td>
                        <td class="border px-4 py-2"
                        >{mode.carbonEmission}</td
                        >
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
        <br/><br/>
        <p>Overall Suggestion: {responseText}</p>
    </div>

    <br><br>

    <h1 class="text-3xl font-bold mb-4">
        Eco-Friendly Travel Planner - Expense page
    </h1>

    <br/><br/>

    <div class="form-container">
        <!-- Form to collect details -->
        <form>

            <br/>

            <div class="flex flex-col mb-4 items-center">
                <select
                    class="select select-bordered select-primary w-1/2"
                    id="hotelType"
                    placeholder="Select Hotel Tier"
                >
                    <option value="1 star">1 star</option>
                    <option value="2 star">2 star</option>
                    <option value="3 star">3 star</option>
                    <option value="4 star">4 star</option>
                    <option value="5 star">5 star</option>
                </select>
            </div>
            <div class="flex flex-col mb-4 items-center">
                <input
                    class="input input-bordered input-primary w-1/2"
                    id="numberOfDays"
                    min="1"
                    placeholder="Enter number of days"
                    required
                    type="number"
                />
            </div>

            <br/>

            <div class="flex flex-col mb-4 items-center">
                <button class="btn btn-outline btn-primary" type="submit"
                >Get Estimated Cost of Travel
                </button
                >
            </div>
        </form>
    </div>

    <!-- Display estimated cost -->
    <div class="output-container">
        <h2 class="text-xl font-semibold">Estimated Cost of Trip</h2>
        <p>{responseText}</p>
    </div>
</main>
