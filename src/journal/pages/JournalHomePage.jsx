import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views';
import { useSelector } from 'react-redux';
import { Avatar } from 'primereact/avatar';
import { Grid } from "@mui/material";
import { HomeViews } from '../views/HomeView';

export const JournalPageHome = () => {


  return (
    <JournalLayout>
      <Grid className='animate__animated animate__fadeIn animate__faster'>
          
        <h1 style={{ textAlign: 'center', color: '#262254' }}>Recomendaciones de canciones de tus géneros favoritos</h1>
        <HomeViews />
              
      </Grid>
    </JournalLayout>
    
  )
}
