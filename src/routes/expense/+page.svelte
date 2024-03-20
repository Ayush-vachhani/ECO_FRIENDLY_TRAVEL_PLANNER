<script lang="ts">
    import { onMount } from 'svelte';
  
    let fromCountry: string = "";
    let fromCity: string = "";
    let toCountry: string = ""; // Added field
    let toCity: string = ""; // Added field
    let hotelType: string = "1 star"; // Default to 1 star
    let numberOfDays: number = "";
    let responseText: string = 'Loading...';
  
    async function callGoogleGenerativeAPI() {
      const response = await fetch('/src/routes/expense/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fromCountry, fromCity, toCountry, toCity, hotelType, numberOfDays }) // Updated parameters
      });
  
      if (response.ok) {
        const responseData = await response.json();
        responseText = responseData.totalCost;
      } else {
        responseText = 'Failed to fetch response.';
      }
    }
  
    async function calculateExpenses() {
      await callGoogleGenerativeAPI();
    }
  
    onMount(async () => {
      await calculateExpenses();
    });
  
    function navigateToHomePage() {
      window.location.href = '/';
    }
  </script>

<div id="app">
    <header class="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <div class="flex space-x-4">
            <button on:click={navigateToHomePage} class="btn btn-outline btn-primary">Home</button>
            <button class="btn btn-outline btn-primary">Expense</button>
        </div>
    </header>

    <main class="p-6">
        <h1 class="text-3xl font-bold mb-4">Eco-Friendly Travel Planner - Expense page</h1>

        <br><br>

        <div class="form-container">
            <!-- Form to collect details -->
            <form on:submit|preventDefault={callGoogleGeminiAPI}>
                <div class="flex flex-wrap mb-4 -mx-2">
                    <!-- From Country input -->
                    <div class="flex flex-col mb-4 px-2 w-1/2">
                        <input type="text" id="fromCountry" class="input input-bordered input-primary" placeholder="From Country" bind:value={fromCountry} required />
                    </div>
                    <!-- From City input -->
                    <div class="flex flex-col mb-4 px-2 w-1/2">
                        <input type="text" id="fromCity" class="input input-bordered input-primary" placeholder="From City" bind:value={fromCity} required />
                    </div>
                    <!-- To Country input -->
                    <div class="flex flex-col mb-4 px-2 w-1/2">
                        <input type="text" id="toCountry" class="input input-bordered input-primary" placeholder="To Country" bind:value={toCountry} required />
                    </div>
                    <!-- To City input -->
                    <div class="flex flex-col mb-4 px-2 w-1/2">
                        <input type="text" id="toCity" class="input input-bordered input-primary" placeholder="To City" bind:value={toCity} required />
                    </div>
                </div>

                <br>

                <div class="flex flex-col mb-4 items-center">
                    <select id="hotelType" class="select select-bordered select-primary w-1/2" placeholder="Select Hotel Tier" bind:value={hotelType}>
                        <option value="1 star">1 star</option>
                        <option value="2 star">2 star</option>
                        <option value="3 star">3 star</option>
                        <option value="4 star">4 star</option>
                        <option value="5 star">5 star</option>
                    </select>
                </div>
                <div class="flex flex-col mb-4 items-center">
                    <input type="number" id="numberOfDays" class="input input-bordered input-primary w-1/2" placeholder="Enter number of days" bind:value={numberOfDays} min="1" required />
                </div>

                <br>

                <div class="flex flex-col mb-4 items-center">
                    <button type="submit" class="btn btn-outline btn-primary ">Get Estimated Cost of Travel</button>
                </div>
            </form>
        </div>
        
        <!-- Display estimated cost -->
        <div class="output-container">
            <h2 class="text-xl font-semibold">Estimated Cost of Trip</h2>
            <p>{responseText}</p>
        </div>
        
    </main>

    <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto px-4">
            <p class="text-center">&copy; 2024 EcoTravel. All rights reserved.</p>
        </div>
    </footer>
</div>
