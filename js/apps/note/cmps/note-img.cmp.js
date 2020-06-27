export default {
    props: ["info"],
    template: `
    <section class="note image">
    <h2 v-if="info.title">{{info.title}}</h2>
        <img backgron width="200" height="200" :src="imgUrl" alt="Italian Trulli">
    </section>
    `,
    data() {
        return {
            imgUrl: null,
        }
    },
    created() {
        this.imgUrl = this.info.url

    },

}