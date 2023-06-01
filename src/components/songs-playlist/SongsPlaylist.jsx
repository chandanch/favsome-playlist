import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import styles from './SongsPlaylist.module.css';
import {
	Card,
	CardActions,
	CardContent,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import { getRandomSongName } from '../../services/fakerService';

const SongsPlayList = () => {
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
					>
						Add To PlayList
					</Button>
				</Grid>
			</Grid>
			<br />
			<Card>
				<CardContent>
					<List>
						<ListItem disablePadding>
							<ListItemButton>
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
