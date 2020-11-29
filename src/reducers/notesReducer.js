/*
{
    notes: [],
    active: null,
    active: {
        id: 'KHSDJAS12823',
        title: '',
        body: '',
        imageUrl: '',
        date: 123214324
    }
}
*/

import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.noteActive: 
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesAddNew:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdated: 
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? action.payload.note : note)
            }

        case types.noteDelete: 
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload)
            }

        case types.noteLogoutCleaning: 
            return {
                ...state,
                active: null,
                notes: []
            }
    
        default:
            return state;
    }
}