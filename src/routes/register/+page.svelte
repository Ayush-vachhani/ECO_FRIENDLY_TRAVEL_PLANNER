<script lang="ts">
    import {pb} from "$lib/pb";
    import {goto} from "$app/navigation";

    let username = '';
    let email = '';
    let password = '';
    let isLoggingIn = true;

    async function register() {
        if (!isLoggingIn) {
            const data = {
                "username": username,
                "email": email,
                "emailVisibility": true,
                "password": password,
                "passwordConfirm": password,
            };
            try {
                await pb.collection('users').create(data);
            }
            catch (e) {
                alert("Invalid credentials or record not found")
            }
            finally {
                return;
            }
        }
        try {
            await pb.collection('users').authWithPassword(email, password);
            await goto('/');
        }
        catch (e) {
            alert("Invalid credentials or record not found");
        }
    }
</script>

<style>
    .card {
        width: 400px;
    }
</style>

<div class="flex justify-center items-center h-screen">
    <div class="card mx-auto max-w-2xl shadow-2xl bg-base-100 bg-transparent"> <!-- Adjusting max-w-2xl for a wider card body -->
        <div class="card-body px-6 py-8"> <!-- Adding padding for the card body -->
            <h2 class="text-center text-xl font-bold">Login</h2>
            <form class="space-y-6">
                {#if !isLoggingIn}
                <div class="form-control">
                    <label class="label" for="email">Username</label>
                    <input bind:value={username} class="input input-bordered bg-transparent" name="username">
                </div>
                {/if}
                <div class="form-control">
                    <label class="label" for="email">Email</label>
                    <input bind:value={email} class="input input-bordered bg-transparent" type="email">
                </div>

                <div class="form-control">
                    <label class="label" for="password">Password</label>
                    <input bind:value={password} class="input input-bordered bg-transparent" type="password">
                </div>

                <div class="flex justify-between items-center">
                    <button class="btn btn-primary" on:click={register}>Login</button>
                    <div class="w-4"></div>
                    <button class="btn btn-primary" on:click={() => isLoggingIn = !isLoggingIn}>
                        Switch to
                        {#if isLoggingIn}
                            Register
                        {:else}
                            Login
                        {/if}
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
