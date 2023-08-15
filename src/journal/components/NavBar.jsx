import { LogoutOutlined, LibraryMusicOutlined } from '@mui/icons-material';
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';
import { useNavigate } from 'react-router-dom';

export const NavBar = ({ drawerWidth = 0 }) => {

    const { displayName } = useSelector( state => state.auth )
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onHome = () => {
        navigate('/home', {
            replace: true
        });
    }

    const onBuscador = () => {
        navigate('/buscar', {
            replace: true
        });
    }

    const onFavoritas = () => {
        navigate('/favorites', { 
            replace: true
        });
    }

    const onRecomendador = () => {
        navigate('/recomendacion', {
            replace: true
        });
    }

    const onLogout = () => {
        dispatch(startLogout());
    };

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

                    <IconButton style={{color: 'white'}} onClick={onHome}>
                        <LibraryMusicOutlined />
                        <Typography>{displayName}</Typography>
                    </IconButton>

                    <Button color="inherit" onClick={onHome}>Home</Button>
                    <Button color="inherit" onClick={onBuscador}>Buscador</Button>
                    <Button color="inherit" onClick={onFavoritas}>Favoritas</Button>
                    <Button color="inherit" onClick={onRecomendador}>Recomentador</Button>
                    
                    <IconButton color='error' onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
