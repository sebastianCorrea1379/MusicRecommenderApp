import { JournalLayout } from '../layout/JournalLayout';
import { RecommenderView } from '../views/RecommenderView';
import { Grid } from "@mui/material";


export const JournalRecommenderPage = () => {


  return (
    <JournalLayout>
        <Grid className='animate__animated animate__fadeIn animate__faster'>
          
          <RecommenderView />
            
        </Grid>
    </JournalLayout>
    
  )
}
