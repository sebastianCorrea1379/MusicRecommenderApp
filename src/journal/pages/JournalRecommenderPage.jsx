import { useState } from 'react';
import { JournalLayout } from '../layout/JournalLayout';
import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { startGenerateNewLetter } from '../../store/journal/thunks';
import { useForm } from '../../hooks';

const initialForm = {
  seedText: "",
}

const formValidations = {
  seedText: [(value) => value.length >= 10, 'La frase debe tener más de 10 letras'],
}

export const JournalRecommenderPage = () => {

  const [formSubmited, setFormSubmited] = useState(false);

  const { seedText, onInputChange, onResetForm, isFormValid, seedTextValid } = useForm(initialForm, formValidations);

  const {actualLetter, originalLetter, isLoading} = useSelector(state => state.journal)

  const dispatch = useDispatch();

  const handleGenerateText = async (event) => {
      event.preventDefault();
      setFormSubmited(true);

      if( !isFormValid ) return

      dispatch(startGenerateNewLetter(seedText));
  };


  return (
    <JournalLayout>

      <h1>Generador de Letras</h1>

        <Grid className='animate__animated animate__fadeIn animate__faster'>

          <form onSubmit={handleGenerateText}>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label= "Frase de inspiración" 
                type="text" 
                placeholder='Te amo mas que a nadie'
                fullWidth
                name='seedText'
                value={seedText}
                onChange={onInputChange}
                error={ !!seedTextValid && formSubmited }
                helperText={ seedTextValid }
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button disabled={isLoading} type='submit' variant='contained' fullWidth >
                Generar texto
              </Button>
            </Grid>

          </form>

        <div>
            {
              isLoading
              ? <Grid 
                  container 
                  direction='row' 
                  justifyContent='center'
                  sx={{ mt: 2 }}
                  >
                  
                  <CircularProgress color='warning' />
                  
                </Grid>
              : <>
                <Grid container spacing={8}>
                  <Grid item xs={12} sm={6}>
                    <h2>Texto Corregido</h2>
                    <Typography variant="body2" style={{ whiteSpace: 'pre-line' }}>{actualLetter?.letter}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <h2>Texto Generado</h2>
                    <Typography variant="body2" style={{ whiteSpace: 'pre-line' }}>{originalLetter?.letter}</Typography>
                  </Grid>
                </Grid>
              </>
            }
        </div>
            
        </Grid>

    </JournalLayout>
    
  )
}
