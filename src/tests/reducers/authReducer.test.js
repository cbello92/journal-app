import { authReducer } from "../../reducers/authReducer";
import { types } from '../../types/types';

describe('Pruebas en el authReducer', () => {
    test('debe realizar el login', () => {
        const initialState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Camilo'
            }
        }

        const state = authReducer(initialState, action);

        expect(state).toEqual({
            uid: 'abc',
            name: 'Camilo'
        })
    })
    

    test('debe realizar el logout', () => {
        const initialState = {
            uid: 'abc',
            name: 'Camilo'
        };

        const action = {
            type: types.logout,
        }

        const state = authReducer(initialState, action);

        expect(state).toEqual({})
    })


    test('no debe hacer cambios en el state', () => {
        const initialState = {
            uid: 'abc',
            name: 'Camilo'
        };

        const action = {
            type: 'sdasd',
        }

        const state = authReducer(initialState, action);

        expect(state).toEqual(initialState)
    })

});