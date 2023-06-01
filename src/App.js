import { Typography, AppBar, Toolbar } from '@mui/material';
import MoviePlayList from './components/movie-playlist/MoviePlaylist';

import './App.css';
import SongsPlayList from './components/songs-playlist/SongsPlaylist';

const App = () => {
	return (
		<div>
			<AppBar position='fixed' color='primary'>
				<Toolbar>
					<Typography variant='h6'>FavSome Playlists!</Typography>
				</Toolbar>
			</AppBar>
			<section className='playlist-container'>
				<MoviePlayList />
				<hr />
				<SongsPlayList />
			</section>
		</div>
	);
};

export default App;
