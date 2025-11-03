import { writable } from 'svelte/store';

export const selectedItem = writable<Item>();
export const selectedList = writable<List | null>(null);
export const showListModal = writable(false);
