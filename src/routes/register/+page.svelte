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

<style>
    .card{
        width: 400px;
    }

    .card-title{
        text-align: center;
    }
</style>

<div class="flex justify-center items-center h-screen">
    <div class="card mx-auto max-w-2xl shadow-2xl bg-base-100"> <!-- Adjusting max-w-2xl for a wider card body -->
        <div class="card-body px-6 py-8"> <!-- Adding padding for the card body -->
            <h2 class="text-center text-xl font-bold">Login</h2>
            <form class="space-y-6"> <!-- Adjusting space between form controls -->
                <div class="form-control">
                    <label class="label" for="email">Username</label>
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

                <div class="flex justify-between items-center">
                    <button on:click={register} class="btn btn-primary">Register</button>
                    <div class="w-4"></div> <!-- Adding space between buttons -->
                    <button on:click={login} class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
