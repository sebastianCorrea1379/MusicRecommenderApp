import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadFavorites = async( uid = '' ) => {

    if( !uid ) throw new Error('El uid del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/songs/favorites` );
    const docs = await getDocs(collectionRef);
    
    const favorites = [];
    
    docs.forEach( doc => {
        favorites.push({id: doc.id, nombre: doc.data().nombre, artista: doc.data().artist, foto: doc.data().url});
    });
    
    
    console.log(favorites);

    return favorites;
    
}