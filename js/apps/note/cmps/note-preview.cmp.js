import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';
export default {
    props: ['note'],
    template: `
      <li >
      <component class="preview-note" :is="note.type"  :info="note.info"></component>
      </li>
    `,

    components: {
        noteText,
        noteImg,
        noteTodos,
        noteVideo,
    },
    created() {
        console.log(this.note);


    }
};