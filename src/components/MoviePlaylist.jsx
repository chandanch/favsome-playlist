import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const MoviePlayList = () => {
	return (
		<div className='container'>
			<div>
				<Typography variant='h4' color='primary'>
					Movie PlayList
				</Typography>
				<Button
					variant='contained'
					color='primary'
					startIcon={<AddIcon />}
				>
					Add PlayList
				</Button>
			</div>
		</div>
	);
};

export default MoviePlayList;
