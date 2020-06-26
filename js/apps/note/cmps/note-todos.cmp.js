export default {
  props: ["info"],
  template: `
        <section>
        <li v-for="todo in info.todos">
                <label>{{todo.txt}}</label>
                <label>{{convertTime(todo.doneAt)}}</label>
        </li>
        </section>
        `,
  data() {
    return {
      convertedTime: "",
    };
  },
  methods: {
    convertTime(time) {
     // var time = this.note.info.todos[0].doneAt;
       this.convertedTime = moment(time).format("llll");
      console.log(this.convertedTime);
      return this.convertedTime
    },
  },
  created() {
   // this.convertTime();
  },
};
