<script lang="ts">
    import {currentUser, pb} from "$lib/pb";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    let source: string = "coimbatore";
    let destination: string = "chennai";
    let transportationModes: TransportationMode[] = [];
    let responseText: string = 'Loading...';
    onMount(async () => {
        console.log('Current User:', $currentUser)
    });

    interface TransportationMode {
        mode: string;
        travelTime: string;
        carbonEmission: string;
    }

    async function callOpenAIEndpoint() {
        const response = await fetch('/server', {
            method: 'POST',
            body: JSON.stringify({source, destination})
        });

        interface ServerResponse {
            overallSuggestion: string;
            transportationModes: TransportationMode[];
        }

        if (response.ok) {
            const responseData: ServerResponse = await response.json();
            const data = {
                "Data": responseData,
                "user": $currentUser?.id,
            }
            await pb.collection("History").create(data);
            responseText = responseData.overallSuggestion;
            transportationModes = responseData.transportationModes;
        } else {
            responseText = 'Failed to fetch response.';
        }
    }

    async function logout() {
        pb.authStore.clear();
        await goto('/register');
    }
</script>

<style>

    * {
        font-family: "Poppins", sans-serif;
    }

    .group:hover {
        box-shadow: 0 0 10px 2px palevioletred;
        transition: ease-in-out 0.3s;
    }

    .group {
        transition: ease-out 0.4s;
    }

    main {
        padding: 0;
    }

    .BenefitSection div {
        border: none;
    }

    .BenefitSection {
        padding-top: 1.2rem;
        padding-bottom: 1.2rem;
    }

    .Explore-section {
        background-color: bisque;
    }

    .AboutSection {
        background-color: aliceblue;
        padding: 1.3rem;
        height: auto;
    }

    .gradient-text {
        /* Fallback: Set a background color. */
        background-color: rgb(248, 15, 248);

        /* Create the gradient. */
        background-image: linear-gradient(45deg, #192aaf, #05ded3);

        /* Set the background size and repeat properties. */
        background-size: 100%;
        background-repeat: repeat;

        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;

        font-size: 4em;
        font-family: "Poppins", sans-serif;
    }


    .main-section {
        padding: 1.4rem;
    }

    .main-section h1 {
        margin-bottom: 1.5rem;
    }

    .transportDetails {
        padding: 1.4rem;
        margin-top: 45px;
        border-radius: 25px;
        box-shadow: 0px 10px 20px rgba(6, 222, 204, 0.923); /* Adjust shadow values as needed */
        transition: box-shadow 0.3s ease;
    }


</style>


<header class="bg-gray-900 flex justify-between items-center py-4 px-6">
    <div class="flex items-center space-x-4">
        <a class="text-xl font-bold text-white" href="#">EcoTravel</a>
    </div>

    <div class="flex space-x-4">
        <button class="btn btn-outline btn-primary">Home</button>
        {#if !$currentUser}
            <button class="btn btn-outline btn-primary" on:click={() => goto("/register")}>Register</button>
        {/if}
        <button class="btn btn-outline btn-primary" on:click={() => goto("/expense")}>Expense</button>
        <button class="btn btn-outline btn-primary" on:click={() => goto("/Travel_History")}>Travel History</button>
        {#if $currentUser}
            <button class="btn btn-outline btn-primary" on:click={() => goto("/profile")}>Profile</button>
            <button class="btn btn-outline btn-primary" on:click={logout}>Logout</button>
        {/if}
    </div>
</header>


<main class="p-6">
    <section class="main-section">
        <h1 class="gradient-text text-center">Eco-Friendly Travel Finder</h1>
        <div class="flex justify-center">
            <div class="flex flex-row items-center space-x-4">
                <input bind:value={source} class="input input-bordered input-primary w-full max-w-xs"
                       placeholder="Source"
                       type="text"/>
                <div class="border-t border-b border-r border-dotted border-gray-400 h-8"></div>
                <input bind:value={destination} class="input input-bordered input-primary w-full max-w-xs"
                       placeholder="Destination"
                       type="text"/>
            </div>
        </div>
        <div class="flex justify-center mt-4">
            <button class="btn btn-outline btn-primary" on:click={callOpenAIEndpoint}>Get Eco-Friendly Travel Options
            </button>
        </div>

        <div class="bg-white text-center transportDetails">
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

    </section>
    <!-- Additional Sections -->
    <section class="mt-8 AboutSection">
        <h1 class="gradient-text text-center">Discover</h1>
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perspiciatis assumenda omnis, eos tenetur
            laudantium culpa amet natus! Animi ratione error quisquam laborum labore enim in voluptatem nam sit libero!
        </div>
    </section>

    <section class="BenefitSection mt-8 bg-white">
        <h2 class="text-2xl font-semibold  mb-4 text-center">Benefits of Eco-Friendly Travel</h2>
        <div class="grid grid-cols-2">
            <div class="flex items-center justify-center p-4 rounded border border-gray-300 bg-white">
                <p class="text-center font-semibold p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                    ad voluptas illum? Illo itaque omnis hic dolores dolorem, iure eius dolor assumenda deleniti, enim
                    sint, pariatur repudiandae eos sapiente accusamus.
                    Similique non sint quasi vel aut, voluptatem iure ipsam aspernatur, inventore sit fuga facilis
                    ducimus ullam quibusdam atque, cupiditate aliquid blanditiis nisi praesentium dolore dignissimos sed
                    debitis amet explicabo. Totam!</p>
            </div>

            <div class="flex items-center justify-center grid grid-cols-2 gap-4 p-4">
                <div
                    class="group p-4 rounded border border-gray-300 bg-white transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>reduced cost of soemthing</p>
                    </div>
                </div>
                <div
                    class="group p-4 rounded border border-gray-300 bg-white transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>reduced cost of soemthing</p>
                    </div>
                </div>
                <div
                    class="group p-4 rounded border border-gray-300 bg-white transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>reduced cost of soemthing</p>
                    </div>
                </div>
                <div
                    class="group p-4 rounded border border-gray-300 bg-white transform hover:scale-105 transition duration-400">
                    <div class="text-center">
                        <p>reduced cost of soemthing</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="mt-8 Explore-section">
        <section class="mt-8">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                <div class="bg-gray-200 rounded-lg p-6">
                    <h3 class="text-3xl font-semibold mb-4 text-center">Discover Eco-Friendly Destinations</h3>
                    <p class="text-lg text-center">Explore our carefully curated selection of eco-friendly destinations
                        that offer sustainable accommodations and unforgettable experiences.</p>
                </div>
            </div>
        </section>
        <section class="mt-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    class="bg-white rounded-lg shadow-md p-6 bg-opacity-10 hover:bg-opacity-30 transform hover:scale-105 transition duration-300 hover:shadow-lg">
                    <h3 class="text-lg font-semibold mb-2">Mountain Retreat</h3>
                    <p class="text-sm">Escape to the tranquility of the mountains and enjoy eco-friendly
                        accommodations.</p>
                </div>
                <div
                    class="bg-white rounded-lg shadow-md p-6 bg-opacity-10 hover:bg-opacity-30 transform hover:scale-105 transition duration-300 hover:shadow-lg">
                    <h3 class="text-lg font-semibold mb-2">Coastal Getaway</h3>
                    <p class="text-sm">Experience the beauty of the coast while staying in environmentally conscious
                        resorts.</p>
                </div>
                <div
                    class="bg-white rounded-lg shadow-md p-6 bg-opacity-10 hover:bg-opacity-30 transform hover:scale-105 transition duration-300 hover:shadow-lg">
                    <h3 class="text-lg font-semibold mb-2">Urban Adventure</h3>
                    <p class="text-sm">Explore eco-friendly cities with sustainable transportation options and green
                        spaces.</p>
                </div>
            </div>
        </section>
    </section>


</main>

<footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-4">
        <p class="text-center">&copy; 2024 EcoTravel. All rights reserved.</p>
    </div>
</footer>
