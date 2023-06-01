import { Typography } from '@mui/material';
import MoviePlayList from './components/MoviePlaylist';

const App = () => {
	return (
		<div>
			<Typography variant='h4' color='peru'>
				FavSome Playlists!
			</Typography>
			<hr />
			<MoviePlayList />
		</div>
	);
};

export default App;
