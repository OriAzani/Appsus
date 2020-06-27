import notePreview from "./note-preview.cmp.js";

export default {
    props: ["notes"],
    template: `
    <div>
        <ul class="noteBox clean-list">
            <note-preview v-for="note in notes" @click.native="selectedNote(note)" :note="note" :key="note.id"/> 
        </ul>
    </div>
    `,
    methods: {
        selectedNote(note) {
            this.$emit("noteSelected", note);
        },
    },
    components: {
        notePreview,
    },
};