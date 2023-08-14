import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';
import 'primeicons/primeicons.css';
import { Menubar } from 'primereact/menubar';

export const NavBar = ({ drawerWidth = 0 }) => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    };

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            direction: '/home'
        },
        {
            label: 'Buscar cancion',
            icon: 'pi pi-bolt',
            direction: '/buscar'
        },
        {
            label: 'Recomendaciones',
            icon: 'pi pi-volume-up',
            direction: '/recomendacion'
        },
    ];

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Menubar
                        model={
                            items.map(item => ({
                                icon: item.icon,
                                label: item.label,
                            onClick: () => console.log('hola')
                        }))}
                        style={{ backgroundColor: '#262254', border: 'none' }}
                    />
                    <IconButton color='error' onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

// ...

// Define la función navigateTo para redirigir usando React Router
const navigateTo = (direction) => {
    // Redirige al usuario a la dirección proporcionada usando React Router
    // Asegúrate de tener configurado React Router en tu aplicación
    history.push(direction); // Ajusta esto según tu configuración de enrutamiento
};
