import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        genders: {
            id: '',
            list: []
        },
        songs: {
            id: '',
            list: []
        },
        tags: {
            id: '',
            list: []
        },
        isSaving: false,
    },
    reducers: {
        isSaving: ( state ) => {
            state.isSaving = true;
        },
        setUid: (state, { payload } ) => {
            state.uid = payload;
        },
        setGenders: (state, { payload } ) => {
            state.genders = payload;
        },
        setSongs: (state, { payload } ) => {
            state.songs = payload;
        },
        setTags: (state, { payload } ) => {
            state.tags = payload;
        },
        setTotalUser: (state, { payload } ) => {
            state.uid = payload.uid;
            state.genders = payload.genders;
            state.songs = payload.songs;
            state.tags = payload.tags;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setUid, setGenders, setSongs, setTags, setTotalUser, isSaving } = journalSlice.actions;