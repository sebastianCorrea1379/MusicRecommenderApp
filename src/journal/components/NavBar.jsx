import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';


export const NavBar = ({ drawerWidth = 0}) => {

    const dispatch = useDispatch();

    const onLogout = ( ) => {
        dispatch( startLogout() );
    }

  return (
    <AppBar 
        position='fixed'
        sx={{
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: {sm: `${drawerWidth}px`}
        }}
    >
        <Toolbar>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>Music Recommender App</Typography>

                <IconButton 
                    color='error' 
                    onClick={onLogout}
                >
                    <LogoutOutlined />
                </IconButton>

            </Grid>

        </Toolbar>

    </AppBar>
  )
}
