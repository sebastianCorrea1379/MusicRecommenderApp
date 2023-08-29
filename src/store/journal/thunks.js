import { loadGenders } from "../../helpers/loadGenders";
import { isLoading, setActualLetter, setAllLetters, setGenders, setLetter } from "./journalSlice";
import { FirebaseDB } from "../../firebase/config";
import { collection, setDoc, doc, getDocs } from 'firebase/firestore/lite';
import { setSongs } from '../../store/journal/journalSlice';
import swal from 'sweetalert'
import 'primeicons/primeicons.css';
import axios from 'axios';
import { loadLetters } from "../../helpers/loadLetters";

export const startLoadingUserInfo = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        if( !uid ) throw new Error('El uid del usuario no existe');

        const genders = await loadGenders( uid );
        const letters = await loadLetters( uid );

        dispatch( setGenders( genders ) );
        dispatch( setAllLetters( letters ) );

    }
}

//*para agregar una nueva cancion a favoritos
export const addNewSongFavorite = (uid, nombre, artiste, url) =>{
    return async(dispatch) =>{
        console.log(`este es el nombre ${nombre}`)
        const userId = uid;
        const favoriteData = {
            artist: artiste,
            nombre: nombre,
            url: url,
        };
        const userSongsRef = collection(FirebaseDB, `${userId}/songs/favorites`);
        const querySnapshot = await getDocs(userSongsRef);
        const existingSong = querySnapshot.docs.find(doc =>
          doc.data().nombre === nombre && doc.data().artist === artiste
        );
        if(existingSong){
            swal(
                {
                    title: "Revisa tu lista de favoritos",
                    text: `Ya tienes la canción ${nombre} en tu lista de favoritos`,
                    buttons: "Aceptar",
                    timer: "3000"
                }
            )
            return;
        }

        const newDoc = doc(collection(FirebaseDB, `${userId}/songs/favorites`));
        await setDoc(newDoc, favoriteData);
        favoriteData.id = newDoc.id;
        dispatch(setSongs(favoriteData));
    
    }

}

export const startGenerateNewLetter = (seedText = "Hola mundo") => {
    return async (dispatch, getState) => {

        dispatch(isLoading());
        const { uid } = getState().auth;

        try {
            const response = await axios.post('http://localhost:5000/generate_text', { seed_text: seedText });
            const newLetter = {letter: response.data.generated_text};
            const newDoc = doc( collection( FirebaseDB, `${ uid }/generator/letters` ) );
            newLetter.id = newDoc.id;
            await setDoc( newDoc, newLetter );
            dispatch(setLetter(newLetter));
            dispatch(setActualLetter(newLetter));

        } catch (error) {
            console.error('Error generating text:', error);
        }
    }
}

