import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';
export default {
    props: ['note'],
    template: `
      <li class="flex space-between wrap">
      <h2 v-if="note.info.title">{{note.info.title}}</h2>
      <component :is="note.type"  :info="note.info"></component>
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