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
    return [
        {
            id: 101,
            type: "noteImg",
            isPinned: true,
            info: {
                title: "Moonlight Shadow",
                url: "https://files.brightside.me/files/news/part_4/46555/206005-12-_2_-1000-73714306eb-1570093949.jpg",
            },
            style: {
                backgroundColor: "#00d"
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
            type: "noteVideo",
            isPinned: true,
            info: {
                title: "Cali Move VS Fitness FAQs | Sydney VLOG #2",
                url: "https://www.youtube.com/watch?v=lCaUetzqZTk",
            },
            style: {
                backgroundColor: "#00d"
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
        {
            id: 106,
            type: "noteVideo",
            isPinned: true,
            info: {
                title: "Rocky Balboa",
                url: "https://www.youtube.com/watch?v=ac03kTu6Q28",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 107,
            type: "noteVideo",
            isPinned: true,
            info: {
                title: "Powerful Detox Music",
                url: "https://www.youtube.com/watch?v=X-3Wo8Qm6H4",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 108,
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
            id: 109,
            type: "noteText",
            isPinned: true,
            info: {
                title: "Advanced Workout Routine For Men",
                txt: "Day 1- Chest & Back ,Day-2:Legs, Day-3:Shoulders & Arms, Day-4: Rest, Day-5 Chest, Shoulders, & Triceps ,Day-6: Back & Biceps, Day-7: Legs "
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