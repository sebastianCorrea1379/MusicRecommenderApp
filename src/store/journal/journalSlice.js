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
        favorites: {
            id: '',
            list: []
        },
        tags: {
            id: '',
            list: []
        },
        isSaving: false,
        isLoading: false,
        letters: [],
        actualLetter: {
            id: "",
            letter: "",
        },
        originalLetter: {
            letter: ""
        }
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
        setFavorites: (state, { payload } ) => {
            state.favorites = payload;
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
        isLoading: (state) => {
            state.isLoading = true;
        },
        setAllLetters: (state, {payload}) => {
            state.letters = [...payload];
        },
        setLetter: (state, {payload}) => {
            state.letters.push(payload);
        },
        setActualLetter: (state, {payload}) => {
            state.actualLetter = {...payload};
            state.isLoading = false;
        },
        setOriginalLetter: (state, {payload}) => {
            state.originalLetter = {...payload};
        },
        isNotLoading: (state) => {
            state.isLoading = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setUid, setGenders, setSongs, setTags, setTotalUser, isSaving, isLoading, setAllLetters, setLetter, setActualLetter, isNotLoading, setOriginalLetter, setFavorites } = journalSlice.actions;