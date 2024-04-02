import type {Handle} from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import {redirect} from "@sveltejs/kit";
const pb = new PocketBase('http://127.0.0.1:8090');

export const handle: Handle = async ({event, resolve}) => {
	// console.log("server hook invoked");
	// console.log("AuthStore validity : " + pb.authStore.isValid);
	// console.log("Token : " + pb.authStore.token);
	// if(pb.authStore.isValid){
	// 	redirect(300, '/register');
	// }
	
	return resolve(event);
};