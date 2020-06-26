import { Utils } from './utils-service.js';

var gNotes = (() => {
    var notes = Utils.loadFromStorage("notes");
    if (!notes) {
        notes = _createDefaultNotes();
        Utils.storeToStorage("notes", notes);
    }
    return notes;
})();

export const noteService = {
    getNotes,
    saveToLocalStorage,
    saveNote,
    getEmptyNote
}

function saveToLocalStorage() {
    Utils.storeToStorage('notes', gNotes)
}

function getEmptyNote() {
    return {
        id: 101,
        type: "",
        isPinned: true,
        info: {
            txt: ""
        }
    };
}


function _createDefaultNotes() {
    return [{
            id: 101,
            type: "noteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        }, {
            id: 102,
            type: "noteImg",
            isPinned: true,
            info: {
                url: "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 103,
            type: "noteTodos",
            isPinned: true,
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        }
    ];
}

function getNotes() {

    return Promise.resolve(gNotes);
}

function saveNote(note) {
    note.createdAt = Date.now();
    note.id = Utils.getRandomId();
    console.log(gNotes);
    getNotes().then((notes) => {
        notes.push(note);
        Utils.storeToStorage("notes", notes);
        console.log(note);
    });
}
// function saveNote(note) {
//     if (note.id) {
//         const idx = gNotes.findIndex(currNote => currNote.id === note.id)
//         gNotes.splice(idx, 1, note)
//     } else {
//         note.id = Utils.getRandomId();
//         note.createdAt = Date.now();
//         gNotes.unshift(note);
//     }
//     return Promise.resolve(note);
// }

// function getEmailById(emailId) {
//     const email = gEmails.find((email) => email.emailId === emailId);
//     return Promise.resolve(email);
// }


// function changeReadStatus(email) {
//     console.log(email)
//     email.isRead = true;
//     const idx = gEmails.findIndex(currEmail => currEmail.emailId === email.emailId)
//     gEmails.splice(idx, 1, email)

// }


// function saveEmail(email) {
//     if (car.id) {
//         const idx = gCars.findIndex(currCar => currCar.id === car.id)
//         gCars.splice(idx, 1, car)
//     } else {
//         car.id = Utils.getRandomId();
//         car.createdAt = Date.now();
//         gCars.unshift(car);
//     }
//     return Promise.resolve(car);
// }