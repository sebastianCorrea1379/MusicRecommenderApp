import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';
import 'primeicons/primeicons.css';
import { Menubar } from 'primereact/menubar';


export const NavBar = ({ drawerWidth = 0}) => {

    const dispatch = useDispatch();

    const onLogout = ( ) => {
        dispatch( startLogout() );
    }

   

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            
        },
        {
            label: 'Buscar cancion',
            icon: 'pi pi-bolt',
        },
        {
            label: 'Recomendaciones',
            icon: 'pi pi-volume-up',
        },
    ];

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

                <Menubar model={items} style={{backgroundColor: '#262254', border: 'none'}}/>
                
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
