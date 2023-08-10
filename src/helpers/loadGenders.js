import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadGenders = async( uid = '' ) => {

    if( !uid ) throw new Error('El uid del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/recommender/genders` );
    const docs = await getDocs(collectionRef);
    
    const genders = {};
    
    docs.forEach( doc => {
        genders["id"] = (doc.id);
        genders["list"] = (doc.data().genders);
    });

    return genders;
    
}