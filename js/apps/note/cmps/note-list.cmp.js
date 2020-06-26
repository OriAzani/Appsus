import notePreview from './note-preview.cmp.js';
import { noteService } from "../services/note-service.js"
export default {
    props: ["notes"],
    template: `
    <div>
        <ul class="note-list clean-list space-around">
            <note-preview v-for="note in notes" @click.native="selectedNote(note)" :note="note" :key="note.id"/>
            
            <h3 @click="isAddNote=!isAddNote">add text note </h3>
        <input v-if="isAddNote"  type="text" v-model.trim="noteToAdd.info.txt"/>
       
        <button v-if="isAddNote" class="align-self-start" @click='saveNote'>save note</button>
          
        </ul>
  
</div>
       
    `,
    data() {
        return {
            noteToAdd: noteService.getEmptyNote(),
            isAddNote: false,
        }
    },
    methods: {
        selectedNote(note) {
            this.$emit("noteSelected", note);
        }

        ,
    },
    components: {
        notePreview,
        // addNote
    },
    created() {
        console.log(this.notes);

    },
    methods: {
        saveNote() {
            noteService.saveNote(this.noteToAdd)
                .then(savedNote => {
                    console.log('SAVED note: ', savedNote);
                    // this.$router.push('/car')
                })
        },
    }
}