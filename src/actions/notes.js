import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const document = await db.collection(`${uid}/journal/notes`).add(newNote);


        dispatch(activeNote(document.id, newNote));
        dispatch( addNewNote( document.id, newNote ) );

    }
}

export const activeNote = (id, note) => {
    return {
        type: types.noteActive,
        payload: {
            id, 
            ...note
        } 
    }
}


export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})


export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))
    }
}

export const setNotes = (notes) => {
    return {
        type: types.notesLoad,
        payload: notes
    }
}

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if(!note.url) {
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, noteToFirestore));

        Swal.fire('Saved', note.title, 'success');

    }
}

export const refreshNote = (id, note) => {
    return {
        type: types.notesUpdated,
        payload: {
            id, 
            note: {
                id, 
                ...note
            }
        }
    }
}

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: note } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        });

        const fileUrl = await fileUpload(file);
        note.url = fileUrl;

        dispatch(startSaveNote(note))

        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deletNote(id));
    }
}

export const deletNote = (id) => {
    return {
        type: types.noteDelete,
        payload: id
    }
}

export const notesCleanLogout = () => {
    return {
        type: types.noteLogoutCleaning
    }
}