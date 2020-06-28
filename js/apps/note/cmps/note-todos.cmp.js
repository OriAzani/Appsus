export default {
    props: ["info"],
    template: `
        <section  class="note todos">
        <h2 v-if="info.title">{{info.title}}</h2>
        <li v-for="todo in info.todos">

                {{todo.txt}}
                {{convertTime(todo.doneAt)}}
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