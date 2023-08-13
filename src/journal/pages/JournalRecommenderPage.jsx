import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views';
import { useSelector } from 'react-redux';
import { RecommenderView } from '../views/RecommenderView';


export const JournalRecommenderPage = () => {


  return (
    <JournalLayout>

      <RecommenderView />

    </JournalLayout>
    
  )
}
