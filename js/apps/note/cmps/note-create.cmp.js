import { noteService } from "../services/note-service.js";
import notePreview from "./note-preview.cmp.js";
export default {
    props: ["notes"],
    template: `
    <section class="flex column">
        <input placeholder="Title" v-if="isAddNote"  type="text" v-model.trim="noteToAdd.info.title"/>
        <input placeholder="add something..." @click="isAddNote=true" type="text" v-model.trim="noteToAdd.info.txt">

        <button @click="isAddUrl=true" @click="changeNoteType('noteImg')">add image</button>
       <button @click="isAddUrl=true" @click="changeNoteType('noteVideo')">add video</button>
       <!-- <button @click="noteToAdd.type=noteTodos">add todos</button> -->

       <input placeholder="add a url" v-if="isAddUrl"  type="text" v-model.trim="noteToAdd.info.url"/>
       <!-- <input placeholder="Title" v-if="isAddNote"  type="text" v-model.trim="noteToAdd.info.title"/> -->
       

        <button v-if="isAddNote" class="align-self-start"  @click='saveNote'>save note</button>
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