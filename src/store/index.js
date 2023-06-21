import { configureStore } from '@reduxjs/toolkit';

import { reset } from './actions/reset';
import { addMovie, removeMovie, moviesReducer } from './slices/moviesSlice';
import { addSong, removeSong, songsReducer } from './slices/songsSlice';

const store = configureStore({
	reducer: {
		// key maps to the state object property
		songs: songsReducer,
		movies: moviesReducer,
	},
});

export { store, addSong, removeSong, addMovie, removeMovie, reset };
