import { Box, Toolbar } from '@mui/material';
import { NavBar } from '../components';


const drawerWidth = 0;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} >

        <NavBar drawerWidth={drawerWidth} />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar /> {/* Esto es para un espacio, sino sale esto tapado por la navbar*/}

            { children }

        </Box>

    </Box>
  )
}
