import { useState } from 'react';
import { JournalLayout } from '../layout/JournalLayout';
import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { startGenerateNewLetter } from '../../store/journal/thunks';
import { useForm } from '../../hooks';

const initialForm = {
  seedText: "",
}

export const JournalRecommenderPage = () => {

  const { seedText, onInputChange, onResetForm } = useForm(initialForm);

  const {actualLetter, isLoading} = useSelector(state => state.journal)

  const dispatch = useDispatch();

  const handleGenerateText = async (event) => {
      event.preventDefault();
      dispatch(startGenerateNewLetter(seedText));
  };


  return (
    <JournalLayout>

      <h1>Generador de Letras</h1>

        <Grid className='animate__animated animate__fadeIn animate__faster'>

          <form onSubmit={handleGenerateText}>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label= "Semilla" 
                type="text" 
                placeholder='Te amo mas que a nadie'
                fullWidth
                name='seedText'
                value={seedText}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button disabled={isLoading} type='submit' variant='contained' fullWidth >
                Crear letra
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
                  >
                  
                  <CircularProgress color='warning' />
                  
                </Grid>
              : <>
                <h2>Generated Text</h2>
                <Typography variant="body2" style={{ whiteSpace: 'pre-line' }}>{actualLetter?.letter}</Typography>
              </>
            }
        </div>
            
        </Grid>

    </JournalLayout>
    
  )
}
