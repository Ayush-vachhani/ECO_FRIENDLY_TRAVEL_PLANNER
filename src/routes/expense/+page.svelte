<script lang="ts">
    import {goto} from "$app/navigation";

    let residing_city = ""
    let responseText = "";

</script>

<div id="app">
    <header class="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <div class="flex space-x-4">
            <button class="btn btn-outline btn-primary" on:click={() => goto('/')}>Home</button>
            <button class="btn btn-outline btn-primary">Expense</button>
        </div>
    </header>

    <main class="p-6">
        <h1 class="text-3xl font-bold mb-4">Eco-Friendly Travel Planner - Expense page</h1>

        <br><br>

        <div class="form-container">
            <!-- Form to collect details -->
            <form>
                <div class="flex flex-wrap mb-4 -mx-2">
                    <div class="flex flex-col mb-4 px-2 w-1/2">
                        <input bind:value={residing_city} class="input input-bordered input-primary" id="toCity"
                               placeholder="City"
                               required type="text"/>
                    </div>
                </div>

                <br>

                <div class="flex flex-col mb-4 items-center">
                    <select class="select select-bordered select-primary w-1/2"
                            id="hotelType" placeholder="Select Hotel Tier">
                        <option value="1 star">1 star</option>
                        <option value="2 star">2 star</option>
                        <option value="3 star">3 star</option>
                        <option value="4 star">4 star</option>
                        <option value="5 star">5 star</option>
                    </select>
                </div>
                <div class="flex flex-col mb-4 items-center">
                    <input class="input input-bordered input-primary w-1/2" id="numberOfDays"
                           min="1" placeholder="Enter number of days" required type="number"/>
                </div>

                <br>

                <div class="flex flex-col mb-4 items-center">
                    <button class="btn btn-outline btn-primary " type="submit">Get Estimated Cost of Travel</button>
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
