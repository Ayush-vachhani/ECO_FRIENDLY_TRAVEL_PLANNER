<script>
    import { onMount } from 'svelte';
    let source = "coimbatore";
    let destination = "chennai";
    let responseText = 'Loading...';

    async function callOpenAIEndpoint() {
        const response = await fetch('/server', {
            method: 'POST',
            body: JSON.stringify({ source, destination })
        });

        if (response.ok) {
            responseText = await response.text(); // Extract text directly
        } else {
            responseText = 'Failed to fetch response.';
        }
    }
</script>

<main>
    <h1>Gemini Response</h1>
    <input type="text" bind:value={source} />
    <input type="text" bind:value={destination} />
    <button on:click={callOpenAIEndpoint}>Get Response</button>
    <p>{responseText}</p>
</main>
