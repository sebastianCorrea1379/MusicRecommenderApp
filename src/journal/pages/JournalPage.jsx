import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';


export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sed nobis adipisci unde suscipit blanditiis, accusantium assumenda modi dolores? Similique in hic id, recusandae provident consequuntur odio vero? Facere, impedit.</Typography> */}

      <NothingSelectedView />

    </JournalLayout>
    
  )
}
