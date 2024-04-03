<script lang="ts">
    export let data: any;
    const history = data.history;
    console.log(history)
</script>

<div class="container mx-auto p-4">
    {#each history as entry}
        <div class="card shadow-lg m-4">
            <div class="card-body">
                <h2 class="card-title">Trip from {entry.Data.origin} to {entry.Data.destination}</h2>
                <p>{entry.Data.overallSuggestion}</p>
                <div class="card-actions">
                    <ul>
                        {#each entry.Data.transportationModes as mode}
                            <li class="badge badge-outline">
                                {mode.mode} ({mode.travelTime}) - {mode.carbonEmission}
                            </li>
                        {/each}
                    </ul>
                </div>
                <h3>Tourist Places:</h3>
                <ul>
                    {#each entry.Data.tourist_places as place}
                        <li>{place}</li>
                    {/each}
                </ul>
            </div>
        </div>
    {/each}
</div>