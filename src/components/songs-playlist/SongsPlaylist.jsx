import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import styles from './SongsPlaylist.module.css';
import { Grid } from '@mui/material';

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
		</div>
	);
};

export default SongsPlayList;
