import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const inputData = {
    displayName: '',
    email: '',
    password: '',
}

const formValidations = {
  displayName: [(value) => value.length >=1 , 'El nombre es obligatorio'],
  email: [(value) => value.includes('@'), 'El email debe tener un @'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
}

const options = [
  "Pop", "Rock", "Hip-Hop/Rap", "Electrónica", "Rhythm and Blues",
  "Country", "Reggae", "Jazz", "Clásica", "Metal", "Indie", "Folk",
  "Blues", "Soul", "Funk", "Carranga", "Vallenato", "Joropo", "Reggaeton"
];

export const RegisterPage = () => {

  const dispatch = useDispatch();

  // Este es para saber si ya se le dio submit al form, se puso para poner en rojo las validaciones de los textField
  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  // Este es el booleano que controla invalidar los botones
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { formState, displayName, email, password, onInputChange, isFormValid, displayNameValid, emailValid, passwordValid } = useForm( inputData, formValidations );
  
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmited(true);

    if( !isFormValid || selectedOptions.length != 3 ) return

    dispatch(startCreatingUserWithEmailPassword(formState, selectedOptions));

  }

  //Esto es para las checkboxes

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      if (selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  return (

    <AuthLayout title="Crear cuenta">

      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster' >

        <Grid container>

          <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
              label= "Nombre completo" 
              type="text" 
              placeholder='Sebastian Correa'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={ !!displayNameValid && formSubmited }
              helperText={ displayNameValid }
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField 
            label= "Correo" 
            type="email" 
            placeholder='correo@google.com'
            fullWidth
            name='email'
            value={email}
            onChange={onInputChange}
            error={ !!emailValid && formSubmited }
            helperText={ emailValid }
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField 
            label= "Contraseña" 
            type="password" 
            placeholder='contraseña'
            fullWidth
            name='password'
            value={password}
            onChange={onInputChange}
            error={ !!passwordValid && formSubmited }
            helperText={ passwordValid }
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            {/* Esto es para las checkboxes */}
            <FormLabel component="legend" sx={{ textAlign: 'center', marginBottom: 2 }}>Generos musicales favoritos</FormLabel>
            <FormLabel component="legend" sx={{ textAlign: 'center', marginBottom: 2 }}>Selecciona 3 opciones:</FormLabel>
            <FormGroup>
              <Grid container spacing={2}>
                {options.map(option => (
                  <Grid item xs={12} sm={6} md={4} key={option}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedOptions.includes(option)}
                          onChange={() => handleOptionChange(option)}
                        />
                      }
                      label={option}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>

            <Typography variant="body2" color="error" sx={{ textAlign: 'center', marginTop: 2 }} display={selectedOptions.length != 3 && formSubmited ? "" : "none"} >
            Debes seleccionar 3 géneros
            </Typography>
          </Grid>

          

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} display={ !!errorMessage ? '' : 'none' }>
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button disabled={isCheckingAuthentication} type='submit' variant='contained' fullWidth >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Ingresar
            </Link>
          </Grid>

        </Grid>

      </form>
      
    </AuthLayout>
    
  )
}

