import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AudioFileIcon from '@mui/icons-material/AudioFile';

import styles from './SongsPlaylist.module.css';
import {
	Card,
	CardActions,
	CardContent,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import { getRandomSongName } from '../../services/fakerService';
import { addSong } from '../../store';

const SongsPlayList = () => {
	const dispatch = useDispatch();

	const addSongToList = () => {
		dispatch(addSong(getRandomSongName()));
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
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<AudioFileIcon />
								</ListItemIcon>
								<ListItemText
									primary={
										<Typography
											variant='h6'
											color='darkgreen'
										>
											{getRandomSongName()}
										</Typography>
									}
								/>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<AudioFileIcon />
								</ListItemIcon>
								<ListItemText
									primary={
										<Typography
											variant='h6'
											color='darkgreen'
										>
											{getRandomSongName()}
										</Typography>
									}
								/>
							</ListItemButton>
						</ListItem>
					</List>
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
