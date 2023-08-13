import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views';
import { useSelector } from 'react-redux';
import { HomeViews } from '../views/HomeView';
import { Avatar } from 'primereact/avatar';

export const JournalPageHome = () => {


  return (
    <JournalLayout>
        <h1 style={{ textAlign: 'center', color: '#262254' }}>Canciones de tus generos favoritos</h1>
      <HomeViews />

    </JournalLayout>
    
  )
}
