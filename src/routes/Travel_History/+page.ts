import {pb} from "$lib/pb";
import type {PageLoad} from './$types';

export const load: PageLoad = async ({params}) => {
    return {
        history: await pb.collection('History').getFullList(),
    };
};