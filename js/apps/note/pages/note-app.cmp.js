import { noteService } from "../services/note-service.js";
// import emailList from "../cmps/email-list.cmp.js";

// import emailNav from "../cmps/email-nav-bar-cmp.js";
// import bookFilter from "../cmps/book-filter.cmp.js";

export default {
    template: `
        <main class="note-app">
        <div v-for="(cmp, idx) in survey.cmps">
                    <component :is="cmp.type"  :info="cmp.info" @setVal="setAns($event, idx)"></component>
                </div>
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
            // var filteredEmails = this.emails.filter((email) => {
            //     const amount = email.listPrice.amount;
            //     if (
            //         email.title.toLowerCase().includes(filterBy.byName.toLowerCase()) &&
            //         amount >= filterBy.minPrice &&
            //         amount <= filterBy.maxPrice
            //     ) {
            //         return email;
            //     }
            // });
            // return filteredEmails;
        },
    },
    methods: {
        // setFilter(filterBy) {
        //     this.filterBy = filterBy;
        // },
    },
    created() {
        noteService.getNotes().then((notes) => {
            this.notes = notes;
            console.log('wowwwwwwwwwww' + this.notes);

        });
    },

    // components: {
    //     emailList,
    //     emailNav
    //     //     bookFilter,
    // },
};