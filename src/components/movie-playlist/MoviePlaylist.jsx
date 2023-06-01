import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {
	getRandomMovieName,
	getRandomSongName,
} from '../../services/fakerService';

import styles from './MoviePlaylist.module.css';
import {
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';

const MoviePlayList = () => {
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
					>
						Add To PlayList
					</Button>
				</Grid>
			</Grid>
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText
							primary={
								<Typography variant='h6' color='brown'>
									{getRandomMovieName()}
								</Typography>
							}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText
							primary={
								<Typography variant='h6' color='brown'>
									{getRandomMovieName()}
								</Typography>
							}
						/>
					</ListItemButton>
				</ListItem>
			</List>
		</div>
	);
};

export default MoviePlayList;
