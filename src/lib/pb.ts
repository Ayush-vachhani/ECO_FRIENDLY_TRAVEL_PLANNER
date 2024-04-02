import {writable} from "svelte/store";
import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");
export let currentUser = writable(pb.authStore.model);
pb.authStore.onChange((auth) => {
    console.log("AuthStore updated : " + auth);
    currentUser.set(pb.authStore.model);
});