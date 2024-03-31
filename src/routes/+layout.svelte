<script lang="ts">
  import "tailwindcss/tailwind.css";
  import { goto } from "$app/navigation";
  
  let mode = "light"; // Initially set to light mode
  
  function toggleTheme() {
    mode = mode === "light" ? "dark" : "light"; // Toggle the theme on button click
  }
</script>

<header class="fixed top-0 z-50 w-full bg-white bg-opacity-10 backdrop-blur-md flex justify-between items-center py-4 px-6">
  <div class="flex items-center space-x-4">
    <a href="/" class="text-xl font-bold text-white">EcoTravel</a>
  </div>
  
  <div class="flex space-x-4">
    <button class="btn btn-outline btn-primary" on:click={() => goto('/')}>Home</button>
    <button class="btn btn-outline btn-primary" on:click={() => goto('/register')}>Register</button>
    <button class="btn btn-outline btn-primary" on:click={() => goto('/expense')}>Expense</button>
    <button class="btn btn-outline btn-primary" on:click={() => goto('/Travel_History')}>Travel History</button>
  </div>

  <!-- Toggle button for light/dark mode -->
  <button class="btn btn-outline btn-primary" on:click={toggleTheme}>
    {mode === "light" ? 'Dark Mode' : 'Light Mode'}
  </button>
</header>

<main class="p-6 mt-20 {mode === 'dark' ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-opacity-90 backdrop-filter backdrop-blur-md' : 'bg-white'}">
  <slot></slot>
</main>

<footer class="bg-gray-900 text-white py-8">
  <div class="container mx-auto px-4">
    <p class="text-center">&copy; 2024 EcoTravel. All rights reserved.</p>
  </div>
</footer>
