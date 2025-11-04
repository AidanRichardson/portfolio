import { writable } from 'svelte/store';

export const selectedItem = writable<PreviewItem>();
export const selectedList = writable<List | null>(null);
export const showListModal = writable(false);
