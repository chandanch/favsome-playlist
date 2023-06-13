import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import {
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	IconButton,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import styles from './MoviePlaylist.module.css';

import { getRandomMovieName } from '../../services/fakerService';
import { addMovie, removeMovie } from '../../store';

const MoviePlayList = () => {
	const dispatch = useDispatch();

	const movies = useSelector((state) => {
		return state.movies;
	});

	const removeMovieFromList = (movie) => {
		dispatch(removeMovie(movie));
	};

	const displayMovieList = () => {
		const movieListItems = movies.map((movie) => {
			return (
				<ListItem
					disablePadding
					key={Math.random()}
					secondaryAction={
						<IconButton
							edge='end'
							color='danger'
							onClick={() => removeMovieFromList(movie)}
						>
							<DeleteIcon />
						</IconButton>
					}
				>
					<ListItemButton>
						<ListItemIcon>
							<MovieFilterIcon />
						</ListItemIcon>
						<ListItemText
							primary={
								<Typography variant='h6' color='brown'>
									{movie}
								</Typography>
							}
						/>
					</ListItemButton>
				</ListItem>
			);
		});

		return movieListItems;
	};

	const addMovieToList = () => {
		const movieName = getRandomMovieName();
		dispatch(addMovie(movieName));
	};

	return (
		<div className='container'>
			<Grid
				container
				alignItems='center'
				justifyContent='space-between'
				spacing={2}
			>
				<Grid item>
					<Typography variant='h4' color='primary'>
						Movie PlayList
					</Typography>
				</Grid>
				<Grid item>
					<Button
						className={styles.addBtn}
						variant='contained'
						color='primary'
						startIcon={<AddIcon />}
						onClick={addMovieToList}
					>
						Add To PlayList
					</Button>
				</Grid>
			</Grid>
			<List>{displayMovieList()}</List>
		</div>
	);
};

export default MoviePlayList;
