import { createSlice } from '@reduxjs/toolkit';

import { reset } from '../actions/reset';

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
	},
	extraReducers: (builder) => {
		builder.addCase(reset, (state, action) => {
			// we can explictly return something using the return statement
			// redux takes the return value and add it to that specific state.
			// this signals imer that the state is being mutated
			// in this case it sets the songs state to empty array
			return [];
		});
	},
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
