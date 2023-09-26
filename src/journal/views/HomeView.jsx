import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNewSongFavorite } from '../../store/journal/thunks';




export const HomeViews = () => {
    const dispatch = useDispatch(); 
    const { genders } = useSelector( state => state.journal );
    const [generoUno, setGeneroUno] = useState([]);
    const [generoDos, setGeneroDos] = useState([]);
    const [generoTres, setGeneroTres] = useState([]);
    const { uid } = useSelector( state => state.auth )
    
    async function getSongGenderOne(){
        try{
         if(genders.list[0]){
            let url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genders.list[0]}&api_key=02540433dfac9a53bb241680dd3a8842&limit=10&format=json`
            console.log(`tipo ${genders.list[0]}`)
            let data = await fetch(url)
            let res = await data.json()
            console.log(res.tracks.track)
            setGeneroUno(res.tracks.track)
         }
        }catch(error){
          console.log(`ups.. error: ${error}`)
        }
    }
    
    async function getSongGenderTwo(){
        try{
          if(genders.list[1]){
            let url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genders.list[1]}&api_key=02540433dfac9a53bb241680dd3a8842&limit=10&format=json`
            console.log(`${genders.list[1]}`)
            let data = await fetch(url)
            let res = await data.json()
            console.log(res.tracks.track)
            setGeneroDos(res.tracks.track)
          }
        }catch(error){
          console.log(`ups.. error: ${error}`)
        }
    }
    
    async function getSongGenderTree(){
        try{
         if(genders.list[2]){
            let url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genders.list[2]}&api_key=02540433dfac9a53bb241680dd3a8842&limit=10&format=json`
            let data = await fetch(url)
            let res = await data.json()
            console.log(res.tracks.track)
            setGeneroTres(res.tracks.track)
         }
        }catch(error){
          console.log(`ups.. error: ${error}`)
        }
    }
    
    useEffect(() => {
        getSongGenderOne();
        getSongGenderTwo();
        getSongGenderTree();
    }, [genders.list]);

   

    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
       
    };
    
   
    
    return(
        
       <div style={containerStyle}>
            <div>
                <h1 style={{ textAlign: 'center' }}>{genders.list[0]}</h1>
                {
                    generoUno.map((cancion, index) =>(
                        <Card key={index} style={{marginBottom: '50px', border: '2px solid #262254'}}>
                             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
                                <Button icon="pi pi-heart" rounded text raised severity="danger" aria-label="Favorite" onClick={ () => { console.log("Clicked:", cancion.artist.name, cancion.name, cancion.url);
                                     dispatch(addNewSongFavorite(uid, cancion.name, cancion.artist.name, cancion.url));}}/>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h2 style={{ textAlign: 'center' }}>{cancion.name}</h2>
                                <p>Artista: {cancion.artist.name}</p>
                                <a href={cancion.url}><Button label="Reproducir" type='button' style={{ backgroundColor: '#262254', color: '#ffffff', height: '40px', borderRadius: '3px', width: '100%', marginBottom: '10px'}}/></a>
                            </div>
                        </Card>
                    ))
                }
            </div>
            <div>
                <h1 style={{ textAlign: 'center' }}>{genders.list[1]}</h1>
                {
                    generoDos.map((cancion, index) =>(
                        <Card key={index} style={{marginBottom: '50px', marginLeft: '20px', marginRight: '20px', border: '2px solid #262254'}}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
                                <Button icon="pi pi-heart" rounded text raised severity="danger" aria-label="Favorite" onClick={ () => { console.log("Clicked:", cancion.artist.name, cancion.name, cancion.url);
                                     dispatch(addNewSongFavorite(uid, cancion.name, cancion.artist.name, cancion.url));}}/>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h2 style={{ textAlign: 'center' }}>{cancion.name}</h2>
                                <p>Artista: {cancion.artist.name}</p>
                                <a href={cancion.url}><Button label="Reproducir" type='button' style={{ backgroundColor: '#262254', color: '#ffffff', height: '40px', borderRadius: '3px', width: '100%', marginBottom: '10px'}}/></a>
                            </div>
                        </Card>
                    ))
                }
            </div>
            <div>
                <h1 style={{ textAlign: 'center' }}>{genders.list[2]}</h1>
                {
                    generoTres.map((cancion, index) =>(
                        <Card key={index} style={{marginBottom: '50px',border: '2px solid #262254' }}>
                             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
                                <Button icon="pi pi-heart" rounded text raised severity="danger" aria-label="Favorite" onClick={ () => { console.log("Clicked:", cancion.artist.name, cancion.name, cancion.url);
                                     dispatch(addNewSongFavorite(uid, cancion.name, cancion.artist.name, cancion.url));}}/>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h2 style={{ textAlign: 'center' }}>{cancion.name}</h2>
                                <p>Artista: {cancion.artist.name}</p>
                                <a target="_blank" href= {cancion.url} ><Button label="Reproducir" type='button' style={{ backgroundColor: '#262254', color: '#ffffff', height: '40px', borderRadius: '3px', width: '100%', marginBottom: '10px'}}/></a>
                            </div>
                        </Card>
                    ))
                }
            </div>
       </div>
    )

}