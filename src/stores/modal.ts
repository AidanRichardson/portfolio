import { writable } from 'svelte/store';

export const showPreviewModal = writable(false);
export const selectedItem = writable<Item | null>(null);
export const selectedList = writable<List | null>(null);
export const showListModal = writable(false);
