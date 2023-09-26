import { Card, Grid, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { useSelector } from 'react-redux';

export const JournalFavoritesPage = () => {
  const {favorites} = useSelector(state => state.journal);
  if (!Array.isArray(favorites)) {
    console.log('No tiene nada')
    return null; // O cualquier otra acción adecuada en caso de que favorites no esté definido como un array
  }
  return (
    <JournalLayout>
        <h1>Letras Favoritas</h1>
        <Grid container spacing={2}>
        {
        favorites.map(favorite => {
            return(
                <Grid item xs={12} sm={6} md={4} lg={3} key={favorite.id}>
                    <Card sx={{ minWidth: 275, border: '2px solid #262254', padding: '16px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                      <Typography variant="body2" style={{ whiteSpace: 'pre-line' }}>{favorite.nombre}</Typography>
                      <Typography variant="body2" style={{ whiteSpace: 'pre-line' }}>{favorite.artista}</Typography>
                    </Card>

                </Grid>
            )
            
        })
      }
        </Grid>
    </JournalLayout>
    
  )
}
