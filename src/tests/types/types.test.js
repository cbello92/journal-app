import { types }  from "../../types/types";

describe('Pruebas con nuestros types', () => {
    test('Debe de tener estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',   
            logout: '[Auth] Logout',   
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
            notesAddNew: '[Notes] New Note',
            noteActive: '[Notes] Set Active Note',
            notesLoad: '[Notes] Load Notes',
            notesUpdated: '[Notes] Updated Note saved',
            notesFileUrl: '[Notes] Updated Image Url',
            noteDelete: '[Notes] Deleted Note',
            noteLogoutCleaning: '[Notes] Logout Cleaning',
        })
    })
    
});