import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
	name: 'songs',
	initialState: [],
	// note: Reducers can manage only its own state (songs in this case)
	// as configured in the configureStore() it does not have access to the entire state
	reducers: {
		addSong(state, action) {
			state.push(action.payload);
		},
		removeSong(state, action) {
			state.pop(action.payload);
		},
	},
});

const store = configureStore({
	reducer: {
		// key maps to the state object property
		songs: songsSlice.reducer,
	},
});

const { addSong, removeSong } = songsSlice.actions;

export { store, addSong, removeSong };
