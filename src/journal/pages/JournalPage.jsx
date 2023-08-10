import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';


export const JournalPage = () => {

  const { genders } = useSelector( state => state.journal );

  return (
    <JournalLayout>

      <Typography>
        Tus géneros favoritos : 
        { JSON.stringify( genders.list, null, 2 ) };
      </Typography>

      <NothingSelectedView />

    </JournalLayout>
    
  )
}
