<script lang="ts">
    import { onMount } from 'svelte';

    let source: string = "coimbatore";
    let destination: string = "chennai";
    let transportationModes: TransportationMode[] = [];
    let responseText: string = 'Loading...';

    interface TransportationMode {
        mode: string;
        travelTime: string;
        carbonEmission: string;
    }

    async function callOpenAIEndpoint() {
        const response = await fetch('/server', {
            method: 'POST',
            body: JSON.stringify({ source, destination })
        });

        if (response.ok) {
            const responseData = await response.json(); // Parse JSON response
            responseText = responseData.overallSuggestion; // Access overallSuggestion property
            transportationModes = responseData.transportationModes; // Access transportation modes
        } else {
            responseText = 'Failed to fetch response.';
        }
    }

    function navigateToExpensePage() {
        window.location.href = '/expense';
    }

    // onMount(callOpenAIEndpoint);
</script>

<header class="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
    <!-- <h1 class="text-3xl font-bold">Eco-Friendly Travel Finder</h1> -->
    <div class="flex space-x-4">
        <button class="btn btn-outline btn-primary">Home</button>
        <button on:click={navigateToExpensePage} class="btn btn-outline btn-primary">Expense</button>
    </div>
</header>


<main class="p-6">
    <h1 class="text-3xl font-bold mb-4">Eco-Friendly Travel Finder</h1>
    <div class="flex justify-center">
        <div class="flex flex-row items-center space-x-4">
            <input type="text" class="input input-bordered input-primary w-full max-w-xs" placeholder="Source" bind:value={source} />
            <div class="border-t border-b border-r border-dotted border-gray-400 h-8"></div>
            <input type="text" class="input input-bordered input-primary w-full max-w-xs" placeholder="Destination" bind:value={destination} />
        </div>
    </div>
    <div class="flex justify-center mt-4">
        <button on:click={callOpenAIEndpoint} class="btn btn-outline btn-primary">Get Eco-Friendly Travel Options</button>
    </div>
    
    <div>
        <h1>Transportation Details</h1>
        <p>Origin: {source}</p>
        <p>Destination: {destination}</p>
        
        <br><br>
    
        <div class="overflow-x-auto">
            <table class="w-full border-collapse table-auto">
                <thead>
                    <tr>
                        <th class="px-4 py-2 bg-gray-200">Mode</th>
                        <th class="px-4 py-2 bg-gray-200">Travel Time</th>
                        <th class="px-4 py-2 bg-gray-200">Carbon Emission</th>
                    </tr>
                </thead>
                <tbody>
                    {#each transportationModes as mode}
                        <tr>
                            <td class="border px-4 py-2">{mode.mode}</td>
                            <td class="border px-4 py-2">{mode.travelTime}</td>
                            <td class="border px-4 py-2">{mode.carbonEmission}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
        
        <br><br>

        <p>Overall Suggestion: {responseText}</p>
        
    </div>

    <!-- Additional Sections -->
    <section class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">Why Choose Eco-Friendly Travel?</h2>
        <p class="text-lg">Eco-friendly travel is not only beneficial for the environment but also offers a more sustainable and responsible way to explore the world. By choosing eco-friendly travel options, you contribute to the preservation of natural resources, reduce your carbon footprint, and support local communities. Additionally, eco-friendly travel allows you to immerse yourself in unique experiences while minimizing negative impacts on the environment.</p>    </section>

    <section class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">Benefits of Eco-Friendly Travel</h2>
        <ul class="list-disc pl-6">
            <li>Reduces carbon footprint</li>
            <li>Supports local communities</li>
            <li>Promotes sustainable practices</li>
            <li>Preserves natural habitats</li>
        </ul>
    </section>

    <section class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">Explore Eco-Friendly Destinations</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg shadow-md p-6 bg-opacity-10 hover:bg-opacity-30 transform hover:scale-105 transition duration-300 hover:shadow-lg"> <!-- Added glassy effect with Tailwind CSS classes -->
                <h3 class="text-lg font-semibold mb-2">Mountain Retreat</h3>
                <p class="text-sm">Escape to the tranquility of the mountains and enjoy eco-friendly accommodations.</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6 bg-opacity-10 hover:bg-opacity-30 transform hover:scale-105 transition duration-300 hover:shadow-lg"> <!-- Added glassy effect with Tailwind CSS classes -->
                <h3 class="text-lg font-semibold mb-2">Coastal Getaway</h3>
                <p class="text-sm">Experience the beauty of the coast while staying in environmentally conscious resorts.</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6 bg-opacity-10 hover:bg-opacity-30 transform hover:scale-105 transition duration-300 hover:shadow-lg"> <!-- Added glassy effect with Tailwind CSS classes -->
                <h3 class="text-lg font-semibold mb-2">Urban Adventure</h3>
                <p class="text-sm ">Explore eco-friendly cities with sustainable transportation options and green spaces.</p>
            </div>
        </div>        
    </section>

    <section class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">Tips for Eco-Friendly Travel</h2>
        <ul class="list-disc pl-6">
            <li>Use public transportation</li>
            <li>Stay in eco-friendly accommodations</li>
            <li>Reduce plastic waste</li>
            <li>Support local businesses</li>
        </ul>
    </section>
</main>

<footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-4">
        <p class="text-center">&copy; 2024 EcoTravel. All rights reserved.</p>
    </div>
</footer>
