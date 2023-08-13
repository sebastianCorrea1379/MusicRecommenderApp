import { useState } from 'react';
import { useSelector } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

//*Buscar canciones
export const NothingSelectedView = () => {

  const { displayName } = useSelector(state => state.auth);
  const { genders } = useSelector( state => state.journal );
  //*Para buscar una cancion por el titulo
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

  //*para buscar una cancion por una palabra
  const [cancionP, setCancionP] = useState('');
  const [cancionesP, setCancionesP] = useState([])
  function handleSearchP(e){
    e.preventDefault()
    if(cancionP.trim()===''){
      alert('Debes ingresar algo')
    }
    setCancionP('')
    getSongP(cancionP)
  }

  async function getSongP(cancionP){
    try{
      let url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genders.list[1]}&api_key=02540433dfac9a53bb241680dd3a8842&limit=20&format=json`
      let data = await fetch(url)
      let res = await data.json()
      console.log(res)
      console.log(res.tracks.track)
      setCancionesP(res.tracks.track)
    }catch(error){
      console.log(`ups.. error: ${error}`)
    }
  }


   const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
   // Centrar verticalmente
    justifyContent: 'space-around',
    margin:'10px', // Centrar verticalmente // Centrar horizontalmente
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
  }


  return (
    <div style={containerStyle}>
      <div>
      <form onSubmit={handleSearch} style={formStyle}>
        <InputText type="text" className="p-inputtext-lg" placeholder="Titulo cancion" value={cancion} onChange={e => setCancion(e.target.value)} style={{ fontSize: '20px', margin: '10px', width: '100%' }}/>
        <Button label="Buscar" icon="pi pi-search" type='submit' style={{ backgroundColor: '#262254', color: '#ffffff', height: '50px', borderRadius: '3px', width: '35%', }}/>
      </form>
        {canciones.map((cancion, index) =>(
            <Card key={index} style={{marginBottom: '50px',  marginLeft: '40px'}}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt="Imagen de la cancion"/>
                <h2>{cancion.data.name}</h2>
                <p>Nombre del album: {cancion.data.albumOfTrack.name}</p>
                <p>Artista: {cancion.data.artists.items[0].profile.name}</p>
                <a href={cancion.data.uri}><Button label="Reproducir" type='submit' style={{ backgroundColor: '#262254', color: '#ffffff', height: '40px', borderRadius: '3px', width: '100%', marginBottom: '50px'}}/></a>
              </div>
              
            </Card>
        ))}
      </div>
      <div>
        <form onSubmit={handleSearchP} style={formStyle}>
          <InputText type="text" className="p-inputtext-lg" placeholder="Palabra" value={cancionP} onChange={e => setCancionP(e.target.value)} style={{ fontSize: '20px', padding: '10px', margin: '10px', width: '70%' }}/>
          <Button label="Buscar" icon="pi pi-search" type='submit' style={{ backgroundColor: '#262254', color: '#ffffff', height: '50px', borderRadius: '3px', width: '35%',}}/>
        </form>
        {cancionesP.map((cancion, index) =>(
            <Card key={index} style={{marginBottom: '50px',}}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src={cancion.image[2]['#text']} alt="Imagen de la cancion"/>
                <h2>{cancion.name}</h2>
                <p>Artista: {cancion.artist.name}</p>
                <a href={cancion.url}><Button label="Reproducir" type='button' style={{ backgroundColor: '#262254', color: '#ffffff', height: '40px', borderRadius: '3px', width: '100%', marginBottom: '10px'}}/></a>
              </div>
            </Card>
        ))}
      </div>
    </div>
  )
}