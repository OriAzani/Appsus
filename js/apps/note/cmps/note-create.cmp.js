import { noteService } from "../services/note-service.js";

export default {
  // props: ["info"],
  template: `
    <section class="flex column">
        <input placeholder="Title" v-if="isAddNote"  type="text" v-model.trim="noteToAdd.title"/>
        <input placeholder="add something..." @click="isAddNote=true">
        <button v-if="isAddNote" class="align-self-start" @click='saveNote'>save note</button>
    </section>
`,
  data() {
    return {
      isAddNote: false,

      noteToAdd: {
        id: "",
        type: "",
        isPinned: false,
        info: {
          txt: "",
        },
      },
    };
  },
  methods: {
    saveNote() {
      noteService.saveNote(this.noteToAdd);
      // .then((savedNote) => {
      //     console.log("SAVED note: ", savedNote);
      // this.$router.push('/car')
      //     });
    },
  },
  components: {
    noteService,
  },
};
