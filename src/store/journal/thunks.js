import { loadGenders } from "../../helpers/loadGenders";
import { setGenders } from "./journalSlice";

export const startLoadingUserInfo = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        if( !uid ) throw new Error('El uid del usuario no existe');

        const genders = await loadGenders( uid );

        dispatch( setGenders( genders ) );

    }
}
