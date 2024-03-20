<script lang="ts">
    import { onMount } from 'svelte';

    let country: string = "";
    let city: string = "";
    let hotelType: string = "";
    let numberOfDays: number = 1; 

    let responseText: string = 'Loading...';

    async function callGoogleGeminiAPI() {
        // Fetch data from Google Gemini API
        const response = await fetch('/src/routes/expense/server', {
            method: 'POST',
            body: JSON.stringify({ country, city, hotelType, numberOfDays })
        });

        if (response.ok) {
            const responseData = await response.json(); // Parse JSON response
            responseText = responseData.totalCost; // Update response text with estimated cost
        } else {
            responseText = 'Failed to fetch response.';
        }
    }

    function navigateToHomePage() {
        window.history.back();
    }
</script>

<style>
    /* Sticky footer */
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    #app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow: auto;
    }

    footer {
        margin-top: auto;
    }

    .form-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; 
        margin: 50px auto; 
        max-width: 500px; 
        padding: 20px;
        background-color: #121123;
        border-radius: 10px;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1); 
    }

    .form-container form {
        width: 100%;
    }

    .form-container button {
        margin-top: 20px; 
    }

    .output-container {
        margin-top: 50px; 
        text-align: center;
    }

    .output-container p {
        font-size: 1.2rem;
    }
</style>

<div id="app">
    <header class="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <div class="flex space-x-4">
            <button on:click={navigateToHomePage} class="btn btn-outline btn-primary">Home</button>
            <button class="btn btn-outline btn-primary">Expense</button>
        </div>
    </header>

    <main class="p-6">
        <h1 class="text-3xl font-bold mb-4">Eco-Friendly Travel Finder - Expense page</h1>


        <div class="form-container">
            <!-- Form to collect details -->
            <form on:submit|preventDefault={callGoogleGeminiAPI}>
                <div class="flex flex-col mb-4">
                    <label for="country" class="text-lg font-semibold mb-1">Country</label>
                    <input type="text" id="country" class="input input-bordered input-primary" placeholder="Enter country name" bind:value={country} required />
                </div>
                <div class="flex flex-col mb-4">
                    <label for="city" class="text-lg font-semibold mb-1">City</label>
                    <input type="text" id="city" class="input input-bordered input-primary" placeholder="Enter city name" bind:value={city} required />
                </div>
                <div class="flex flex-col mb-4">
                    <label for="hotelType" class="text-lg font-semibold mb-1">Type of Hotel</label>
                    <input type="text" id="hotelType" class="input input-bordered input-primary" placeholder="Enter hotel type" bind:value={hotelType} required />
                </div>
                <div class="flex flex-col mb-4">
                    <label for="numberOfDays" class="text-lg font-semibold mb-1">Number of Days</label>
                    <input type="number" id="numberOfDays" class="input input-bordered input-primary" placeholder="Enter number of days" bind:value={numberOfDays} min="1" required />
                </div>
                <button type="submit" class="btn btn-outline btn-primary">Get Eco-Friendly Travel Options</button>
            </form>
        </div>
        
        <!-- Display estimated cost -->
        <div class="output-container">
            <h2 class="text-xl font-semibold">Estimated Cost of Trip</h2>
            <p>{responseText}</p>
        </div>
        
        <!-- Additional Sections -->
        <!-- Additional content goes here -->
    </main>

    <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto px-4">
            <p class="text-center">&copy; 2024 EcoTravel. All rights reserved.</p>
        </div>
    </footer>
</div>
