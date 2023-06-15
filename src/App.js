import { Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import MoviePlayList from './components/movie-playlist/MoviePlaylist';

import './App.css';
import SongsPlayList from './components/songs-playlist/SongsPlaylist';
import { reset } from './store';
import { useDispatch } from 'react-redux';

const App = () => {
	// // get initial state
	// console.log(store.getState());
	// // dispatch action
	// store.dispatch({
	// 	type: 'songs/addSong', // format: sliceName/reducerfuncName
	// 	payload: 'NEEW Song',
	// });
	// // verify the updated state
	// console.log(JSON.stringify(store.getState()));

	const dispatch = useDispatch();

	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='fixed' color='primary'>
					<Toolbar>
						<Typography variant='h6' sx={{ flexGrow: 1 }}>
							FavSome Playlists!
						</Typography>
						<Button
							variant='contained'
							color='settermap'
							onClick={() => dispatch(reset())}
						>
							Reset Playlists
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<section className='playlist-container'>
				<MoviePlayList />
				<hr />
				<SongsPlayList />
			</section>
		</div>
	);
};

export default App;
