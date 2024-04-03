<script lang="ts">
    import {currentUser, pb} from "$lib/pb";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    let source: string = "coimbatore";
    let destination: string = "chennai";
    let transportationModes: TransportationMode[] = [];
    let responseText: string = "Loading...";
    let tourist_places: any[] = []
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
            tourist_places: string[];
            destination: string;
            source: string;
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
            tourist_places = responseData.tourist_places;
            const destination = responseData.destination;
            for (let i = 0; i < tourist_places.length; i++) {
                const tourist_spot = tourist_places[i];
                const tourist_spot_data = {
                    City: destination,
                    Tourist_spot: tourist_spot,
                };
                await pb.collection("Tourist_Places").create(tourist_spot_data);
            }
            console.log("Tourist Places:", tourist_places);
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
                class="input input-bordered input-primary w-full max-w-xs bg-transparent"
                placeholder="Source"
                type="text"
            />
            <div
                class="border-t border-b border-r border-dotted border-gray-400 h-8"
            ></div>
            <input
                bind:value={destination}
                class="input input-bordered input-primary w-full max-w-xs bg-transparent"
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
</main>
