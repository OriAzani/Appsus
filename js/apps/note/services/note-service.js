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
    // getEmailById,
    // changeReadStatus,
    saveToLocalStorage,
    //saveEmails,
    // getNextEmailsId 
}

function saveToLocalStorage() {
    Utils.storeToStorage('notes', gNotes)
}


function _createDefaultNotes() {
    return [{
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        }, {
            type: "NoteImg",
            info: {
                url: "http://some-img/me",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            type: "NoteTodos",
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