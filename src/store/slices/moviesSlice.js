import { createSlice } from '@reduxjs/toolkit';

import { reset } from '../actions/reset';

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
		builder.addCase(reset, (state, action) => {
			return [];
		});
	},
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
