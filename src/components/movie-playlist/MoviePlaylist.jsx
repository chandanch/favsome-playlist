import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import styles from './MoviePlaylist.module.css';
import { Grid } from '@mui/material';

const MoviePlayList = () => {
	return (
		<div className='container'>
			{/* <div className={styles.moviePlayListContainer}>
				<Typography variant='h4' color='primary'>
					Movie PlayList
				</Typography>
				<Button
					className={styles.addBtn}
					variant='contained'
					color='primary'
					startIcon={<AddIcon />}
				>
					Add To PlayList
				</Button>
			</div> */}
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
		</div>
	);
};

export default MoviePlayList;
