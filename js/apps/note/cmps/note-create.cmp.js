import { noteService } from "../services/note-service.js";
import notePreview from "./note-preview.cmp.js";
export default {
    props: ["notes"],
    template: `
    <section class="note-create flex column">
        <section class="flex column note-create-firts-inputs">
            <input placeholder="Title" v-if="isAddNote"  type="text" v-model.trim="noteToAdd.info.title"/>
            <input placeholder="add something..." @click="isAddNote=true" type="text" v-model.trim="noteToAdd.info.txt">
            <input placeholder="add a url" v-if="isAddUrl"  type="text" v-model.trim="noteToAdd.info.url"/>

        </section>
       <section class="flex create-media-btns">
       <button v-if="isAddNote"  @click='saveNote'><i class="far fa-save"></i></button>
           <button @click="isAddUrl=true" @click="changeNoteType('noteImg')" > <i class="far fa-image"></i></button>
           <button @click="isAddUrl=true" @click="changeNoteType('noteVideo')"><i class="fas fa-film"></i></button>
       </section>

       
        <note-preview v-for="note in notes"  :note="note" :key="note.id"/> 
    </section>
`,
    data() {
        return {
            isAddNote: false,
            isAddUrl: false,
            noteToAdd: {
                id: "",
                type: "noteText",
                isPinned: false,
                info: {
                    title: "",
                    txt: "",
                    url: "",
                },
            },
        };
    },
    methods: {
        saveNote() {
            noteService.saveNote(this.noteToAdd);
            this.noteToAdd = {
                id: "",
                type: "noteText",
                isPinned: false,
                info: {
                    title: "",
                    txt: "",
                    url: "",
                },
            }
        },
        changeNoteType(type) {
            this.noteToAdd.type = type;
        },
    },
    components: {
        noteService,
        notePreview
    },
};