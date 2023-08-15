import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views';
import { Grid } from "@mui/material";

export const JournalSearchPage = () => {


  return (
    <JournalLayout>
      <Grid className='animate__animated animate__fadeIn animate__faster'>
          
        <NothingSelectedView />
            
      </Grid>
    </JournalLayout>
    
  )
}
