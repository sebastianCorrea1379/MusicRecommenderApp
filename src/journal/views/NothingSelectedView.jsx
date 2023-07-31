import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';


export const NothingSelectedView = () => {

  const { displayName } = useSelector(state => state.auth);
  const [cancion, setCancion] = useState('');
  const [canciones, setCanciones] = useState([])
  function handleSearch(e){
    e.preventDefault()
    if(cancion.trim()===''){
      alert('Debes ingresar algo')
    }
    setCancion('')
    getSong(cancion)
  }
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '15aa000ae5msh0cf0f86c5996547p122ef5jsn2993d9a162b3',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  async function getSong(cancion){
    try{
      let url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=20&numberOfTopResults=5`;
      let data = await fetch(url, options)
      let res = await data.json()
      console.log(res.tracks.items)
      setCanciones(res.tracks.items)
    }catch (error){
      console.log(`ups.. error: ${error}`)
    }
  }

  return (
    <>
    <form onSubmit={handleSearch}>
      <input type='text' value={cancion} onChange={e => setCancion(e.target.value)}/>
      <button type='submit'>Buscar</button>
    </form>
    {canciones.map((cancion, index) =>(
      <>
        <div key={index}>
          <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt=''/>
          <h2>{cancion.data.name}</h2>
          <a href={cancion.data.url}><button>Play song</button></a>
        </div>
      </>
    ))}
    </>
  )
}
