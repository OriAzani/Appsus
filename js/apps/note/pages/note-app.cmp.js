import { noteService } from "../services/note-service.js"
import noteList from "../cmps/note-list.cmp.js";

// import emailNav from "../cmps/email-nav-bar-cmp.js";
// import bookFilter from "../cmps/book-filter.cmp.js";

export default {
    template: `
             <main class="note-app">
            <note-list :notes="notesToShow"></note-list>           
            </main>
    `,
    data() {
        return {
            notes: [],
            filterBy: null,
        };
    },
    computed: {
        notesToShow() {
            const filterBy = this.filterBy;
            if (!filterBy) return this.notes;
        },
    },
    created() {
        noteService.getNotes().then((notes) => {
            this.notes = notes;

        });

    },
    components: {
        noteList,
    },
};