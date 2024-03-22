<script lang="ts">
    import { enhance } from '$app/forms';
    let username = '';
    let email = '';
    let password = '';
    import {pb} from "$lib/pb";
    import {goto} from "$app/navigation";

    export let form:registerForm;
    interface registerForm {
        email: string;
        password: string;
        username: string;
    }
    async function register(){
        const data = {
            "username": username,
            "email": email,
            "emailVisibility": true,
            "password": password,
            "passwordConfirm": password,
        };
        await pb.collection('users').create(data);
        await pb.collection('users').authWithPassword(email, password);
        await goto('/');
    }
    async function login(){
        await pb.collection('users').authWithPassword(email, password);
        await goto('/');
    }
</script>

<div class="card mx-auto max-w-sm shadow-2xl bg-base-100">
    <div class="card-body">
        <h2 class="card-title text-center">Login</h2>

        <form class="space-y-4" on:submit|preventDefault>
            <div class="form-control">
                <label class="label" for="email">UserName</label>
                <input class="input input-bordered" name="username" bind:value={username}>
            </div>
            <div class="form-control">
                <label class="label" for="email">Email</label>
                <input type="email" class="input input-bordered" bind:value={email}>
            </div>

            <div class="form-control">
                <label class="label" for="password">Password</label>
                <input type="password" class="input input-bordered" bind:value={password}>
            </div>

            <button on:click={register} class="btn btn-primary">Register</button>
            <button on:click={login} class="btn btn-primary">Login</button>
        </form>
    </div>
</div>