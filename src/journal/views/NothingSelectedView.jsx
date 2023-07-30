import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


export const NothingSelectedView = () => {

  const { displayName } = useSelector(state => state.auth);

  return (
    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
      className='animate__animated animate__fadeIn animate__faster' 
    >

      <Typography color='white' variant='h4'>{ displayName }</Typography>

        <Grid item xs={ 12 }>
            <StarOutline sx={{ fontSize: 100, color: 'white' }}/>
        </Grid>

        <Grid item xs={ 12 }>
            <Typography color='white' variant='h5'>En desarrollo</Typography>
        </Grid>

    </Grid>
  )
}
