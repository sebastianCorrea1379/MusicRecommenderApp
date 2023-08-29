import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadLetters = async( uid = '' ) => {

    if( !uid ) throw new Error('El uid del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/generator/letters` );
    const docs = await getDocs(collectionRef);
    
    const letters = [];
    
    docs.forEach( doc => {
        letters.push({id: doc.id, letter: doc.data().letter});
    });
    
    
    console.log(letters);

    return letters;
    
}