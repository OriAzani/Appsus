export default {
    props: ["info"],
    template: `
        <section class="note note-txt">
        <h2 v-if="info.title">{{info.title}}</h2>
                <label>{{info.txt}}</label>
        </section>
        `,
}