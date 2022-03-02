import {writable} from 'svelte/store';
import {Themes} from './constants';

// theme = { set, update, subscribe };
export const theme = writable(Themes.Light);

export const currentPage = writable('');
export const isMenuOpen = writable(false);
