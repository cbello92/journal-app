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

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
    
        default:
            return state;
    }
}