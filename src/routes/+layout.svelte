<script lang="ts">
    import "tailwindcss/tailwind.css";
    import {goto} from "$app/navigation";
    import {page} from "$app/stores";
    import {currentUser, pb} from "$lib/pb";
    let mode = "light";

    function toggleTheme() {
        mode = mode === "light" ? "dark" : "light";
    }
    function logout(){
        pb.authStore.clear()
        goto('/register')
    }
    const routes = {
        '/': 'Home',
        '/expense': 'Expense',
        '/Travel_History': 'Travel History'
    }
</script>

<header
    class="fixed top-0 z-50 w-full border-b border-gray-400 bg-white bg-opacity-10 backdrop-blur-md flex justify-between items-center py-4 px-6">
    <div class="flex items-center space-x-4">
        <button class="text-xl font-bold text-white" on:click={() => goto('/')}>EcoTravel</button>
    </div>

    <div class="flex space-x-4">
        {#each Object.entries(routes) as [path, name]}
            {#if $page.url.pathname !== path && $currentUser}
                <button class="btn btn-outline btn-primary" on:click={() => goto(path)}>{name}</button>
            {/if}
        {/each}
        {#if $currentUser}
            <button class="btn btn-outline btn-primary" on:click={logout}>Logout</button>
        {:else if $page.url.pathname !== '/register'}
            <button class="btn btn-outline btn-primary" on:click={() => goto('/register')}>Register</button>
        {/if}
    </div>

    <!-- Toggle button for light/dark mode -->
    <button class="btn btn-outline btn-primary" on:click={toggleTheme}>
        {mode === "light" ? 'Dark Mode' : 'Light Mode'}
    </button>
</header>

<main
    class="p-6 mt-20 {mode === 'dark' ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-opacity-90 backdrop-filter backdrop-blur-md' : 'bg-white'}">
    <slot></slot>
</main>

<footer class="bg-gray-900 text-white py-8 bottom-0 w-full">
    <div class="container mx-auto px-4">
        <p class="text-center">&copy; 2024 EcoTravel. All rights reserved.</p>
    </div>
</footer>

