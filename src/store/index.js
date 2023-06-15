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
			const songIndex = state.indexOf(action.payload);
			state.splice(songIndex, 1);
		},
		reset(state, action) {
			// we can explictly return something using the return statement
			// redux takes the return value and add it to that specific state.
			// this signals imer that the state is being mutated
			// in this case it sets the songs state to empty array
			return [];
		},
	},
});

const moviesSlice = createSlice({
	name: 'movies',
	initialState: [],
	reducers: {
		addMovie(state, action) {
			state.push(action.payload);
		},
		removeMovie(state, action) {
			const movieIndex = state.indexOf(action.payload);
			state.splice(movieIndex, 1);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(songsSlice.actions.reset, (state, action) => {
			return [];
		});
	},
});

const store = configureStore({
	reducer: {
		// key maps to the state object property
		songs: songsSlice.reducer,
		movies: moviesSlice.reducer,
	},
});

const { addSong, removeSong, reset } = songsSlice.actions;

const { addMovie, removeMovie } = moviesSlice.actions;

export { store, addSong, removeSong, addMovie, removeMovie, reset };
