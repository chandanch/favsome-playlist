import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './SongsPlaylist.module.css';
import {
	Card,
	CardActions,
	CardContent,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getRandomSongName } from '../../services/fakerService';
import { addSong, removeSong } from '../../store';

const SongsPlayList = () => {
	// useDispatch: to access dispatch function
	const dispatch = useDispatch();

	// used to access redux store state
	// pass a function to useSelector that can return the needed state(s) from redux store
	const songs = useSelector((state) => {
		return state.songs;
	});

	const addSongToList = () => {
		// 1. call the action creation function with payload which returns the action obj
		// 2. invoke the dispatch function with the action object
		// 3. specific reducer then handles the action
		dispatch(addSong(getRandomSongName()));
	};

	const removeSongFromList = (song) => {
		dispatch(removeSong(song));
	};

	const displaySongList = () => {
		const songsList = songs.map((song) => {
			return (
				<ListItem
					disablePadding
					key={Math.random()}
					secondaryAction={
						<IconButton
							edge='end'
							color='danger'
							onClick={() => removeSongFromList(song)}
						>
							<DeleteIcon />
						</IconButton>
					}
				>
					<ListItemButton>
						<ListItemIcon>
							<AudioFileIcon />
						</ListItemIcon>
						<ListItemText
							primary={
								<Typography variant='h6' color='darkgreen'>
									{song}
								</Typography>
							}
						/>
					</ListItemButton>
				</ListItem>
			);
		});

		return songsList;
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
						Songs PlayList
					</Typography>
				</Grid>
				<Grid item>
					<Button
						className={styles.addBtn}
						variant='contained'
						color='secondary'
						startIcon={<AddIcon />}
						onClick={addSongToList}
					>
						Add To PlayList
					</Button>
				</Grid>
			</Grid>
			<br />
			<Card className={styles.cardContainer}>
				<CardContent>
					<List>{displaySongList()}</List>
				</CardContent>
				<CardActions>
					<Button size='small' color='secondary'>
						Add New
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default SongsPlayList;
