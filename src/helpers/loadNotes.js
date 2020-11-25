import { db } from "../firebase/firebase-config"


export const loadNotes = async (uid) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    notesSnap.forEach((snapChildren) => {
        console.log(snapChildren.data())

        notes.push({
            id: snapChildren.id,
            ...snapChildren.data()
        });
    });


    console.log(notes)

    return notes;
}