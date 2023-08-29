import { JournalLayout } from '../layout/JournalLayout';
import { Card, Grid, Typography } from "@mui/material";
import { useSelector } from 'react-redux';


export const LettersPage = () => {

  const {letters} = useSelector(state => state.journal)

  return (
    <JournalLayout>

      <h1>Letras Generadas</h1>
      <Grid container spacing={2}>

      {
        letters.map(letter => {
            return(
                <Grid item xs={12} sm={6} md={4} lg={3} key={letter.id}>
                    <Card sx={{minWidth: 275,border: '2px solid darkblue',}}>
                        <Typography variant="body2" style={{ whiteSpace: 'pre-line' }}> {letter.letter} </Typography>
                    </Card>
                </Grid>
            )
            
        })
      }

      </Grid>

    </JournalLayout>
    
  )
}