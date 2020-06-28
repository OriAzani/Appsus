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
                title: "Advanced Workout Routine For Men",
                txt: "Day 1- Chest & Back ,Day-2:Legs, Day-3:Shoulders & Arms, Day-4: Rest, Day-5 Chest, Shoulders, & Triceps ,Day-6: Back & Biceps, Day-7: Legs "
            }
        },
        {
            id: 102,
            type: "noteImg",
            isPinned: true,
            info: {
                title: "Vacation in the caribbeans",
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
                title: "Pocahontas | Colors of the Wind | Disney Sing-Along",
                url: "https://www.youtube.com/embed/O9MvdMqKvpU?autoplay=1",
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
                title: "Todos!!",
                todos: [
                    { txt: "Buy groceries", doneAt: Date.now(), },
                    { txt: "Clean the apartment", doneAt: Date.now(), },
                    { txt: "study vue framework", doneAt: Date.now(), },
                    { txt: "call mom", doneAt: Date.now(), },
                ]
            }
        },
        {
            id: 105,
            type: "noteVideo",
            isPinned: true,
            info: {
                title: "Lion king",
                url: "https://www.youtube.com/embed/25QyCxVkXwQ",
            },
            style: {
                backgroundColor: "#00d"
            }
        },

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