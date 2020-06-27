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
                title: "Ori Is the best partner ever",
                txt: "Ori Azani bla bla bla "

            }
        },
        {
            id: 102,
            type: "noteImg",
            isPinned: true,
            info: {
                title: "watch out, the Corona is here.in the meantime enjoy the picture",
                url: "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 103,
            type: "noteVideo",
            isPinned: true,
            info: {
                title: "chuck Norris... a childhood hero",
                url: "https://www.youtube.com/embed/tgbNymZ7vqY",
            },
            style: {
                backgroundColor: "#00d"
            }
        },

        {
            id: 104,
            type: "noteTodos",
            isPinned: true,
            info: {
                title: "make a shower",
                todos: [
                    { txt: "Do that", doneAt: Date.now(), },
                    { txt: "Do this", doneAt: Date.now(), },
                    { txt: "Do something", doneAt: Date.now(), },
                    { txt: "Do nothing", doneAt: Date.now(), },
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
        notes.unshift(note);
        Utils.storeToStorage("notes", notes);
        console.log(notes);
    });
}